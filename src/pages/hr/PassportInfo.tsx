
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Search, 
  Plus, 
  FileText, 
  Calendar, 
  User,
  Eye,
  Download,
  AlertTriangle,
  CheckCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const PassportInfo = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const passports = [
    {
      id: "PP001",
      employeeId: "EMP001",
      employeeName: "Ahmed Al-Mansouri",
      passportNumber: "N1234567",
      nationality: "UAE",
      issueDate: "2020-05-15",
      expiryDate: "2030-05-14",
      placeOfIssue: "Dubai",
      status: "Active",
      daysUntilExpiry: 2190
    },
    {
      id: "PP002",
      employeeId: "EMP002",
      employeeName: "Sarah Johnson",
      passportNumber: "UK987654321",
      nationality: "United Kingdom",
      issueDate: "2019-03-10",
      expiryDate: "2024-03-09",
      placeOfIssue: "London",
      status: "Expiring Soon",
      daysUntilExpiry: 45
    },
    {
      id: "PP003",
      employeeId: "EMP003",
      employeeName: "Mohammed Hassan",
      passportNumber: "EG456789123",
      nationality: "Egypt",
      issueDate: "2021-08-20",
      expiryDate: "2026-08-19",
      placeOfIssue: "Cairo",
      status: "Active",
      daysUntilExpiry: 950
    }
  ];

  const filteredPassports = passports.filter(passport => 
    passport.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    passport.passportNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    passport.nationality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500";
      case "Expiring Soon": return "bg-yellow-500";
      case "Expired": return "bg-red-500";
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
              <h1 className="text-3xl font-bold text-white">Passport Information</h1>
              <p className="text-gray-400">Manage employee passport details</p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800">
            <Plus className="w-4 h-4 mr-2" />
            Add Passport
          </Button>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search passports..."
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
                  <p className="text-gray-400 text-sm">Total Passports</p>
                  <p className="text-2xl font-bold text-white">{passports.length}</p>
                </div>
                <FileText className="w-8 h-8 text-indigo-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Active</p>
                  <p className="text-2xl font-bold text-green-400">
                    {passports.filter(p => p.status === "Active").length}
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
                    {passports.filter(p => p.status === "Expiring Soon").length}
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
                  <p className="text-gray-400 text-sm">Nationalities</p>
                  <p className="text-2xl font-bold text-purple-400">
                    {new Set(passports.map(p => p.nationality)).size}
                  </p>
                </div>
                <User className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Passports Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPassports.map((passport) => (
            <Card key={passport.id} className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-8 h-8 text-indigo-400" />
                    <div>
                      <CardTitle className="text-white">{passport.employeeName}</CardTitle>
                      <p className="text-gray-400 text-sm">{passport.passportNumber}</p>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(passport.status)} text-white border-none`}>
                    {passport.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Nationality</p>
                    <p className="text-white">{passport.nationality}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Place of Issue</p>
                    <p className="text-white">{passport.placeOfIssue}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Issue Date</p>
                    <p className="text-white">{passport.issueDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Expiry Date</p>
                    <p className="text-white">{passport.expiryDate}</p>
                  </div>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-3">
                  <p className="text-gray-400 text-sm">Days Until Expiry</p>
                  <p className={`text-lg font-semibold ${passport.daysUntilExpiry < 90 ? 'text-red-400' : passport.daysUntilExpiry < 365 ? 'text-yellow-400' : 'text-green-400'}`}>
                    {passport.daysUntilExpiry} days
                  </p>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 text-gray-300 border-gray-600">
                    <Eye className="w-3 h-3 mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 text-gray-300 border-gray-600">
                    <Download className="w-3 h-3 mr-2" />
                    Copy
                  </Button>
                  <Button size="sm" className="flex-1 bg-indigo-600 hover:bg-indigo-700">
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

export default PassportInfo;
