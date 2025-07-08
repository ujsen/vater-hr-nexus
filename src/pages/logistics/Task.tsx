import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckSquare, Clock, Users } from "lucide-react";

const Task = () => {
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
                Task Management
              </h1>
              <p className="text-app-text-secondary text-lg mt-2">
                Operations & Assignment Tracking
              </p>
            </div>
          </div>
        </div>

        {/* Task Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center">
                <CheckSquare className="w-5 h-5 mr-2 text-app-blue" />
                Active Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                  <div>
                    <p className="text-card-foreground font-medium">TSK-001</p>
                    <p className="text-muted-foreground text-sm">Route Planning</p>
                  </div>
                  <span className="px-2 py-1 bg-app-green text-white text-xs rounded">In Progress</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                  <div>
                    <p className="text-card-foreground font-medium">TSK-002</p>
                    <p className="text-muted-foreground text-sm">Vehicle Inspection</p>
                  </div>
                  <span className="px-2 py-1 bg-app-orange text-white text-xs rounded">Pending</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center">
                <Clock className="w-5 h-5 mr-2 text-app-green" />
                Task Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="text-card-foreground">Driver assignment completed</p>
                  <p className="text-muted-foreground">Due: Today 3:00 PM</p>
                </div>
                <div className="text-sm">
                  <p className="text-card-foreground">Route optimization review</p>
                  <p className="text-muted-foreground">Due: Tomorrow 9:00 AM</p>
                </div>
                <div className="text-sm">
                  <p className="text-card-foreground">Fleet maintenance check</p>
                  <p className="text-muted-foreground">Due: Friday 2:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center">
                <Users className="w-5 h-5 mr-2 text-app-teal" />
                Team Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Tasks Completed</span>
                  <span className="text-foreground font-bold">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Tasks In Progress</span>
                  <span className="text-app-orange font-bold">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Team Efficiency</span>
                  <span className="text-app-green font-bold">89%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Task;