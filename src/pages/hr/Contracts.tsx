
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
  DollarSign,
  Clock,
  Download,
  Eye,
  Edit,
  Filter
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contracts = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const contracts = [
    {
      id: "CNT001",
      employeeName: "Ahmed Al-Mansouri",
      employeeId: "EMP001",
      contractType: "Permanent",
      position: "Senior Engineer",
      startDate: "2020-03-15",
      endDate: "2025-03-14",
      salary: 15000,
      currency: "AED",
      status: "Active",
      department: "Engineering",
      location: "Dubai"
    },
    {
      id: "CNT002",
      employeeName: "Sarah Johnson",
      employeeId: "EMP002",
      contractType: "Permanent",
      position: "HR Manager",
      startDate: "2019-08-20",
      endDate: "2024-08-19",
      salary: 18000,
      currency: "AED",
      status: "Active",
      department: "Human Resources",
      location: "Abu Dhabi"
    },
    {
      id: "CNT003",
      employeeName: "Mohammed Hassan",
      employeeId: "EMP003",
      contractType: "Fixed Term",
      position: "Project Manager",
      startDate: "2021-01-10",
      endDate: "2024-01-09",
      salary: 16500,
      currency: "AED",
      status: "Expiring Soon",
      department: "Operations",
      location: "Sharjah"
    },
    {
      id: "CNT004",
      employeeName: "Emily Chen",
      employeeId: "EMP004",
      contractType: "Permanent",
      position: "Financial Analyst",
      startDate: "2022-05-03",
      endDate: "2027-05-02",
      salary: 14000,
      currency: "AED",
      status: "Active",
      department: "Finance",
      location: "Dubai"
    },
    {
      id: "CNT005",
      employeeName: "Omar Al-Zahra",
      employeeId: "EMP005",
      contractType: "Contract",
      position: "IT Specialist",
      startDate: "2020-11-18",
      endDate: "2024-11-17",
      salary: 13500,
      currency: "AED",
      status: "Active",
      department: "Information Technology",
      location: "Dubai"
    },
    {
      id: "CNT006",
      employeeName: "Lisa Rodriguez",
      employeeId: "EMP006",
      contractType: "Permanent",
      position: "Marketing Director",
      startDate: "2018-12-01",
      endDate: "2025-11-30",
      salary: 20000,
      currency: "AED",
      status: "Active",
      department: "Marketing",
      location: "Abu Dhabi"
    }
  ];

  const filteredContracts = contracts.filter(contract => {
    const matchesSearch = contract.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contract.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contract.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || contract.status.toLowerCase().replace(" ", "-") === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500";
      case "Expiring Soon": return "bg-yellow-500";
      case "Expired": return "bg-red-500";
      case "Terminated": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const getContractTypeColor = (type: string) => {
    switch (type) {
      case "Permanent": return "bg-blue-500";
      case "Fixed Term": return "bg-purple-500";
      case "Contract": return "bg-orange-500";
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
              onClick={() => navigate('/hr')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to HR
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Employment Contracts</h1>
              <p className="text-muted-foreground">Manage employee contracts and agreements</p>
            </div>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Contract
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search contracts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 bg-background border border-border rounded-md text-foreground"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="expiring-soon">Expiring Soon</option>
            <option value="expired">Expired</option>
            <option value="terminated">Terminated</option>
          </select>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card/50 border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Contracts</p>
                  <p className="text-2xl font-bold text-foreground">{contracts.length}</p>
                </div>
                <FileText className="w-8 h-8 text-app-blue" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Active</p>
                  <p className="text-2xl font-bold text-app-green">
                    {contracts.filter(contract => contract.status === "Active").length}
                  </p>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Expiring Soon</p>
                  <p className="text-2xl font-bold text-app-orange">
                    {contracts.filter(contract => contract.status === "Expiring Soon").length}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-app-orange" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Avg. Salary</p>
                  <p className="text-2xl font-bold text-foreground">16,167</p>
                  <p className="text-xs text-muted-foreground">AED</p>
                </div>
                <DollarSign className="w-8 h-8 text-app-purple" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contracts Table */}
        <Card className="bg-card/50 border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Contract Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left text-muted-foreground py-3 px-2">Contract ID</th>
                    <th className="text-left text-muted-foreground py-3 px-2">Employee</th>
                    <th className="text-left text-muted-foreground py-3 px-2">Position</th>
                    <th className="text-left text-muted-foreground py-3 px-2">Type</th>
                    <th className="text-left text-muted-foreground py-3 px-2">Start Date</th>
                    <th className="text-left text-muted-foreground py-3 px-2">End Date</th>
                    <th className="text-left text-muted-foreground py-3 px-2">Salary</th>
                    <th className="text-left text-muted-foreground py-3 px-2">Status</th>
                    <th className="text-left text-muted-foreground py-3 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredContracts.map((contract) => (
                    <tr key={contract.id} className="border-b border-border hover:bg-accent/30">
                      <td className="py-4 px-2">
                        <span className="text-app-blue font-mono">{contract.id}</span>
                      </td>
                      <td className="py-4 px-2">
                        <div>
                          <p className="text-foreground font-medium">{contract.employeeName}</p>
                          <p className="text-muted-foreground text-sm">{contract.employeeId}</p>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div>
                          <p className="text-foreground">{contract.position}</p>
                          <p className="text-muted-foreground text-sm">{contract.department}</p>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <Badge className={`${getContractTypeColor(contract.contractType)} text-white border-none`}>
                          {contract.contractType}
                        </Badge>
                      </td>
                      <td className="py-4 px-2 text-muted-foreground">{contract.startDate}</td>
                      <td className="py-4 px-2 text-muted-foreground">{contract.endDate}</td>
                      <td className="py-4 px-2">
                        <span className="text-app-green font-semibold">
                          {contract.salary.toLocaleString()} {contract.currency}
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <Badge className={`${getStatusColor(contract.status)} text-white border-none`}>
                          {contract.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="w-3 h-3" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contracts;
