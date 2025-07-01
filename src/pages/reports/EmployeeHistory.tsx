
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search, History, User, Calendar, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";

const EmployeeHistory = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const employeeHistory = [
    {
      id: "H001",
      employeeName: "Ahmed Al-Mansouri",
      employeeId: "EMP001",
      action: "Login",
      timestamp: "2024-06-25 09:30:00",
      details: "System login from Dubai office",
      ipAddress: "192.168.1.100",
      department: "Engineering"
    },
    {
      id: "H002",
      employeeName: "Sara Al-Zahra",
      employeeId: "EMP005",
      action: "Leave Request",
      timestamp: "2024-06-25 10:15:00",
      details: "Annual leave request submitted",
      ipAddress: "192.168.1.105",
      department: "Sales"
    },
    {
      id: "H003",
      employeeName: "Mohammed Hassan",
      employeeId: "EMP003",
      action: "Document Upload",
      timestamp: "2024-06-25 11:20:00",
      details: "Uploaded training certificate",
      ipAddress: "192.168.1.103",
      department: "HR"
    },
    {
      id: "H004",
      employeeName: "Fatima Ali",
      employeeId: "EMP007",
      action: "Profile Update",
      timestamp: "2024-06-25 14:45:00",
      details: "Updated contact information",
      ipAddress: "192.168.1.107",
      department: "Finance"
    },
    {
      id: "H005",
      employeeName: "Omar Al-Rashid",
      employeeId: "EMP002",
      action: "Task Completion",
      timestamp: "2024-06-25 16:30:00",
      details: "Completed project milestone",
      ipAddress: "192.168.1.102",
      department: "Engineering"
    }
  ];

  const filteredHistory = employeeHistory.filter(record => 
    record.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getActionColor = (action: string) => {
    switch (action) {
      case "Login": return "bg-green-500";
      case "Leave Request": return "bg-yellow-500";
      case "Document Upload": return "bg-blue-500";
      case "Profile Update": return "bg-purple-500";
      case "Task Completion": return "bg-emerald-500";
      default: return "bg-gray-500";
    }
  };

  const todayActions = employeeHistory.filter(record => 
    record.timestamp.startsWith("2024-06-25")
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Header />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/reports')}
                className="text-gray-300 border-gray-600 hover:bg-gray-700"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Reports
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-white">Employee History Report</h1>
                <p className="text-gray-400">Track employee activities and system interactions</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Records</p>
                    <p className="text-2xl font-bold text-white">{employeeHistory.length}</p>
                  </div>
                  <History className="w-8 h-8 text-blue-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Today's Activities</p>
                    <p className="text-2xl font-bold text-green-400">{todayActions}</p>
                  </div>
                  <Calendar className="w-8 h-8 text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Active Users</p>
                    <p className="text-2xl font-bold text-purple-400">47</p>
                  </div>
                  <User className="w-8 h-8 text-purple-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">System Logins</p>
                    <p className="text-2xl font-bold text-cyan-400">23</p>
                  </div>
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Employee Activity Log</CardTitle>
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search activities..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700">
                    <TableHead className="text-gray-300">Record ID</TableHead>
                    <TableHead className="text-gray-300">Employee</TableHead>
                    <TableHead className="text-gray-300">Department</TableHead>
                    <TableHead className="text-gray-300">Action</TableHead>
                    <TableHead className="text-gray-300">Timestamp</TableHead>
                    <TableHead className="text-gray-300">Details</TableHead>
                    <TableHead className="text-gray-300">IP Address</TableHead>
                    <TableHead className="text-gray-300">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredHistory.map((record) => (
                    <TableRow key={record.id} className="border-gray-700 hover:bg-gray-700/30">
                      <TableCell className="text-blue-400 font-medium">{record.id}</TableCell>
                      <TableCell>
                        <div>
                          <p className="text-white font-medium">{record.employeeName}</p>
                          <p className="text-gray-400 text-sm">{record.employeeId}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-300">{record.department}</TableCell>
                      <TableCell>
                        <Badge className={`${getActionColor(record.action)} text-white border-none`}>
                          {record.action}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-300">{record.timestamp}</TableCell>
                      <TableCell className="text-gray-300">{record.details}</TableCell>
                      <TableCell className="text-gray-300 font-mono text-sm">{record.ipAddress}</TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline" className="text-gray-300 border-gray-600">
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmployeeHistory;
