
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Building2, Mail, Lock, User, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
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
            emailRedirectTo: `${window.location.origin}/`,
            data: {
              full_name: fullName,
            },
          },
        });
        if (error) throw error;
        toast({
          title: "Registration successful", 
          description: "Please check your email to verify your account.",
        });
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

      // If sign in failed, create the account without email verification
      if (signInError?.message.includes("Invalid login credentials")) {
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
          email: demoEmail,
          password: demoPassword,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            data: {
              full_name: "Demo User",
            },
            // Disable email confirmation for demo
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
      // Fill the form for manual attempt
      setEmail(demoEmail);
      setPassword(demoPassword);
      setIsLogin(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center p-6">
      <Card className="w-full max-w-md bg-gray-800/50 border-gray-700">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Building2 className="w-12 h-12 text-orange-400" />
          </div>
          <CardTitle className="text-2xl text-white">
            {isLogin ? "Welcome Back" : "Create Account"}
          </CardTitle>
          <p className="text-gray-400">
            {isLogin ? "Sign in to your ERP account" : "Sign up for ERP access"}
          </p>
        </CardHeader>
        <CardContent>
          {/* Demo Login Section */}
          <div className="mb-6 p-4 bg-gray-700/30 rounded-lg border border-gray-600">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-300">Demo Login</h3>
              <Play className="w-4 h-4 text-orange-400" />
            </div>
            <p className="text-xs text-gray-400 mb-3">
              Try the system instantly with demo account
            </p>
            <Button
              onClick={handleDemoLogin}
              disabled={loading}
              variant="outline"
              className="w-full text-orange-400 border-orange-400 hover:bg-orange-400 hover:text-gray-900 disabled:opacity-50"
            >
              {loading ? "Setting up demo..." : "Quick Demo Login"}
            </Button>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-gray-300">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required={!isLogin}
                    className="pl-10 bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-10 bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800"
            >
              {loading ? "Processing..." : isLogin ? "Sign In" : "Sign Up"}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              {isLogin ? "Need an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </CardContent>
      </Card>
      
      {/* Credits Footer */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        <p className="mb-2">© 2024 ERP Management System</p>
        <p className="text-xs">
          Powered by <span className="text-orange-400">Lovable</span> • 
          Built with <span className="text-orange-400">React</span> & <span className="text-orange-400">Supabase</span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
