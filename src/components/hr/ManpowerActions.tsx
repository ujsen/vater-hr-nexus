
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export const ManpowerActions = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleExportToExcel = () => {
    toast({
      title: "Export to Excel",
      description: "Export functionality will be implemented soon.",
    });
  };

  const handleFinalExit = () => {
    navigate('/hr/final-exit');
  };

  const handleEvasion = () => {
    navigate('/hr/evasion');
  };

  const handleInPrison = () => {
    toast({
      title: "In Prison Action",
      description: "In Prison functionality will be implemented soon.",
    });
  };

  const handleDependent = () => {
    navigate('/hr/dependent');
  };

  const handleEmployeeCost = () => {
    navigate('/hr/employee-cost');
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button 
        onClick={handleExportToExcel}
        className="bg-blue-600 hover:bg-blue-700"
      >
        Export to Excel
      </Button>
      <Button 
        onClick={handleFinalExit}
        className="bg-blue-600 hover:bg-blue-700"
      >
        Final Exit
      </Button>
      <Button 
        onClick={handleEvasion}
        className="bg-blue-600 hover:bg-blue-700"
      >
        Evasion
      </Button>
      <Button 
        onClick={handleInPrison}
        className="bg-blue-600 hover:bg-blue-700"
      >
        In Prison
      </Button>
      <Button 
        onClick={handleDependent}
        className="bg-blue-600 hover:bg-blue-700"
      >
        Dependent
      </Button>
      <Button 
        onClick={handleEmployeeCost}
        className="bg-blue-600 hover:bg-blue-700"
      >
        Employee Cost
      </Button>
    </div>
  );
};
