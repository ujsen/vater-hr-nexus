
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Search, 
  Plus, 
  Shield, 
  Calendar, 
  User,
  Eye,
  Download,
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const WorkPermit = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const workPermits = [
    {
      id: "WP001",
      employeeId: "EMP001",
      employeeName: "Ahmed Al-Mansouri",
      permitNumber: "WP-2024-001",
      permitType: "General Work Permit",
      issueDate: "2024-01-15",
      expiryDate: "2025-01-14",
      status: "Active",
      sponsor: "Al Rashid Construction LLC",
      profession: "Senior Engineer",
      nationality: "UAE"
    },
    {
      id: "WP002",
      employeeId: "EMP002",
      employeeName: "Sarah Johnson",
      permitNumber: "WP-2023-045",
      permitType: "Professional Work Permit",
      issueDate: "2023-08-20",
      expiryDate: "2024-08-19",
      status: "Expiring Soon",
      sponsor: "Al Rashid Construction LLC",
      profession: "HR Manager",
      nationality: "United Kingdom"
    },
    {
      id: "WP003",
      employeeId: "EMP003",
      employeeName: "Mohammed Hassan",
      permitNumber: "WP-2024-023",
      permitType: "Temporary Work Permit",
      issueDate: "2024-01-10",
      expiryDate: "2024-07-09",
      status: "Under Review",
      sponsor: "Al Rashid Construction LLC",
      profession: "Project Manager",
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
      case "Under Review": return "bg-orange-500";
      case "Suspended": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active": return CheckCircle;
      case "Expiring Soon": return AlertTriangle;
      case "Expired": return AlertTriangle;
      case "Under Review": return Clock;
      case "Suspended": return AlertTriangle;
      default: return Clock;
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
              <h1 className="text-3xl font-bold text-white">Work Permits</h1>
              <p className="text-gray-400">Manage employee work permits and documentation</p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800">
            <Plus className="w-4 h-4 mr-2" />
            Add Permit
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
                <Shield className="w-8 h-8 text-teal-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Active</p>
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
                  <p className="text-gray-400 text-sm">Under Review</p>
                  <p className="text-2xl font-bold text-orange-400">
                    {workPermits.filter(p => p.status === "Under Review").length}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Work Permits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPermits.map((permit) => {
            const StatusIcon = getStatusIcon(permit.status);
            return (
              <Card key={permit.id} className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <StatusIcon className="w-8 h-8 text-teal-400" />
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
                      <p className="text-white">{permit.permitType}</p>
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
                    </div>
                  </div>

                  <div className="bg-gray-700/30 rounded-lg p-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Sponsor</p>
                        <p className="text-white">{permit.sponsor}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Nationality</p>
                        <p className="text-white">{permit.nationality}</p>
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
                    <Button size="sm" className="flex-1 bg-teal-600 hover:bg-teal-700">
                      Edit
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

export default WorkPermit;
