
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="text-gray-300 border-gray-600 hover:bg-gray-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                Logistics Service
              </h1>
              <p className="text-gray-300 text-lg mt-2">
                Transportation & Supply Chain Management
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Active Shipments */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Truck className="w-5 h-5 mr-2 text-blue-400" />
                Active Shipments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded">
                  <div>
                    <p className="text-white font-medium">SH-2024-001</p>
                    <p className="text-gray-400 text-sm">Dubai → Riyadh</p>
                  </div>
                  <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">In Transit</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded">
                  <div>
                    <p className="text-white font-medium">SH-2024-002</p>
                    <p className="text-gray-400 text-sm">Jeddah → Dammam</p>
                  </div>
                  <span className="px-2 py-1 bg-yellow-600 text-white text-xs rounded">Loading</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded">
                  <div>
                    <p className="text-white font-medium">SH-2024-003</p>
                    <p className="text-gray-400 text-sm">Riyadh → Makkah</p>
                  </div>
                  <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">Scheduled</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fleet Status */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Package className="w-5 h-5 mr-2 text-green-400" />
                Fleet Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Available Trucks</span>
                  <span className="text-green-400 font-bold">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">In Transit</span>
                  <span className="text-yellow-400 font-bold">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Under Maintenance</span>
                  <span className="text-red-400 font-bold">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total Fleet</span>
                  <span className="text-white font-bold">23</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Clock className="w-5 h-5 mr-2 text-purple-400" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="text-white">Shipment SH-2024-001 departed</p>
                  <p className="text-gray-400">2 hours ago</p>
                </div>
                <div className="text-sm">
                  <p className="text-white">New route optimized</p>
                  <p className="text-gray-400">4 hours ago</p>
                </div>
                <div className="text-sm">
                  <p className="text-white">Driver assigned to SH-2024-003</p>
                  <p className="text-gray-400">6 hours ago</p>
                </div>
                <div className="text-sm">
                  <p className="text-white">Maintenance completed on TR-008</p>
                  <p className="text-gray-400">1 day ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Deliveries</p>
                <p className="text-2xl font-bold text-blue-400">1,247</p>
              </div>
              <Package className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">On-Time Rate</p>
                <p className="text-2xl font-bold text-green-400">94%</p>
              </div>
              <Clock className="w-8 h-8 text-green-400" />
            </div>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Drivers</p>
                <p className="text-2xl font-bold text-white">18</p>
              </div>
              <Users className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Monthly Revenue</p>
                <p className="text-2xl font-bold text-yellow-400">$284K</p>
              </div>
              <DollarSign className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logistics;
