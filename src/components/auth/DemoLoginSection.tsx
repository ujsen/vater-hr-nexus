
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface DemoLoginSectionProps {
  onDemoLogin: () => void;
  loading: boolean;
}

export const DemoLoginSection = ({ onDemoLogin, loading }: DemoLoginSectionProps) => {
  return (
    <div className="mb-6 p-4 bg-gray-700/30 rounded-lg border border-gray-600">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-300">Demo Login</h3>
        <Play className="w-4 h-4 text-orange-400" />
      </div>
      <p className="text-xs text-gray-400 mb-3">
        Try the system instantly with demo account
      </p>
      <Button
        onClick={onDemoLogin}
        disabled={loading}
        variant="outline"
        className="w-full text-orange-400 border-orange-400 hover:bg-orange-400 hover:text-gray-900 disabled:opacity-50"
      >
        {loading ? "Setting up demo..." : "Quick Demo Login"}
      </Button>
    </div>
  );
};
