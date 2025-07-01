
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Building2 className="w-6 h-6 text-orange-400" />
          <span className="text-white font-medium">ERP Management System</span>
        </div>
        <Button
          onClick={() => navigate('/')}
          variant="outline"
          className="text-gray-300 border-gray-600 hover:bg-gray-700"
        >
          Dashboard
        </Button>
      </div>
    </header>
  );
};
