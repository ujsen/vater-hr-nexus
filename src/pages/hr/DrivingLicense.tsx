
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Search, 
  Plus, 
  Car, 
  Calendar, 
  User,
  Eye,
  Download,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const DrivingLicense = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const licenses = [
    {
      id: "DL001",
      employeeName: "Ahmed Al-Mansouri",
      employeeId: "EMP001",
      licenseNumber: "DL123456789",
      category: "Light Vehicle",
      issueDate: "2020-03-15",
      expiryDate: "2025-03-14",
      status: "Active",
      issuingAuthority: "RTA Dubai",
      nationality: "UAE",
      restrictions: "None"
    },
    {
      id: "DL002",
      employeeName: "Omar Al-Zahra",
      employeeId: "EMP005",
      licenseNumber: "DL987654321",
      category: "Heavy Vehicle",
      issueDate: "2019-06-10",
      expiryDate: "2024-06-09",
      status: "Expiring Soon",
      issuingAuthority: "RTA Dubai",
      nationality: "UAE",
      restrictions: "None"
    },
    {
      id: "DL003",
      employeeName: "Mohammed Hassan",
      employeeId: "EMP003",
      licenseNumber: "DL456789123",
      category: "Motorcycle",
      issueDate: "2021-01-20",
      expiryDate: "2026-01-19",
      status: "Active",
      issuingAuthority: "RTA Dubai",
      nationality: "Egypt",
      restrictions: "Glasses Required"
    }
  ];

  const filteredLicenses = licenses.filter(license => 
    license.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    license.licenseNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    license.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500";
      case "Expiring Soon": return "bg-yellow-500";
      case "Expired": return "bg-red-500";
      case "Suspended": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  const getDaysUntilExpiry = (expiryDate: string) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
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
              <h1 className="text-3xl font-bold text-white">Driving License Records</h1>
              <p className="text-gray-400">Manage employee driving licenses</p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800">
            <Plus className="w-4 h-4 mr-2" />
            Add License
          </Button>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search licenses..."
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
                  <p className="text-gray-400 text-sm">Total Licenses</p>
                  <p className="text-2xl font-bold text-white">{licenses.length}</p>
                </div>
                <Car className="w-8 h-8 text-pink-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Active</p>
                  <p className="text-2xl font-bold text-green-400">
                    {licenses.filter(l => l.status === "Active").length}
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
                  <p className="text-gray-400 text-sm">Expiring Soon</p>
                  <p className="text-2xl font-bold text-yellow-400">
                    {licenses.filter(l => l.status === "Expiring Soon").length}
                  </p>
                </div>
                <AlertTriangle className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Categories</p>
                  <p className="text-2xl font-bold text-purple-400">
                    {new Set(licenses.map(l => l.category)).size}
                  </p>
                </div>
                <Car className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Licenses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredLicenses.map((license) => (
            <Card key={license.id} className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Car className="w-8 h-8 text-pink-400" />
                    <div>
                      <CardTitle className="text-white">{license.employeeName}</CardTitle>
                      <p className="text-gray-400 text-sm">{license.licenseNumber}</p>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(license.status)} text-white border-none`}>
                    {license.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Category</p>
                    <p className="text-white">{license.category}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Nationality</p>
                    <p className="text-white">{license.nationality}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Issue Date</p>
                    <p className="text-white">{license.issueDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Expiry Date</p>
                    <p className="text-white">{license.expiryDate}</p>
                    <p className="text-xs text-gray-500">
                      {getDaysUntilExpiry(license.expiryDate)} days remaining
                    </p>
                  </div>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Issuing Authority</p>
                      <p className="text-white">{license.issuingAuthority}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Restrictions</p>
                      <p className="text-white">{license.restrictions}</p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 text-gray-300 border-gray-600">
                    <Eye className="w-3 h-3 mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 text-gray-300 border-gray-600">
                    <Download className="w-3 h-3 mr-2" />
                    Download
                  </Button>
                  <Button size="sm" className="flex-1 bg-pink-600 hover:bg-pink-700">
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

export default DrivingLicense;
