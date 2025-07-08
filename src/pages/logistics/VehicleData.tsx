import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Car, Database, FileText } from "lucide-react";

const VehicleData = () => {
  const navigate = useNavigate();

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
              Back to Logistics
            </Button>
            <div>
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-primary animate-fade-in">
                Vehicle Data Management
              </h1>
              <p className="text-app-text-secondary text-lg mt-2">
                Fleet Information & Documentation
              </p>
            </div>
          </div>
        </div>

        {/* Vehicle Data Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center">
                <Car className="w-5 h-5 mr-2 text-app-blue" />
                Fleet Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                  <div>
                    <p className="text-card-foreground font-medium">TR-001</p>
                    <p className="text-muted-foreground text-sm">Mercedes Actros</p>
                  </div>
                  <span className="px-2 py-1 bg-app-green text-white text-xs rounded">Active</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                  <div>
                    <p className="text-card-foreground font-medium">TR-002</p>
                    <p className="text-muted-foreground text-sm">Volvo FH16</p>
                  </div>
                  <span className="px-2 py-1 bg-app-orange text-white text-xs rounded">Maintenance</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center">
                <Database className="w-5 h-5 mr-2 text-app-green" />
                Vehicle Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Vehicles</span>
                  <span className="text-foreground font-bold">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Operational</span>
                  <span className="text-app-green font-bold">20</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Under Maintenance</span>
                  <span className="text-app-orange font-bold">3</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center">
                <FileText className="w-5 h-5 mr-2 text-app-teal" />
                Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Registration Docs</span>
                  <span className="text-app-green font-bold">✓</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Insurance Valid</span>
                  <span className="text-app-green font-bold">✓</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Permits Updated</span>
                  <span className="text-app-orange font-bold">⚠</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VehicleData;