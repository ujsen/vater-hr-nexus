
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Search, 
  User, 
  Phone, 
  Mail, 
  MapPin,
  Calendar,
  Briefcase,
  FileText,
  Heart,
  GraduationCap,
  Users,
  Edit,
  Plus
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const StaffInfo = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("EMP001");

  const employees = [
    {
      id: "EMP001",
      name: "Ahmed Al-Mansouri",
      position: "Senior Engineer",
      department: "Engineering",
      email: "ahmed.mansouri@company.com",
      phone: "+971 50 123 4567",
      emergencyContact: "+971 50 987 6543",
      location: "Dubai",
      nationality: "UAE",
      dateOfBirth: "1985-06-15",
      joinDate: "2020-03-15",
      maritalStatus: "Married",
      education: "Bachelor's in Engineering",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      address: "Al Barsha, Dubai, UAE",
      visaStatus: "Resident",
      passportNumber: "A12345678",
      licenseNumber: "DL789123",
      bankAccount: "ADCB - 1234567890",
      skills: ["AutoCAD", "Project Management", "Technical Writing"],
      certifications: ["PMP", "AutoCAD Certified"],
      languages: ["Arabic", "English", "French"]
    },
    {
      id: "EMP002",
      name: "Sarah Johnson",
      position: "HR Manager",
      department: "Human Resources",
      email: "sarah.johnson@company.com",
      phone: "+971 50 234 5678",
      emergencyContact: "+971 50 876 5432",
      location: "Abu Dhabi",
      nationality: "USA",
      dateOfBirth: "1988-03-22",
      joinDate: "2019-08-20",
      maritalStatus: "Single",
      education: "Master's in HR Management",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      address: "Khalifa City, Abu Dhabi, UAE",
      visaStatus: "Work Permit",
      passportNumber: "B98765432",
      licenseNumber: "DL456789",
      bankAccount: "ENBD - 9876543210",
      skills: ["HR Management", "Recruitment", "Employee Relations"],
      certifications: ["SHRM-CP", "PHR"],
      languages: ["English", "Arabic", "Spanish"]
    }
  ];

  const currentEmployee = employees.find(emp => emp.id === selectedEmployee) || employees[0];

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
              <p className="text-gray-400">Detailed employee profiles and information</p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800">
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Employee List Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Employees</CardTitle>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                {employees.map((employee) => (
                  <div
                    key={employee.id}
                    onClick={() => setSelectedEmployee(employee.id)}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      selectedEmployee === employee.id 
                        ? 'bg-blue-600/20 border border-blue-500' 
                        : 'bg-gray-700/50 hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <img 
                        src={employee.avatar} 
                        alt={employee.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-white font-medium text-sm">{employee.name}</p>
                        <p className="text-gray-400 text-xs">{employee.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Employee Details */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Profile Header */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-6">
                      <img 
                        src={currentEmployee.avatar} 
                        alt={currentEmployee.name}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      <div>
                        <h2 className="text-2xl font-bold text-white">{currentEmployee.name}</h2>
                        <p className="text-lg text-blue-400">{currentEmployee.position}</p>
                        <p className="text-gray-400">{currentEmployee.department}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <Badge className="bg-green-500 text-white">Active</Badge>
                          <Badge className="bg-blue-500 text-white">{currentEmployee.nationality}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">Employee ID</p>
                      <p className="text-white font-mono text-lg">{currentEmployee.id}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Information */}
              <Tabs defaultValue="personal" className="space-y-6">
                <TabsList className="bg-gray-800 border-gray-700">
                  <TabsTrigger value="personal" className="data-[state=active]:bg-gray-700">Personal Info</TabsTrigger>
                  <TabsTrigger value="contact" className="data-[state=active]:bg-gray-700">Contact Details</TabsTrigger>
                  <TabsTrigger value="employment" className="data-[state=active]:bg-gray-700">Employment</TabsTrigger>
                  <TabsTrigger value="documents" className="data-[state=active]:bg-gray-700">Documents</TabsTrigger>
                  <TabsTrigger value="skills" className="data-[state=active]:bg-gray-700">Skills & Education</TabsTrigger>
                </TabsList>

                <TabsContent value="personal">
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white">Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="text-gray-400 text-sm">Full Name</label>
                          <p className="text-white">{currentEmployee.name}</p>
                        </div>
                        <div>
                          <label className="text-gray-400 text-sm">Date of Birth</label>
                          <p className="text-white">{currentEmployee.dateOfBirth}</p>
                        </div>
                        <div>
                          <label className="text-gray-400 text-sm">Nationality</label>
                          <p className="text-white">{currentEmployee.nationality}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="text-gray-400 text-sm">Marital Status</label>
                          <p className="text-white">{currentEmployee.maritalStatus}</p>
                        </div>
                        <div>
                          <label className="text-gray-400 text-sm">Visa Status</label>
                          <p className="text-white">{currentEmployee.visaStatus}</p>
                        </div>
                        <div>
                          <label className="text-gray-400 text-sm">Address</label>
                          <p className="text-white">{currentEmployee.address}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="contact">
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-blue-400" />
                          <div>
                            <label className="text-gray-400 text-sm">Email</label>
                            <p className="text-white">{currentEmployee.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-green-400" />
                          <div>
                            <label className="text-gray-400 text-sm">Phone</label>
                            <p className="text-white">{currentEmployee.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Heart className="w-5 h-5 text-red-400" />
                          <div>
                            <label className="text-gray-400 text-sm">Emergency Contact</label>
                            <p className="text-white">{currentEmployee.emergencyContact}</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-purple-400" />
                          <div>
                            <label className="text-gray-400 text-sm">Location</label>
                            <p className="text-white">{currentEmployee.location}</p>
                          </div>
                        </div>
                        <div>
                          <label className="text-gray-400 text-sm">Languages</label>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {currentEmployee.languages.map((lang, index) => (
                              <Badge key={index} className="bg-indigo-500 text-white">
                                {lang}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="employment">
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white">Employment Details</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Briefcase className="w-5 h-5 text-blue-400" />
                          <div>
                            <label className="text-gray-400 text-sm">Position</label>
                            <p className="text-white">{currentEmployee.position}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Users className="w-5 h-5 text-green-400" />
                          <div>
                            <label className="text-gray-400 text-sm">Department</label>
                            <p className="text-white">{currentEmployee.department}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-purple-400" />
                          <div>
                            <label className="text-gray-400 text-sm">Join Date</label>
                            <p className="text-white">{currentEmployee.joinDate}</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="text-gray-400 text-sm">Bank Account</label>
                          <p className="text-white">{currentEmployee.bankAccount}</p>
                        </div>
                        <div>
                          <label className="text-gray-400 text-sm">Employee ID</label>
                          <p className="text-white font-mono">{currentEmployee.id}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="documents">
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white">Documents & IDs</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-blue-400" />
                          <div>
                            <label className="text-gray-400 text-sm">Passport Number</label>
                            <p className="text-white font-mono">{currentEmployee.passportNumber}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-green-400" />
                          <div>
                            <label className="text-gray-400 text-sm">License Number</label>
                            <p className="text-white font-mono">{currentEmployee.licenseNumber}</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="text-gray-400 text-sm">Document Status</label>
                          <div className="space-y-2 mt-2">
                            <div className="flex justify-between items-center">
                              <span className="text-white">Passport</span>
                              <Badge className="bg-green-500 text-white">Valid</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-white">Visa</span>
                              <Badge className="bg-green-500 text-white">Valid</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-white">License</span>
                              <Badge className="bg-yellow-500 text-white">Expiring</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="skills">
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white">Skills & Education</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <GraduationCap className="w-5 h-5 text-blue-400" />
                          <label className="text-gray-400">Education</label>
                        </div>
                        <p className="text-white">{currentEmployee.education}</p>
                      </div>
                      
                      <div>
                        <label className="text-gray-400 text-sm">Skills</label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {currentEmployee.skills.map((skill, index) => (
                            <Badge key={index} className="bg-blue-500 text-white">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-gray-400 text-sm">Certifications</label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {currentEmployee.certifications.map((cert, index) => (
                            <Badge key={index} className="bg-purple-500 text-white">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffInfo;
