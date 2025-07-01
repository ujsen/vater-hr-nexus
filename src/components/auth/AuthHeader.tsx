
import { Building2 } from "lucide-react";
import { CardHeader, CardTitle } from "@/components/ui/card";

interface AuthHeaderProps {
  isLogin: boolean;
}

export const AuthHeader = ({ isLogin }: AuthHeaderProps) => {
  return (
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
  );
};
