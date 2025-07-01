
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useAuthHandlers } from "@/hooks/useAuthHandlers";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { DemoLoginSection } from "@/components/auth/DemoLoginSection";
import { AuthForm } from "@/components/auth/AuthForm";
import { AuthToggle } from "@/components/auth/AuthToggle";
import { AuthFooter } from "@/components/auth/AuthFooter";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();
  const { loading, handleAuth, handleDemoLogin } = useAuthHandlers();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAuth(isLogin, email, password, fullName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center p-6">
      <Card className="w-full max-w-md bg-gray-800/50 border-gray-700">
        <AuthHeader isLogin={isLogin} />
        <CardContent>
          <DemoLoginSection onDemoLogin={handleDemoLogin} loading={loading} />
          <AuthForm
            isLogin={isLogin}
            email={email}
            password={password}
            fullName={fullName}
            loading={loading}
            onEmailChange={setEmail}
            onPasswordChange={setPassword}
            onFullNameChange={setFullName}
            onSubmit={onSubmit}
          />
          <AuthToggle isLogin={isLogin} onToggle={() => setIsLogin(!isLogin)} />
        </CardContent>
      </Card>
      
      <AuthFooter />
    </div>
  );
};

export default Auth;
