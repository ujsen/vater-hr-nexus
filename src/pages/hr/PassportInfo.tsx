
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Search, 
  Shield, 
  Calendar, 
  MapPin,
  User,
  AlertTriangle,
  CheckCircle,
  Clock,
  Plus,
  Eye,
  Download
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const PassportInfo = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const passportData = [
    {
      employeeId: "EMP001",
      employeeName: "Ahmed Al-Mansouri",
      passportNumber: "A12345678",
      nationality: "UAE",
      issueDate: "2020-01-15",
      expiryDate: "2030-01-14",
      issuingCountry: "United Arab Emirates",
      placeOfBirth: "Dubai",
      status: "Valid",
      visaInfo: {
        type: "Resident Visa",
        number: "R987654321",
        issueDate: "2020-03-01",
        expiryDate: "2025-02-28",
        status: "Valid"
      }
    },
    {
      employeeId: "EMP002",
      employeeName: "Sarah Johnson",
      passportNumber: "B98765432",
      nationality: "USA",
      issueDate: "2019-06-10",
      expiryDate: "2029-06-09",
      issuingCountry: "United States",
      placeOfBirth: "New York",
      status: "Valid",
      visaInfo: {
        type: "Work Visa",
        number: "W123456789",
        issueDate: "2019-08-01",
        expiryDate: "2024-07-31",
        status: "Expiring Soon"
      }
    },
    {
      employeeId: "EMP003",
      employeeName: "Mohammed Hassan",
      passportNumber: "C11223344",
      nationality: "Egypt",
      issueDate: "2018-03-20",
      expiryDate: "2028-03-19",
      issuingCountry: "Egypt",
      placeOfBirth: "Cairo",
      status: "Valid",
      visaInfo: {
        type: "Work Visa",
        number: "W987654321",
        issueDate: "2021-01-01",
        expiryDate: "2026-12-31",
        status: "Valid"
      }
    }
  ];

  const filteredData = passportData.filter(data => 
    data.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    data.passportNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    data.nationality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Valid": return "bg-green-500";
      case "Expiring Soon": return "bg-yellow-500";
      case "Expired": return "bg-red-500";
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
              <h1 className="text-3xl font-bold text-white">Passport Information</h1>
              <p className="text-gray-400">Manage employee passport and visa documents</p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800">
            <Plus className="w-4 h-4 mr-2" />
            Add Passport
          </Button>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search by name or passport number..."
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
                  <p className="text-2xl font-bold text-white">{passportData.length}</p>
                </div>
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Valid Passports</p>
                  <p className="text-2xl font-bold text-green-400">
                    {passportData.filter(p => p.status === "Valid").length}
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
                  <p className="text-gray-400 text-sm">Visas Expiring</p>
                  <p className="text-2xl font-bold text-yellow-400">
                    {passportData.filter(p => p.visaInfo.status === "Expiring Soon").length}
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
                  <p className="text-gray-400 text-sm">Nationalities</p>
                  <p className="text-2xl font-bold text-purple-400">
                    {new Set(passportData.map(p => p.nationality)).size}
                  </p>
                </div>
                <MapPin className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Passport Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredData.map((data) => (
            <Card key={data.employeeId} className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <User className="w-8 h-8 text-blue-400" />
                    <div>
                      <CardTitle className="text-white">{data.employeeName}</CardTitle>
                      <p className="text-gray-400 text-sm">{data.employeeId}</p>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(data.status)} text-white border-none`}>
                    {data.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Passport Information */}
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-blue-400" />
                    Passport Details
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Passport Number</p>
                      <p className="text-white font-mono">{data.passportNumber}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Nationality</p>
                      <p className="text-white">{data.nationality}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Issue Date</p>
                      <p className="text-white">{data.issueDate}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Expiry Date</p>
                      <p className="text-white">{data.expiryDate}</p>
                      <p className="text-xs text-gray-500">
                        {getDaysUntilExpiry(data.expiryDate)} days remaining
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400">Issuing Country</p>
                      <p className="text-white">{data.issuingCountry}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Place of Birth</p>
                      <p className="text-white">{data.placeOfBirth}</p>
                    </div>
                  </div>
                </div>

                {/* Visa Information */}
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-green-400" />
                    Visa Information
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Visa Type</p>
                      <p className="text-white">{data.visaInfo.type}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Visa Number</p>
                      <p className="text-white font-mono">{data.visaInfo.number}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Issue Date</p>
                      <p className="text-white">{data.visaInfo.issueDate}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Expiry Date</p>
                      <p className="text-white">{data.visaInfo.expiryDate}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className={`${getStatusColor(data.visaInfo.status)} text-white border-none text-xs`}>
                          {data.visaInfo.status}
                        </Badge>
                        {data.visaInfo.status === "Expiring Soon" && (
                          <AlertTriangle className="w-4 h-4 text-yellow-400" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1 text-gray-300 border-gray-600">
                    <Eye className="w-3 h-3 mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 text-gray-300 border-gray-600">
                    <Download className="w-3 h-3 mr-2" />
                    Download
                  </Button>
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
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
