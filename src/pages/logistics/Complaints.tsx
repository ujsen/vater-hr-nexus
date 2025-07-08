import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, AlertTriangle, MessageSquare, TrendingUp } from "lucide-react";

const Complaints = () => {
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
                Complaints Management
              </h1>
              <p className="text-app-text-secondary text-lg mt-2">
                Customer Feedback & Issue Resolution
              </p>
            </div>
          </div>
        </div>

        {/* Complaints Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-destructive" />
                Active Complaints
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                  <div>
                    <p className="text-card-foreground font-medium">CP-2024-001</p>
                    <p className="text-muted-foreground text-sm">Delivery Delay</p>
                  </div>
                  <span className="px-2 py-1 bg-destructive text-white text-xs rounded">High</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                  <div>
                    <p className="text-card-foreground font-medium">CP-2024-002</p>
                    <p className="text-muted-foreground text-sm">Damaged Goods</p>
                  </div>
                  <span className="px-2 py-1 bg-app-orange text-white text-xs rounded">Medium</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-app-green" />
                Recent Feedback
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="text-card-foreground">Excellent service quality</p>
                  <p className="text-muted-foreground">Customer #1234 - 2 hours ago</p>
                </div>
                <div className="text-sm">
                  <p className="text-card-foreground">On-time delivery</p>
                  <p className="text-muted-foreground">Customer #5678 - 4 hours ago</p>
                </div>
                <div className="text-sm">
                  <p className="text-card-foreground">Professional driver</p>
                  <p className="text-muted-foreground">Customer #9012 - 6 hours ago</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-app-teal" />
                Complaint Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Open Complaints</span>
                  <span className="text-destructive font-bold">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Resolved This Week</span>
                  <span className="text-app-green font-bold">18</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Resolution Rate</span>
                  <span className="text-app-green font-bold">92%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Complaints;