
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft,
  Wrench,
  Settings,
  CheckCircle2,
  AlertCircle,
  Clock,
  Users,
  FileText,
  DollarSign
} from "lucide-react";

const Workshop = () => {
  const navigate = useNavigate();

  const workOrders = [
    {
      id: "WO-2024-001",
      customer: "Ahmed Construction",
      service: "Hydraulic System Repair",
      status: "In Progress",
      priority: "High",
      technician: "Mohammad Ali",
      estimatedCost: 2500,
      startDate: "2024-01-12"
    },
    {
      id: "WO-2024-002", 
      customer: "Al-Rashid Trading",
      service: "Engine Overhaul",
      status: "Pending",
      priority: "Medium",
      technician: "Hassan Omar",
      estimatedCost: 4200,
      startDate: "2024-01-15"
    },
    {
      id: "WO-2024-003",
      customer: "Citywide Logistics",
      service: "Brake System Service",
      status: "Completed",
      priority: "Low",
      technician: "Ali Rahman",
      estimatedCost: 800,
      startDate: "2024-01-08"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-600';
      case 'In Progress': return 'bg-blue-600';
      case 'Pending': return 'bg-yellow-600';
      default: return 'bg-gray-600';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-400';
      case 'Medium': return 'text-yellow-400';
      case 'Low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

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
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400">
                Workshop Management
              </h1>
              <p className="text-gray-300 text-lg mt-2">
                Service Orders & Equipment Maintenance
              </p>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Work Orders</p>
                  <p className="text-2xl font-bold text-white">{workOrders.length}</p>
                </div>
                <Wrench className="w-8 h-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Completed</p>
                  <p className="text-2xl font-bold text-green-400">
                    {workOrders.filter(wo => wo.status === 'Completed').length}
                  </p>
                </div>
                <CheckCircle2 className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">In Progress</p>
                  <p className="text-2xl font-bold text-blue-400">
                    {workOrders.filter(wo => wo.status === 'In Progress').length}
                  </p>
                </div>
                <Settings className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Revenue MTD</p>
                  <p className="text-2xl font-bold text-yellow-400">$12.5K</p>
                </div>
                <DollarSign className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Work Orders Table */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Active Work Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {workOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-1">{order.id}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-400">
                      <div>Customer: {order.customer}</div>
                      <div>Service: {order.service}</div>
                      <div>Technician: {order.technician}</div>
                      <div>Cost: ${order.estimatedCost.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`font-medium ${getPriorityColor(order.priority)}`}>
                      {order.priority}
                    </span>
                    <span className={`px-3 py-1 rounded text-white text-sm ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Workshop;
