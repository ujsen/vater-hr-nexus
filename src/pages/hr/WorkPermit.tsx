
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Search, 
  Plus, 
  Briefcase, 
  Calendar, 
  MapPin,
  User,
  Clock,
  FileText,
  Eye,
  Download,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const WorkPermit = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const workPermits = [
    {
      id: "WP001",
      employeeName: "Ahmed Al-Mansouri",
      employeeId: "EMP001",
      permitNumber: "WP2024001",
      type: "General Work Permit",
      issueDate: "2020-03-15",
      expiryDate: "2025-03-14",
      status: "Active",
      issuingAuthority: "UAE Ministry of Labour",
      profession: "Senior Engineer",
      employer: "Construction Company LLC",
      location: "Dubai",
      nationality: "UAE"
    },
    {
      id: "WP002",
      employeeName: "Sarah Johnson",
      employeeId: "EMP002",
      permitNumber: "WP2024002",
      type: "Professional Work Permit",
      issueDate: "2019-08-20",
      expiryDate: "2024-08-19",
      status: "Expiring Soon",
      issuingAuthority: "UAE Ministry of Labour",
      profession: "HR Manager",
      employer: "Construction Company LLC",
      location: "Abu Dhabi",
      nationality: "USA"
    },
    {
      id: "WP003",
      employeeName: "Mohammed Hassan",
      employeeId: "EMP003",
      permitNumber: "WP2024003",
      type: "Skilled Work Permit",
      issueDate: "2021-01-10",
      expiryDate: "2026-01-09",
      status: "Active",
      issuingAuthority: "UAE Ministry of Labour",
      profession: "Project Manager",
      employer: "Construction Company LLC",
      location: "Sharjah",
      nationality: "Egypt"
    }
  ];

  const filteredPermits = workPermits.filter(permit => 
    permit.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    permit.permitNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    permit.profession.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500";
      case "Expiring Soon": return "bg-yellow-500";
      case "Expired": return "bg-red-500";
      case "Pending": return "bg-blue-500";
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
              <h1 className="text-3xl font-bold text-white">Work Permit Information</h1>
              <p className="text-gray-400">Manage employee work authorization documents</p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800">
            <Plus className="w-4 h-4 mr-2" />
            Add Work Permit
          </Button>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search work permits..."
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
                  <p className="text-gray-400 text-sm">Total Permits</p>
                  <p className="text-2xl font-bold text-white">{workPermits.length}</p>
                </div>
                <Briefcase className="w-8 h-8 text-teal-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Active Permits</p>
                  <p className="text-2xl font-bold text-green-400">
                    {workPermits.filter(p => p.status === "Active").length}
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
                    {workPermits.filter(p => p.status === "Expiring Soon").length}
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
                  <p className="text-gray-400 text-sm">Locations</p>
                  <p className="text-2xl font-bold text-purple-400">
                    {new Set(workPermits.map(p => p.location)).size}
                  </p>
                </div>
                <MapPin className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Work Permits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPermits.map((permit) => (
            <Card key={permit.id} className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-8 h-8 text-teal-400" />
                    <div>
                      <CardTitle className="text-white">{permit.employeeName}</CardTitle>
                      <p className="text-gray-400 text-sm">{permit.permitNumber}</p>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(permit.status)} text-white border-none`}>
                    {permit.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Permit Type</p>
                    <p className="text-white">{permit.type}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Profession</p>
                    <p className="text-white">{permit.profession}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Issue Date</p>
                    <p className="text-white">{permit.issueDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Expiry Date</p>
                    <p className="text-white">{permit.expiryDate}</p>
                    <p className="text-xs text-gray-500">
                      {getDaysUntilExpiry(permit.expiryDate)} days remaining
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-white">{permit.location}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Nationality</p>
                    <p className="text-white">{permit.nationality}</p>
                  </div>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-3">
                  <div className="text-sm">
                    <p className="text-gray-400">Issuing Authority</p>
                    <p className="text-white">{permit.issuingAuthority}</p>
                  </div>
                  <div className="text-sm mt-2">
                    <p className="text-gray-400">Employer</p>
                    <p className="text-white">{permit.employer}</p>
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
                  <Button size="sm" className="flex-1 bg-teal-600 hover:bg-teal-700">
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

export default WorkPermit;
