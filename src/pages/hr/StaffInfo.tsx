
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Search, 
  Plus, 
  User, 
  Phone,
  Mail,
  MapPin,
  Calendar,
  Briefcase,
  Eye,
  Edit
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const StaffInfo = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const staffMembers = [
    {
      id: "STF001",
      employeeId: "EMP001",
      name: "Ahmed Al-Mansouri",
      position: "Senior Engineer",
      department: "Engineering",
      email: "ahmed.mansouri@company.com",
      phone: "+971 50 123 4567",
      nationality: "UAE",
      joinDate: "2020-03-15",
      status: "Active",
      salary: 15000,
      emergencyContact: "Fatima Al-Mansouri",
      emergencyPhone: "+971 50 987 6543"
    },
    {
      id: "STF002",
      employeeId: "EMP002",
      name: "Sarah Johnson",
      position: "HR Manager",
      department: "Human Resources",
      email: "sarah.johnson@company.com",
      phone: "+971 50 234 5678",
      nationality: "UK",
      joinDate: "2019-08-20",
      status: "Active",
      salary: 18000,
      emergencyContact: "John Johnson",
      emergencyPhone: "+971 50 876 5432"
    },
    {
      id: "STF003",
      employeeId: "EMP003",
      name: "Mohammed Hassan",
      position: "Project Manager",
      department: "Operations",
      email: "mohammed.hassan@company.com",
      phone: "+971 50 345 6789",
      nationality: "Egypt",
      joinDate: "2021-01-10",
      status: "Active",
      salary: 16500,
      emergencyContact: "Aisha Hassan",
      emergencyPhone: "+971 50 765 4321"
    }
  ];

  const filteredStaff = staffMembers.filter(staff => 
    staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <h1 className="text-3xl font-bold text-white">Staff Information</h1>
              <p className="text-gray-400">Manage employee personal information</p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800">
            <Plus className="w-4 h-4 mr-2" />
            Add Staff
          </Button>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search staff..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white"
            />
          </div>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredStaff.map((staff) => (
            <Card key={staff.id} className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <User className="w-8 h-8 text-blue-400" />
                    <div>
                      <CardTitle className="text-white">{staff.name}</CardTitle>
                      <p className="text-gray-400 text-sm">{staff.employeeId}</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500 text-white">
                    {staff.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Position</p>
                    <p className="text-white">{staff.position}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Department</p>
                    <p className="text-white">{staff.department}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Join Date</p>
                    <p className="text-white">{staff.joinDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Nationality</p>
                    <p className="text-white">{staff.nationality}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-white">{staff.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="text-white">{staff.phone}</span>
                  </div>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-3">
                  <p className="text-gray-400 text-sm">Emergency Contact</p>
                  <p className="text-white">{staff.emergencyContact}</p>
                  <p className="text-gray-300 text-sm">{staff.emergencyPhone}</p>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 text-gray-300 border-gray-600">
                    <Eye className="w-3 h-3 mr-2" />
                    View
                  </Button>
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Edit className="w-3 h-3 mr-2" />
                    Edit
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

export default StaffInfo;
