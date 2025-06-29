import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Search, 
  Plus, 
  Wrench, 
  Settings,
  Zap,
  Cog,
  Calendar,
  User,
  Clock,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Workshop = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const workshopItems = [
    {
      id: "WS001",
      equipmentName: "Hydraulic Press",
      type: "Heavy Machinery",
      status: "Operational",
      lastMaintenance: "2024-01-10",
      nextMaintenance: "2024-04-10",
      assignedTo: "Ahmad Hassan",
      location: "Workshop Bay 1",
      priority: "High"
    },
    {
      id: "WS002",
      equipmentName: "Welding Station",
      type: "Welding Equipment",
      status: "Under Maintenance",
      lastMaintenance: "2024-01-15",
      nextMaintenance: "2024-02-15",
      assignedTo: "Mohammed Ali",
      location: "Workshop Bay 2",
      priority: "Medium"
    },
    {
      id: "WS003",
      equipmentName: "Drill Press",
      type: "Power Tool",
      status: "Operational",
      lastMaintenance: "2024-01-05",
      nextMaintenance: "2024-03-05",
      assignedTo: "Omar Khalil",
      location: "Workshop Bay 3",
      priority: "Low"
    },
    {
      id: "WS004",
      equipmentName: "Air Compressor",
      type: "Pneumatic System",
      status: "Out of Order",
      lastMaintenance: "2023-12-20",
      nextMaintenance: "2024-01-20",
      assignedTo: "Ali Ahmed",
      location: "Workshop Bay 4",
      priority: "High"
    }
  ];

  const filteredItems = workshopItems.filter(item => 
    item.equipmentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.assignedTo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Operational": return "bg-green-500";
      case "Under Maintenance": return "bg-yellow-500";
      case "Out of Order": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "text-red-400";
      case "Medium": return "text-yellow-400";
      case "Low": return "text-green-400";
      default: return "text-gray-400";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Heavy Machinery": return Settings;
      case "Welding Equipment": return Zap;
      case "Power Tool": return Wrench;
      case "Pneumatic System": return Cog;
      default: return Wrench;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="text-gray-300 border-gray-600 hover:bg-gray-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-white">Workshop Management</h1>
              <p className="text-gray-400">Manage workshop equipment and maintenance</p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800">
            <Plus className="w-4 h-4 mr-2" />
            Add Equipment
          </Button>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search equipment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Equipment</p>
                  <p className="text-2xl font-bold text-white">{workshopItems.length}</p>
                </div>
                <Wrench className="w-8 h-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Operational</p>
                  <p className="text-2xl font-bold text-green-400">
                    {workshopItems.filter(item => item.status === "Operational").length}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Under Maintenance</p>
                  <p className="text-2xl font-bold text-yellow-400">
                    {workshopItems.filter(item => item.status === "Under Maintenance").length}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Out of Order</p>
                  <p className="text-2xl font-bold text-red-400">
                    {workshopItems.filter(item => item.status === "Out of Order").length}
                  </p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredItems.map((item) => {
            const TypeIcon = getTypeIcon(item.type);
            return (
              <Card key={item.id} className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <TypeIcon className="w-8 h-8 text-orange-400" />
                      <div>
                        <CardTitle className="text-white">{item.equipmentName}</CardTitle>
                        <p className="text-gray-400 text-sm">{item.id}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={`${getStatusColor(item.status)} text-white border-none`}>
                        {item.status}
                      </Badge>
                      <span className={`text-sm font-medium ${getPriorityColor(item.priority)}`}>
                        {item.priority}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Type</p>
                      <p className="text-white">{item.type}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Location</p>
                      <p className="text-white">{item.location}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Assigned To</p>
                      <p className="text-white">{item.assignedTo}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Priority</p>
                      <p className={`font-medium ${getPriorityColor(item.priority)}`}>{item.priority}</p>
                    </div>
                  </div>

                  <div className="bg-gray-700/30 rounded-lg p-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Last Maintenance</p>
                        <p className="text-white">{item.lastMaintenance}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Next Maintenance</p>
                        <p className="text-white">{item.nextMaintenance}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1 text-gray-300 border-gray-600">
                      <Settings className="w-3 h-3 mr-2" />
                      Maintain
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-gray-300 border-gray-600">
                      <Calendar className="w-3 h-3 mr-2" />
                      Schedule
                    </Button>
                    <Button size="sm" className="flex-1 bg-orange-600 hover:bg-orange-700">
                      <User className="w-3 h-3 mr-2" />
                      Assign
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Workshop;
