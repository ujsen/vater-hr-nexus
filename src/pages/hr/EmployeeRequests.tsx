
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Search, 
  UserCheck, 
  Calendar, 
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  User,
  FileText,
  Plane,
  Heart
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const EmployeeRequests = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const requests = [
    {
      id: "REQ001",
      employeeId: "EMP001",
      employeeName: "Ahmed Al-Mansouri",
      type: "Leave Request",
      category: "Annual Leave",
      startDate: "2024-01-15",
      endDate: "2024-01-22",
      days: 7,
      reason: "Family vacation",
      status: "Pending",
      submittedDate: "2024-01-01",
      priority: "Normal",
      department: "Engineering"
    },
    {
      id: "REQ002",
      employeeId: "EMP002",
      employeeName: "Sarah Johnson",
      type: "Salary Advance",
      category: "Financial",
      amount: 5000,
      currency: "AED",
      reason: "Medical emergency",
      status: "Approved",
      submittedDate: "2023-12-28",
      approvedDate: "2023-12-29",
      priority: "High",
      department: "Human Resources"
    },
    {
      id: "REQ003",
      employeeId: "EMP003",
      employeeName: "Mohammed Hassan",
      type: "Document Request",
      category: "Certificate",
      document: "Salary Certificate",
      reason: "Bank loan application",
      status: "Completed",
      submittedDate: "2023-12-20",
      completedDate: "2023-12-22",
      priority: "Normal",
      department: "Operations"
    },
    {
      id: "REQ004",
      employeeId: "EMP004",
      employeeName: "Emily Chen",
      type: "Leave Request",
      category: "Sick Leave",
      startDate: "2024-01-08",
      endDate: "2024-01-10",
      days: 3,
      reason: "Medical treatment",
      status: "Approved",
      submittedDate: "2024-01-05",
      approvedDate: "2024-01-06",
      priority: "High",
      department: "Finance"
    },
    {
      id: "REQ005",
      employeeId: "EMP005",
      employeeName: "Omar Al-Zahra",
      type: "Equipment Request",
      category: "IT Equipment",
      item: "Laptop Upgrade",
      reason: "Current laptop performance issues",
      status: "Under Review",
      submittedDate: "2024-01-03",
      priority: "Normal",
      department: "Information Technology"
    },
    {
      id: "REQ006",
      employeeId: "EMP006",
      employeeName: "Lisa Rodriguez",
      type: "Travel Request",
      category: "Business Travel",
      destination: "London, UK",
      startDate: "2024-02-15",
      endDate: "2024-02-20",
      reason: "Client meeting and conference",
      status: "Pending",
      submittedDate: "2024-01-02",
      priority: "High",
      department: "Marketing"
    }
  ];

  const getFilteredRequests = () => {
    let filtered = requests.filter(request => 
      request.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (activeTab !== "all") {
      filtered = filtered.filter(request => request.status.toLowerCase().replace(" ", "-") === activeTab);
    }

    return filtered;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": return "bg-green-500";
      case "Completed": return "bg-blue-500";
      case "Pending": return "bg-yellow-500";
      case "Under Review": return "bg-orange-500";
      case "Rejected": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "text-red-400";
      case "Medium": return "text-yellow-400";
      case "Normal": return "text-green-400";
      default: return "text-gray-400";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Leave Request": return Calendar;
      case "Salary Advance": return DollarSign;
      case "Document Request": return FileText;
      case "Travel Request": return Plane;
      case "Equipment Request": return UserCheck;
      default: return User;
    }
  };

  const getStatusCounts = () => {
    return {
      all: requests.length,
      pending: requests.filter(r => r.status === "Pending").length,
      approved: requests.filter(r => r.status === "Approved").length,
      completed: requests.filter(r => r.status === "Completed").length,
      "under-review": requests.filter(r => r.status === "Under Review").length,
      rejected: requests.filter(r => r.status === "Rejected").length
    };
  };

  const statusCounts = getStatusCounts();

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
              <h1 className="text-3xl font-bold text-white">Employee Requests</h1>
              <p className="text-gray-400">Manage and track employee requests and approvals</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search requests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-gray-400 text-sm">Total</p>
                <p className="text-2xl font-bold text-white">{statusCounts.all}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-gray-400 text-sm">Pending</p>
                <p className="text-2xl font-bold text-yellow-400">{statusCounts.pending}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-gray-400 text-sm">Approved</p>
                <p className="text-2xl font-bold text-green-400">{statusCounts.approved}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-gray-400 text-sm">Completed</p>
                <p className="text-2xl font-bold text-blue-400">{statusCounts.completed}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-gray-400 text-sm">Under Review</p>
                <p className="text-2xl font-bold text-orange-400">{statusCounts["under-review"]}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for filtering */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="bg-gray-800 border-gray-700">
            <TabsTrigger value="all" className="data-[state=active]:bg-gray-700">All ({statusCounts.all})</TabsTrigger>
            <TabsTrigger value="pending" className="data-[state=active]:bg-gray-700">Pending ({statusCounts.pending})</TabsTrigger>
            <TabsTrigger value="approved" className="data-[state=active]:bg-gray-700">Approved ({statusCounts.approved})</TabsTrigger>
            <TabsTrigger value="completed" className="data-[state=active]:bg-gray-700">Completed ({statusCounts.completed})</TabsTrigger>
            <TabsTrigger value="under-review" className="data-[state=active]:bg-gray-700">Under Review ({statusCounts["under-review"]})</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Requests Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {getFilteredRequests().map((request) => {
            const IconComponent = getTypeIcon(request.type);
            return (
              <Card key={request.id} className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <IconComponent className="w-8 h-8 text-blue-400" />
                      <div>
                        <CardTitle className="text-white">{request.type}</CardTitle>
                        <p className="text-gray-400 text-sm">{request.id}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={`${getStatusColor(request.status)} text-white border-none`}>
                        {request.status}
                      </Badge>
                      <span className={`text-sm font-medium ${getPriorityColor(request.priority)}`}>
                        {request.priority}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Employee</p>
                      <p className="text-white">{request.employeeName}</p>
                      <p className="text-gray-500 text-xs">{request.department}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Category</p>
                      <p className="text-white">{request.category}</p>
                    </div>
                  </div>

                  {/* Request specific details */}
                  {request.type === "Leave Request" && (
                    <div className="bg-gray-700/30 rounded-lg p-3">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="text-gray-400">Start Date</p>
                          <p className="text-white">{request.startDate}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">End Date</p>
                          <p className="text-white">{request.endDate}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-gray-400">Duration</p>
                          <p className="text-white">{request.days} days</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {request.type === "Salary Advance" && (
                    <div className="bg-gray-700/30 rounded-lg p-3">
                      <div className="text-sm">
                        <p className="text-gray-400">Amount</p>
                        <p className="text-green-400 font-semibold text-lg">
                          {request.amount?.toLocaleString()} {request.currency}
                        </p>
                      </div>
                    </div>
                  )}

                  {request.type === "Travel Request" && (
                    <div className="bg-gray-700/30 rounded-lg p-3">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="text-gray-400">Destination</p>
                          <p className="text-white">{request.destination}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Duration</p>
                          <p className="text-white">{request.startDate} - {request.endDate}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {request.type === "Document Request" && (
                    <div className="bg-gray-700/30 rounded-lg p-3">
                      <div className="text-sm">
                        <p className="text-gray-400">Document Type</p>
                        <p className="text-white">{request.document}</p>
                      </div>
                    </div>
                  )}

                  {request.type === "Equipment Request" && (
                    <div className="bg-gray-700/30 rounded-lg p-3">
                      <div className="text-sm">
                        <p className="text-gray-400">Item</p>
                        <p className="text-white">{request.item}</p>
                      </div>
                    </div>
                  )}

                  <div>
                    <p className="text-gray-400 text-sm">Reason</p>
                    <p className="text-white text-sm">{request.reason}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
                    <div>
                      <p>Submitted: {request.submittedDate}</p>
                    </div>
                    <div>
                      {request.approvedDate && <p>Approved: {request.approvedDate}</p>}
                      {request.completedDate && <p>Completed: {request.completedDate}</p>}
                    </div>
                  </div>

                  {request.status === "Pending" && (
                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                        <CheckCircle className="w-3 h-3 mr-2" />
                        Approve
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 text-red-400 border-red-400 hover:bg-red-400/10">
                        <XCircle className="w-3 h-3 mr-2" />
                        Reject
                      </Button>
                    </div>
                  )}

                  {request.status === "Under Review" && (
                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1 text-gray-300 border-gray-600">
                        <AlertCircle className="w-3 h-3 mr-2" />
                        Review Details
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmployeeRequests;
