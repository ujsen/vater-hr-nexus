import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Edit, RefreshCw, CheckCircle } from "lucide-react";

const UpdateVehicle = () => {
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
                Update Vehicle Information
              </h1>
              <p className="text-app-text-secondary text-lg mt-2">
                Modify Fleet Data & Status Updates
              </p>
            </div>
          </div>
        </div>

        {/* Update Vehicle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center">
                <Edit className="w-5 h-5 mr-2 text-app-blue" />
                Pending Updates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                  <div>
                    <p className="text-card-foreground font-medium">TR-003</p>
                    <p className="text-muted-foreground text-sm">Location Update</p>
                  </div>
                  <span className="px-2 py-1 bg-app-orange text-white text-xs rounded">Pending</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                  <div>
                    <p className="text-card-foreground font-medium">TR-007</p>
                    <p className="text-muted-foreground text-sm">Mileage Update</p>
                  </div>
                  <span className="px-2 py-1 bg-app-orange text-white text-xs rounded">Pending</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center">
                <RefreshCw className="w-5 h-5 mr-2 text-app-green" />
                Recent Updates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="text-card-foreground">TR-001 status updated</p>
                  <p className="text-muted-foreground">2 hours ago</p>
                </div>
                <div className="text-sm">
                  <p className="text-card-foreground">TR-005 location updated</p>
                  <p className="text-muted-foreground">4 hours ago</p>
                </div>
                <div className="text-sm">
                  <p className="text-card-foreground">TR-008 maintenance record added</p>
                  <p className="text-muted-foreground">6 hours ago</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-app-teal" />
                Update Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Updates Today</span>
                  <span className="text-foreground font-bold">15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Pending Updates</span>
                  <span className="text-app-orange font-bold">4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Success Rate</span>
                  <span className="text-app-green font-bold">96%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UpdateVehicle;