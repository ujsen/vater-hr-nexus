import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Wrench, Hammer, Settings } from "lucide-react";

const Workshop = () => {
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
                Workshop Management
              </h1>
              <p className="text-app-text-secondary text-lg mt-2">
                Vehicle Maintenance & Repair Services
              </p>
            </div>
          </div>
        </div>

        {/* Workshop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center">
                <Wrench className="w-5 h-5 mr-2 text-app-blue" />
                Active Repairs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                  <div>
                    <p className="text-card-foreground font-medium">Vehicle TR-001</p>
                    <p className="text-muted-foreground text-sm">Engine Repair</p>
                  </div>
                  <span className="px-2 py-1 bg-app-orange text-white text-xs rounded">In Progress</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                  <div>
                    <p className="text-card-foreground font-medium">Vehicle TR-005</p>
                    <p className="text-muted-foreground text-sm">Brake Service</p>
                  </div>
                  <span className="px-2 py-1 bg-app-green text-white text-xs rounded">Completed</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center">
                <Hammer className="w-5 h-5 mr-2 text-app-green" />
                Maintenance Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Due Today</span>
                  <span className="text-destructive font-bold">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Due This Week</span>
                  <span className="text-app-orange font-bold">7</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Overdue</span>
                  <span className="text-destructive font-bold">2</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center">
                <Settings className="w-5 h-5 mr-2 text-app-teal" />
                Workshop Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Technicians Available</span>
                  <span className="text-app-green font-bold">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Work Orders Today</span>
                  <span className="text-foreground font-bold">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Completion Rate</span>
                  <span className="text-app-green font-bold">87%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Workshop;