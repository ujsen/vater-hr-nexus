
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft,
  Truck,
  Package,
  MapPin,
  Clock,
  DollarSign,
  Users
} from "lucide-react";

const Logistics = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-app p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-primary animate-fade-in">
                Logistics Service
              </h1>
              <p className="text-app-text-secondary text-lg mt-2">
                Transportation & Supply Chain Management
              </p>
            </div>
          </div>
        </div>

        {/* Logistics Modules */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-card-foreground mb-8 text-center">
            أدارة الخدمات اللوجستية
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {/* WorkShop */}
            <div className="flex flex-col items-center group cursor-pointer" onClick={() => navigate('/logistics/workshop')}>
              <div className="w-20 h-20 bg-card border-2 border-border rounded-full flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Truck className="w-8 h-8 text-app-blue" />
              </div>
              <span className="text-card-foreground font-medium text-sm text-center">WorkShop</span>
            </div>

            {/* Vehicle Data */}
            <div className="flex flex-col items-center group cursor-pointer" onClick={() => navigate('/logistics/vehicle-data')}>
              <div className="w-20 h-20 bg-card border-2 border-border rounded-full flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Package className="w-8 h-8 text-app-teal" />
              </div>
              <span className="text-card-foreground font-medium text-sm text-center">Vehicle Data</span>
            </div>

            {/* Update Vehicle */}
            <div className="flex flex-col items-center group cursor-pointer" onClick={() => navigate('/logistics/update-vehicle')}>
              <div className="w-20 h-20 bg-card border-2 border-border rounded-full flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <MapPin className="w-8 h-8 text-app-orange" />
              </div>
              <span className="text-card-foreground font-medium text-sm text-center">Update Vehicle</span>
            </div>

            {/* Complaints */}
            <div className="flex flex-col items-center group cursor-pointer" onClick={() => navigate('/logistics/complaints')}>
              <div className="w-20 h-20 bg-card border-2 border-border rounded-full flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Users className="w-8 h-8 text-app-green" />
              </div>
              <span className="text-card-foreground font-medium text-sm text-center">Complaints</span>
            </div>

            {/* Task */}
            <div className="flex flex-col items-center group cursor-pointer" onClick={() => navigate('/logistics/task')}>
              <div className="w-20 h-20 bg-card border-2 border-border rounded-full flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <span className="text-card-foreground font-medium text-sm text-center">Task</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Active Shipments */}
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center">
                <Truck className="w-5 h-5 mr-2 text-app-blue" />
                Active Shipments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                  <div>
                    <p className="text-card-foreground font-medium">SH-2024-001</p>
                    <p className="text-muted-foreground text-sm">Dubai → Riyadh</p>
                  </div>
                  <span className="px-2 py-1 bg-app-green text-white text-xs rounded">In Transit</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                  <div>
                    <p className="text-card-foreground font-medium">SH-2024-002</p>
                    <p className="text-muted-foreground text-sm">Jeddah → Dammam</p>
                  </div>
                  <span className="px-2 py-1 bg-app-orange text-white text-xs rounded">Loading</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                  <div>
                    <p className="text-card-foreground font-medium">SH-2024-003</p>
                    <p className="text-muted-foreground text-sm">Riyadh → Makkah</p>
                  </div>
                  <span className="px-2 py-1 bg-app-blue text-white text-xs rounded">Scheduled</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fleet Status */}
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center">
                <Package className="w-5 h-5 mr-2 text-app-green" />
                Fleet Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Available Trucks</span>
                  <span className="text-app-green font-bold">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">In Transit</span>
                  <span className="text-app-orange font-bold">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Under Maintenance</span>
                  <span className="text-destructive font-bold">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Fleet</span>
                  <span className="text-foreground font-bold">23</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center">
                <Clock className="w-5 h-5 mr-2 text-app-teal" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="text-card-foreground">Shipment SH-2024-001 departed</p>
                  <p className="text-muted-foreground">2 hours ago</p>
                </div>
                <div className="text-sm">
                  <p className="text-card-foreground">New route optimized</p>
                  <p className="text-muted-foreground">4 hours ago</p>
                </div>
                <div className="text-sm">
                  <p className="text-card-foreground">Driver assigned to SH-2024-003</p>
                  <p className="text-muted-foreground">6 hours ago</p>
                </div>
                <div className="text-sm">
                  <p className="text-card-foreground">Maintenance completed on TR-008</p>
                  <p className="text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Deliveries</p>
                <p className="text-2xl font-bold text-app-blue">1,247</p>
              </div>
              <Package className="w-8 h-8 text-app-blue" />
            </div>
          </div>
          
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">On-Time Rate</p>
                <p className="text-2xl font-bold text-app-green">94%</p>
              </div>
              <Clock className="w-8 h-8 text-app-green" />
            </div>
          </div>
          
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Active Drivers</p>
                <p className="text-2xl font-bold text-foreground">18</p>
              </div>
              <Users className="w-8 h-8 text-app-teal" />
            </div>
          </div>
          
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Monthly Revenue</p>
                <p className="text-2xl font-bold text-app-orange">$284K</p>
              </div>
              <DollarSign className="w-8 h-8 text-app-orange" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logistics;
