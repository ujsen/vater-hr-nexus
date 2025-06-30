
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
import { useEquipment } from "@/hooks/useEquipment";

const Workshop = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [newEquipment, setNewEquipment] = useState({
    name: "",
    model: "",
    serial_number: "",
    status: "available",
    location: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const { equipment, loading, addEquipment, updateEquipment } = useEquipment();

  const filteredItems = equipment.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.model?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddEquipment = async () => {
    try {
      await addEquipment(newEquipment);
      setNewEquipment({
        name: "",
        model: "",
        serial_number: "",
        status: "available",
        location: "",
      });
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Error adding equipment:", error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available": return "bg-green-500";
      case "in_use": return "bg-blue-500";
      case "maintenance": return "bg-yellow-500";
      case "out_of_order": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getTypeIcon = (name: string) => {
    if (name.toLowerCase().includes("hydraulic")) return Settings;
    if (name.toLowerCase().includes("welding")) return Zap;
    if (name.toLowerCase().includes("drill") || name.toLowerCase().includes("press")) return Wrench;
    if (name.toLowerCase().includes("compressor")) return Cog;
    return Wrench;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-white">Loading equipment...</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
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
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800">
                <Plus className="w-4 h-4 mr-2" />
                Add Equipment
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-800 border-gray-700">
              <DialogHeader>
                <DialogTitle className="text-white">Add New Equipment</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-gray-300">Equipment Name</Label>
                  <Input
                    id="name"
                    value={newEquipment.name}
                    onChange={(e) => setNewEquipment({...newEquipment, name: e.target.value})}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="model" className="text-gray-300">Model</Label>
                  <Input
                    id="model"
                    value={newEquipment.model}
                    onChange={(e) => setNewEquipment({...newEquipment, model: e.target.value})}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="serial" className="text-gray-300">Serial Number</Label>
                  <Input
                    id="serial"
                    value={newEquipment.serial_number}
                    onChange={(e) => setNewEquipment({...newEquipment, serial_number: e.target.value})}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="location" className="text-gray-300">Location</Label>
                  <Input
                    id="location"
                    value={newEquipment.location}
                    onChange={(e) => setNewEquipment({...newEquipment, location: e.target.value})}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="status" className="text-gray-300">Status</Label>
                  <Select value={newEquipment.status} onValueChange={(value) => setNewEquipment({...newEquipment, status: value})}>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="available">Available</SelectItem>
                      <SelectItem value="in_use">In Use</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="out_of_order">Out of Order</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={handleAddEquipment} className="w-full bg-orange-600 hover:bg-orange-700">
                  Add Equipment
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Equipment</p>
                  <p className="text-2xl font-bold text-white">{equipment.length}</p>
                </div>
                <Wrench className="w-8 h-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Available</p>
                  <p className="text-2xl font-bold text-green-400">
                    {equipment.filter(item => item.status === "available").length}
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
                  <p className="text-gray-400 text-sm">In Use</p>
                  <p className="text-2xl font-bold text-blue-400">
                    {equipment.filter(item => item.status === "in_use").length}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Maintenance</p>
                  <p className="text-2xl font-bold text-yellow-400">
                    {equipment.filter(item => item.status === "maintenance").length}
                  </p>
                </div>
                <AlertTriangle className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredItems.map((item) => {
            const TypeIcon = getTypeIcon(item.name);
            return (
              <Card key={item.id} className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <TypeIcon className="w-8 h-8 text-orange-400" />
                      <div>
                        <CardTitle className="text-white">{item.name}</CardTitle>
                        <p className="text-gray-400 text-sm">{item.model || "No model"}</p>
                      </div>
                    </div>
                    <Badge className={`${getStatusColor(item.status)} text-white border-none`}>
                      {item.status.replace('_', ' ').toUpperCase()}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Serial Number</p>
                      <p className="text-white">{item.serial_number || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Location</p>
                      <p className="text-white">{item.location || "N/A"}</p>
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
