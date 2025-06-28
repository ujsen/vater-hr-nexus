
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Search, 
  Plus, 
  Users, 
  Clock,
  User,
  Eye,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ManpowerStandby = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const standbyEmployees = [
    {
      id: "SB001",
      employeeId: "EMP101",
      employeeName: "Ahmed Al-Zahra",
      position: "Carpenter",
      department: "Construction",
      availability: "Available",
      lastAssignment: "2024-01-10",
      skills: ["Carpentry", "Wood Work", "Furniture"],
      experience: "5 years",
      contactNumber: "+971 50 123 4567",
      status: "Ready"
    },
    {
      id: "SB002",
      employeeId: "EMP102",
      employeeName: "Mohammed Ali",
      position: "Electrician",
      department: "Electrical",
      availability: "On Assignment",
      lastAssignment: "2024-01-15",
      skills: ["Electrical Wiring", "Panel Installation", "Maintenance"],
      experience: "8 years",
      contactNumber: "+971 50 234 5678",
      status: "Busy"
    },
    {
      id: "SB003",
      employeeId: "EMP103",
      employeeName: "Hassan Omar",
      position: "Plumber",
      department: "Plumbing",
      availability: "Available",
      lastAssignment: "2024-01-05",
      skills: ["Pipe Installation", "Water Systems", "Repairs"],
      experience: "6 years",
      contactNumber: "+971 50 345 6789",
      status: "Ready"
    },
    {
      id: "SB004",
      employeeId: "EMP104",
      employeeName: "Ali Hassan",
      position: "Mason",
      department: "Construction",
      availability: "On Leave",
      lastAssignment: "2023-12-20",
      skills: ["Bricklaying", "Concrete Work", "Plastering"],
      experience: "10 years",
      contactNumber: "+971 50 456 7890",
      status: "Unavailable"
    }
  ];

  const filteredEmployees = standbyEmployees.filter(employee => 
    employee.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready": return "bg-green-500";
      case "Busy": return "bg-yellow-500";
      case "Unavailable": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Available": return "text-green-400";
      case "On Assignment": return "text-yellow-400";
      case "On Leave": return "text-red-400";
      default: return "text-gray-400";
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
              onClick={() => navigate('/hr')}
              className="text-gray-300 border-gray-600 hover:bg-gray-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to HR
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-white">Manpower Standby</h1>
              <p className="text-gray-400">Manage standby workforce and availability</p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-cyan-600 hover:to-cyan-800">
            <Plus className="w-4 h-4 mr-2" />
            Add to Standby
          </Button>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search standby employees..."
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
                  <p className="text-gray-400 text-sm">Total Standby</p>
                  <p className="text-2xl font-bold text-white">{standbyEmployees.length}</p>
                </div>
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Available</p>
                  <p className="text-2xl font-bold text-green-400">
                    {standbyEmployees.filter(e => e.availability === "Available").length}
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
                  <p className="text-gray-400 text-sm">On Assignment</p>
                  <p className="text-2xl font-bold text-yellow-400">
                    {standbyEmployees.filter(e => e.availability === "On Assignment").length}
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
                  <p className="text-gray-400 text-sm">On Leave</p>
                  <p className="text-2xl font-bold text-red-400">
                    {standbyEmployees.filter(e => e.availability === "On Leave").length}
                  </p>
                </div>
                <XCircle className="w-8 h-8 text-red-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Standby Employees Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredEmployees.map((employee) => (
            <Card key={employee.id} className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <User className="w-8 h-8 text-cyan-400" />
                    <div>
                      <CardTitle className="text-white">{employee.employeeName}</CardTitle>
                      <p className="text-gray-400 text-sm">{employee.employeeId}</p>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(employee.status)} text-white border-none`}>
                    {employee.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Position</p>
                    <p className="text-white">{employee.position}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Department</p>
                    <p className="text-white">{employee.department}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Experience</p>
                    <p className="text-white">{employee.experience}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Availability</p>
                    <p className={`font-medium ${getAvailabilityColor(employee.availability)}`}>
                      {employee.availability}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-400 text-sm mb-2">Skills</p>
                  <div className="flex flex-wrap gap-1">
                    {employee.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Last Assignment</p>
                      <p className="text-white">{employee.lastAssignment}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Contact</p>
                      <p className="text-white">{employee.contactNumber}</p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 text-gray-300 border-gray-600">
                    <Eye className="w-3 h-3 mr-2" />
                    View Profile
                  </Button>
                  {employee.availability === "Available" && (
                    <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                      <CheckCircle className="w-3 h-3 mr-2" />
                      Assign
                    </Button>
                  )}
                  {employee.availability === "On Assignment" && (
                    <Button size="sm" className="flex-1 bg-yellow-600 hover:bg-yellow-700">
                      <AlertCircle className="w-3 h-3 mr-2" />
                      Check Status
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManpowerStandby;
