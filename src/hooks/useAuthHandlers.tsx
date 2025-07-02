
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const useAuthHandlers = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAuth = async (
    isLogin: boolean,
    email: string,
    password: string,
    fullName: string
  ) => {
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        toast({
          title: "Login successful",
          description: "Welcome back to the ERP system!",
        });
        navigate("/");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
            emailRedirectTo: undefined,
          },
        });
        if (error) throw error;
        toast({
          title: "Registration successful", 
          description: "Your account has been created successfully!",
        });
        // Automatically try to sign in after signup
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (!signInError) {
          navigate("/");
        }
      }
    } catch (error: any) {
      toast({
        title: "Authentication error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setLoading(true);
    const demoEmail = "demo@erp.com";
    const demoPassword = "demo123456";
    
    try {
      // Try to sign in first
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email: demoEmail,
        password: demoPassword,
      });

      if (signInData?.user && !signInError) {
        toast({
          title: "Demo login successful",
          description: "Welcome to the ERP system demo!",
        });
        navigate("/");
        return;
      }

      // If sign in failed, create the account
      if (signInError?.message.includes("Invalid login credentials")) {
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
          email: demoEmail,
          password: demoPassword,
          options: {
            data: {
              full_name: "Demo User",
            },
            emailRedirectTo: undefined,
          },
        });

        if (signUpError) {
          throw signUpError;
        }

        // Demo account created, now try to sign in
        if (signUpData?.user) {
          const { data: finalSignInData, error: finalSignInError } = await supabase.auth.signInWithPassword({
            email: demoEmail,
            password: demoPassword,
          });

          if (finalSignInData?.user && !finalSignInError) {
            toast({
              title: "Demo login successful",
              description: "Welcome to the ERP system demo!",
            });
            navigate("/");
          } else {
            throw finalSignInError || new Error("Failed to sign in after creation");
          }
        }
      } else {
        throw signInError;
      }
    } catch (error: any) {
      console.error("Demo login error:", error);
      toast({
        title: "Demo login error",
        description: "Please try manual login or contact support.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleAuth,
    handleDemoLogin,
  };
};
