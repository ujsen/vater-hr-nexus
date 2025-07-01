
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, User } from "lucide-react";

interface AuthFormProps {
  isLogin: boolean;
  email: string;
  password: string;
  fullName: string;
  loading: boolean;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onFullNameChange: (fullName: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const AuthForm = ({
  isLogin,
  email,
  password,
  fullName,
  loading,
  onEmailChange,
  onPasswordChange,
  onFullNameChange,
  onSubmit,
}: AuthFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
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
              onChange={(e) => onFullNameChange(e.target.value)}
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
            onChange={(e) => onEmailChange(e.target.value)}
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
            onChange={(e) => onPasswordChange(e.target.value)}
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
  );
};
