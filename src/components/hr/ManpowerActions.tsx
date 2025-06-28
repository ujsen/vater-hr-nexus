
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const ManpowerActions = () => {
  const { toast } = useToast();

  const handleAction = (action: string) => {
    toast({
      title: `${action} Action`,
      description: `${action} functionality will be implemented soon.`,
    });
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button 
        onClick={() => handleAction("Export to Excel")}
        className="bg-blue-600 hover:bg-blue-700"
      >
        Export to Excel
      </Button>
      <Button 
        onClick={() => handleAction("Final Exit")}
        className="bg-blue-600 hover:bg-blue-700"
      >
        Final Exit
      </Button>
      <Button 
        onClick={() => handleAction("Evasion")}
        className="bg-blue-600 hover:bg-blue-700"
      >
        Evasion
      </Button>
      <Button 
        onClick={() => handleAction("In Prison")}
        className="bg-blue-600 hover:bg-blue-700"
      >
        In Prison
      </Button>
      <Button 
        onClick={() => handleAction("Dependent")}
        className="bg-blue-600 hover:bg-blue-700"
      >
        Dependent
      </Button>
      <Button 
        onClick={() => handleAction("Employee Cost")}
        className="bg-blue-600 hover:bg-blue-700"
      >
        Employee Cost
      </Button>
    </div>
  );
};
