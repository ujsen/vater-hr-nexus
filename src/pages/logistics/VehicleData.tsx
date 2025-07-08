import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Car, CheckSquare, FileText, Users, Fuel, Monitor, Shield, Truck, Wrench, Settings, Plus } from "lucide-react";

const VehicleData = () => {
  const navigate = useNavigate();

  const vehicleModules = [
    { name: "Vehicle Record", icon: Car, color: "text-app-blue" },
    { name: "MVPI Record", icon: CheckSquare, color: "text-app-green" },
    { name: "Registration Record", icon: FileText, color: "text-app-teal" },
    { name: "Transfer Vehicle/EQ Custody", icon: Users, color: "text-app-orange" },
    { name: "Authorized Record", icon: Shield, color: "text-app-green" },
    { name: "Fuel and Oil Change Record", icon: Fuel, color: "text-destructive" },
    { name: "OperationCard Record", icon: Monitor, color: "text-app-blue" },
    { name: "ThirdParty Record", icon: Users, color: "text-app-teal" },
    { name: "STANDBY", icon: Truck, color: "text-app-orange" },
    { name: "Assets Movement", icon: Wrench, color: "text-app-blue" },
    { name: "Add & Update Vehical", icon: Plus, color: "text-app-green" },
    { name: "Update Custody Attach", icon: Settings, color: "text-app-orange" }
  ];

  return (
    <div className="min-h-screen bg-gradient-app p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/logistics')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-card-foreground">
            Vehicle <span className="text-destructive">Information</span>
          </h1>
        </div>

        {/* Vehicle Modules Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center max-w-6xl mx-auto">
          {vehicleModules.map((module, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer hover:scale-105 transition-transform">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg border-2 border-border">
                <module.icon className={`w-12 h-12 ${module.color}`} />
              </div>
              <span className="text-card-foreground font-medium text-sm text-center max-w-[120px] leading-tight">
                {module.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleData;