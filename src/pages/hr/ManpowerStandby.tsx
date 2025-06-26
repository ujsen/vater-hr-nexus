
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Search, 
  Clock, 
  Users, 
  Calendar,
  MapPin,
  User,
  Briefcase,
  Phone,
  Mail
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ManpowerStandby = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const standbyEmployees = [
    {
      id: "EMP007",
      name: "Ali Hassan",
      position: "Electrical Technician",
      department: "Engineering",
      availability: "Available",
      lastAssignment: "2024-01-10",
      skills: ["Electrical Work", "Maintenance", "Safety Protocols"],
      location: "Dubai",
      phone: "+971 50 789 0123",
      email: "ali.hassan@company.com",
      experience: "5 years",
      certifications: ["Electrical License", "Safety Certificate"]
    },
    {
      id: "EMP008",
      name: "Fatima Al-Zahra",
      position: "Administrative Assistant",
      department: "Human Resources",
      availability: "On Assignment",
      lastAssignment: "2024-01-20",
      assignedTo: "Project Alpha",
      skills: ["Office Administration", "Customer Service", "Data Entry"],
      location: "Abu Dhabi",
      phone: "+971 50 890 1234",
      email: "fatima.zahra@company.com",
      experience: "3 years",
      certifications: ["Microsoft Office", "Customer Service"]
    },
    {
      id: "EMP009",
      name: "Omar Khalil",
      position: "Heavy Equipment Operator",
      department: "Operations",
      availability: "Available",
      lastAssignment: "2024-01-05",
      skills: ["Crane Operation", "Excavator", "Safety Protocols"],
      location: "Sharjah",
      phone: "+971 50 901 2345",
      email: "omar.khalil@company.com",
      experience: "8 years",
      certifications: ["Heavy Equipment License", "Safety Training"]
    },
    {
      id: "EMP010",
      name: "Maryam Said",
      position: "Quality Inspector",
      department: "Operations",
      availability: "On Leave",
      lastAssignment: "2024-01-15",
      leaveUntil: "2024-01-25",
      skills: ["Quality Control", "Testing", "Documentation"],
      location: "Dubai",
      phone: "+971 50 012 3456",
      email: "maryam.said@company.com",
      experience: "4 years",
      certifications: ["Quality Management", "ISO Standards"]
    }
  ];

  const filteredEmployees = standbyEmployees.filter(employee => 
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Available": return "bg-green-500";
      case "On Assignment": return "bg-blue-500";
      case "On Leave": return "bg-yellow-500";
      case "Unavailable": return "bg-red-500";
      default: return "bg-gray-500";
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
              <p className="text-gray-400">Available staff resources and assignments</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search by name, position, or skills..."
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
                <Users className="w-8 h-8 text-indigo-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Available</p>
                  <p className="text-2xl font-bold text-green-400">
                    {standbyEmployees.filter(emp => emp.availability === "Available").length}
                  </p>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">On Assignment</p>
                  <p className="text-2xl font-bold text-blue-400">
                    {standbyEmployees.filter(emp => emp.availability === "On Assignment").length}
                  </p>
                </div>
                <Briefcase className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">On Leave</p>
                  <p className="text-2xl font-bold text-yellow-400">
                    {standbyEmployees.filter(emp => emp.availability === "On Leave").length}
                  </p>
                </div>
                <Calendar className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Standby Employees Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredEmployees.map((employee) => (
            <Card key={employee.id} className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <User className="w-8 h-8 text-indigo-400" />
                    <div>
                      <CardTitle className="text-white">{employee.name}</CardTitle>
                      <p className="text-gray-400 text-sm">{employee.id}</p>
                    </div>
                  </div>
                  <Badge className={`${getAvailabilityColor(employee.availability)} text-white border-none`}>
                    {employee.availability}
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
                    <p className="text-gray-400">Location</p>
                    <p className="text-white">{employee.location}</p>
                  </div>
                </div>

                {employee.availability === "On Assignment" && employee.assignedTo && (
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                    <p className="text-blue-400 text-sm font-medium">Currently Assigned To:</p>
                    <p className="text-white">{employee.assignedTo}</p>
                  </div>
                )}

                {employee.availability === "On Leave" && employee.leaveUntil && (
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                    <p className="text-yellow-400 text-sm font-medium">On Leave Until:</p>
                    <p className="text-white">{employee.leaveUntil}</p>
                  </div>
                )}

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

                <div>
                  <p className="text-gray-400 text-sm mb-2">Certifications</p>
                  <div className="flex flex-wrap gap-1">
                    {employee.certifications.map((cert, index) => (
                      <Badge key={index} className="text-xs bg-green-600 text-white">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">{employee.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">{employee.email}</span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button size="sm" className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                    Assign to Project
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 text-gray-300 border-gray-600">
                    View Profile
                  </Button>
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
