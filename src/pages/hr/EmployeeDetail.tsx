import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  ArrowLeft, 
  User, 
  FileText, 
  Shield, 
  AlertTriangle, 
  Car, 
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Building,
  Edit,
  Download,
  Eye,
  Plus
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const navigate = useNavigate();
  const { employeeId } = useParams();

  // Mock employee data - in real app, fetch by employeeId
  const employee = {
    id: "EMP001",
    name: "Ahmed Al-Mansouri",
    position: "Senior Engineer",
    department: "Engineering",
    email: "ahmed.mansouri@company.com",
    phone: "+971 50 123 4567",
    location: "Dubai Office",
    joinDate: "2020-03-15",
    status: "Active",
    avatar: "",
    nationality: "UAE",
    employeeId: "EMP001"
  };

  // Mock contracts data
  const contracts = [
    {
      id: "CNT001",
      type: "Permanent",
      startDate: "2020-03-15",
      endDate: "2025-03-14",
      salary: 15000,
      currency: "AED",
      status: "Active"
    }
  ];

  // Mock accidents data
  const accidents = [
    {
      id: "ACC001",
      date: "2024-01-15",
      type: "Minor Injury",
      severity: "Low",
      status: "Resolved",
      description: "Cut on hand while handling materials"
    }
  ];

  // Mock work permits data
  const workPermits = [
    {
      id: "WP001",
      permitNumber: "WP-2024-001",
      type: "General Work Permit",
      issueDate: "2024-01-15",
      expiryDate: "2025-01-14",
      status: "Active"
    }
  ];

  // Mock passport data
  const passportInfo = {
    passportNumber: "A12345678",
    nationality: "UAE",
    issueDate: "2019-01-01",
    expiryDate: "2029-01-01",
    issuePlace: "Dubai"
  };

  // Mock driving license data
  const drivingLicense = {
    licenseNumber: "DL123456789",
    class: "Light Vehicle",
    issueDate: "2020-06-15",
    expiryDate: "2025-06-14",
    status: "Active"
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500";
      case "Inactive": return "bg-yellow-500";
      case "Terminated": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Low": return "bg-green-500";
      case "Medium": return "bg-yellow-500";
      case "High": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-app p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/hr/manpower')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Manpower
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Employee Details</h1>
              <p className="text-muted-foreground">Complete employee information and records</p>
            </div>
          </div>
          <Button>
            <Edit className="w-4 h-4 mr-2" />
            Edit Employee
          </Button>
        </div>

        {/* Employee Header Card */}
        <Card className="bg-card/50 border-border mb-8">
          <CardContent className="p-6">
            <div className="flex items-center space-x-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src={employee.avatar} />
                <AvatarFallback className="text-xl">
                  {employee.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{employee.name}</h2>
                    <p className="text-muted-foreground text-lg">{employee.position}</p>
                  </div>
                  <Badge className={`${getStatusColor(employee.status)} text-white border-none`}>
                    {employee.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Building className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{employee.department}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{employee.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{employee.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{employee.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for different sections */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="contracts">Contracts</TabsTrigger>
            <TabsTrigger value="accidents">Accidents</TabsTrigger>
            <TabsTrigger value="permits">Work Permits</TabsTrigger>
            <TabsTrigger value="passport">Passport</TabsTrigger>
            <TabsTrigger value="license">License</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5" />
                    <span>Basic Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-muted-foreground text-sm">Employee ID</p>
                    <p className="text-foreground">{employee.employeeId}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Join Date</p>
                    <p className="text-foreground">{employee.joinDate}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Nationality</p>
                    <p className="text-foreground">{employee.nationality}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>Active Contract</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {contracts.length > 0 && (
                    <>
                      <div>
                        <p className="text-muted-foreground text-sm">Contract Type</p>
                        <p className="text-foreground">{contracts[0].type}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">Salary</p>
                        <p className="text-foreground">{contracts[0].salary.toLocaleString()} {contracts[0].currency}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">End Date</p>
                        <p className="text-foreground">{contracts[0].endDate}</p>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span>Documents Status</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Passport</span>
                    <Badge className="bg-green-500 text-white border-none">Valid</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Work Permit</span>
                    <Badge className="bg-green-500 text-white border-none">Active</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Driving License</span>
                    <Badge className="bg-green-500 text-white border-none">Valid</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Contracts Tab */}
          <TabsContent value="contracts" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-foreground">Employment Contracts</h3>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                New Contract
              </Button>
            </div>
            
            <div className="space-y-4">
              {contracts.map((contract) => (
                <Card key={contract.id} className="bg-card/50 border-border">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <h4 className="text-lg font-medium text-foreground">{contract.type} Contract</h4>
                          <Badge className={`${getStatusColor(contract.status)} text-white border-none`}>
                            {contract.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">Contract ID: {contract.id}</p>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                          <div>
                            <p className="text-muted-foreground text-sm">Start Date</p>
                            <p className="text-foreground">{contract.startDate}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm">End Date</p>
                            <p className="text-foreground">{contract.endDate}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm">Salary</p>
                            <p className="text-foreground">{contract.salary.toLocaleString()} {contract.currency}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Accidents Tab */}
          <TabsContent value="accidents" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-foreground">Accident Records</h3>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Report Accident
              </Button>
            </div>
            
            <div className="space-y-4">
              {accidents.map((accident) => (
                <Card key={accident.id} className="bg-card/50 border-border">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <AlertTriangle className="w-5 h-5 text-orange-500" />
                          <h4 className="text-lg font-medium text-foreground">{accident.type}</h4>
                          <Badge className={`${getSeverityColor(accident.severity)} text-white border-none`}>
                            {accident.severity}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">Incident ID: {accident.id}</p>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                          <div>
                            <p className="text-muted-foreground text-sm">Date</p>
                            <p className="text-foreground">{accident.date}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm">Status</p>
                            <p className="text-foreground">{accident.status}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm">Description</p>
                            <p className="text-foreground">{accident.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Work Permits Tab */}
          <TabsContent value="permits" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-foreground">Work Permits</h3>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Permit
              </Button>
            </div>
            
            <div className="space-y-4">
              {workPermits.map((permit) => (
                <Card key={permit.id} className="bg-card/50 border-border">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Briefcase className="w-5 h-5 text-teal-500" />
                          <h4 className="text-lg font-medium text-foreground">{permit.type}</h4>
                          <Badge className={`${getStatusColor(permit.status)} text-white border-none`}>
                            {permit.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">Permit Number: {permit.permitNumber}</p>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                          <div>
                            <p className="text-muted-foreground text-sm">Issue Date</p>
                            <p className="text-foreground">{permit.issueDate}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm">Expiry Date</p>
                            <p className="text-foreground">{permit.expiryDate}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm">Status</p>
                            <p className="text-foreground">{permit.status}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Passport Tab */}
          <TabsContent value="passport" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-foreground">Passport Information</h3>
              <Button>
                <Edit className="w-4 h-4 mr-2" />
                Update Passport
              </Button>
            </div>
            
            <Card className="bg-card/50 border-border">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <p className="text-muted-foreground text-sm">Passport Number</p>
                    <p className="text-foreground font-medium">{passportInfo.passportNumber}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Nationality</p>
                    <p className="text-foreground">{passportInfo.nationality}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Issue Date</p>
                    <p className="text-foreground">{passportInfo.issueDate}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Expiry Date</p>
                    <p className="text-foreground">{passportInfo.expiryDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* License Tab */}
          <TabsContent value="license" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-foreground">Driving License</h3>
              <Button>
                <Edit className="w-4 h-4 mr-2" />
                Update License
              </Button>
            </div>
            
            <Card className="bg-card/50 border-border">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Car className="w-8 h-8 text-pink-500 mt-1" />
                  <div className="flex-1">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div>
                        <p className="text-muted-foreground text-sm">License Number</p>
                        <p className="text-foreground font-medium">{drivingLicense.licenseNumber}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">Class</p>
                        <p className="text-foreground">{drivingLicense.class}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">Issue Date</p>
                        <p className="text-foreground">{drivingLicense.issueDate}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">Expiry Date</p>
                        <p className="text-foreground">{drivingLicense.expiryDate}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Badge className={`${getStatusColor(drivingLicense.status)} text-white border-none`}>
                        {drivingLicense.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-foreground">Employee Documents</h3>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Upload Document
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Employment Contract", type: "PDF", size: "2.3 MB", date: "2024-01-15" },
                { name: "Passport Copy", type: "PDF", size: "1.2 MB", date: "2024-01-10" },
                { name: "Work Permit", type: "PDF", size: "1.8 MB", date: "2024-01-08" },
                { name: "Medical Certificate", type: "PDF", size: "0.9 MB", date: "2024-01-05" },
                { name: "Educational Certificates", type: "PDF", size: "3.1 MB", date: "2024-01-03" },
                { name: "Driving License", type: "PDF", size: "0.7 MB", date: "2024-01-01" }
              ].map((doc, index) => (
                <Card key={index} className="bg-card/50 border-border">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <FileText className="w-8 h-8 text-app-blue mt-1" />
                        <div>
                          <h4 className="text-foreground font-medium">{doc.name}</h4>
                          <p className="text-muted-foreground text-sm">{doc.type} • {doc.size}</p>
                          <p className="text-muted-foreground text-xs">Uploaded {doc.date}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="w-3 h-3 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Download className="w-3 h-3 mr-1" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EmployeeDetail;