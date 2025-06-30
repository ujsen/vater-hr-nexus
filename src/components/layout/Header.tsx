
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/auth");
  };

  return (
    <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <User className="w-6 h-6 text-orange-400" />
          <span className="text-white font-medium">{user?.email}</span>
        </div>
        <Button
          onClick={handleSignOut}
          variant="outline"
          className="text-gray-300 border-gray-600 hover:bg-gray-700"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </header>
  );
};
