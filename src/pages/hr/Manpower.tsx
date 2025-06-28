import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  ArrowLeft, 
  Search, 
  Plus, 
  Users, 
  Filter,
  Briefcase,
  Edit,
  Trash2
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { EmployeeForm } from "@/components/hr/EmployeeForm";
import { useToast } from "@/hooks/use-toast";

const Manpower = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showEmployeeForm, setShowEmployeeForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const [employees, setEmployees] = useState([
    {
      id: "EMP001",
      name: "Ahmed Al-Mansouri",
      position: "Senior Engineer",
      department: "Engineering",
      email: "ahmed.mansouri@company.com",
      phone: "+971 50 123 4567",
      location: "Dubai",
      status: "Active",
      joinDate: "2020-03-15",
      salary: "15000",
      contractType: "Permanent",
      nationality: "UAE",
      passportNo: "A1234567",
      visaStatus: "Valid",
      workPermit: "Valid",
      emergencyContact: "+971 50 999 8888",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: "EMP002",
      name: "Sarah Johnson",
      position: "HR Manager",
      department: "Human Resources",
      email: "sarah.johnson@company.com",
      phone: "+971 50 234 5678",
      location: "Abu Dhabi",
      status: "Active",
      joinDate: "2019-08-20",
      salary: "12000",
      contractType: "Permanent",
      nationality: "USA",
      passportNo: "B2345678",
      visaStatus: "Valid",
      workPermit: "Valid",
      emergencyContact: "+971 50 888 7777",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: "EMP003",
      name: "Mohammed Hassan",
      position: "Project Manager",
      department: "Operations",
      email: "mohammed.hassan@company.com",
      phone: "+971 50 345 6789",
      location: "Sharjah",
      status: "On Leave",
      joinDate: "2021-01-10",
      salary: "13000",
      contractType: "Permanent",
      nationality: "Jordan",
      passportNo: "C3456789",
      visaStatus: "Valid",
      workPermit: "Valid",
      emergencyContact: "+971 50 777 6666",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: "EMP004",
      name: "Emily Chen",
      position: "Financial Analyst",
      department: "Finance",
      email: "emily.chen@company.com",
      phone: "+971 50 456 7890",
      location: "Dubai",
      status: "Active",
      joinDate: "2022-05-03",
      salary: "11000",
      contractType: "Contract",
      nationality: "China",
      passportNo: "D4567890",
      visaStatus: "Valid",
      workPermit: "Valid",
      emergencyContact: "+971 50 666 5555",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: "EMP005",
      name: "Omar Al-Zahra",
      position: "IT Specialist",
      department: "Information Technology",
      email: "omar.zahra@company.com",
      phone: "+971 50 567 8901",
      location: "Dubai",
      status: "Active",
      joinDate: "2020-11-18",
      salary: "10000",
      contractType: "Permanent",
      nationality: "Lebanon",
      passportNo: "E5678901",
      visaStatus: "Valid",
      workPermit: "Valid",
      emergencyContact: "+971 50 555 4444",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: "EMP006",
      name: "Lisa Rodriguez",
      position: "Marketing Director",
      department: "Marketing",
      email: "lisa.rodriguez@company.com",
      phone: "+971 50 678 9012",
      location: "Abu Dhabi",
      status: "Active",
      joinDate: "2018-12-01",
      salary: "14000",
      contractType: "Permanent",
      nationality: "Spain",
      passportNo: "F6789012",
      visaStatus: "Valid",
      workPermit: "Valid",
      emergencyContact: "+971 50 444 3333",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
    }
  ]);

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || employee.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const handleAddEmployee = () => {
    setEditingEmployee(null);
    setShowEmployeeForm(true);
  };

  const handleEditEmployee = (employee: any) => {
    setEditingEmployee(employee);
    setShowEmployeeForm(true);
  };

  const handleDeleteEmployee = (employeeId: string) => {
    setEmployees(prev => prev.filter(emp => emp.id !== employeeId));
    toast({
      title: "Employee Deleted",
      description: "Employee has been successfully removed.",
    });
  };

  const handleSaveEmployee = (employeeData: any) => {
    if (editingEmployee) {
      setEmployees(prev => prev.map(emp => 
        emp.id === employeeData.id ? employeeData : emp
      ));
      toast({
        title: "Employee Updated",
        description: "Employee information has been successfully updated.",
      });
    } else {
      setEmployees(prev => [...prev, employeeData]);
      toast({
        title: "Employee Added",
        description: "New employee has been successfully added.",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "text-green-400";
      case "On Leave": return "text-yellow-400";
      case "Inactive": return "text-red-400";
      default: return "text-gray-400";
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
              <h1 className="text-3xl font-bold text-white">Manpower Record</h1>
              <p className="text-gray-400">Complete employee database</p>
            </div>
          </div>
          <Button 
            onClick={handleAddEmployee}
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Employee
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="on leave">On Leave</option>
            <option value="inactive">Inactive</option>
          </select>
          <Button variant="outline" className="text-gray-300 border-gray-600">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Employees</p>
                  <p className="text-2xl font-bold text-white">{employees.length}</p>
                </div>
                <Users className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Active</p>
                  <p className="text-2xl font-bold text-green-400">
                    {employees.filter(emp => emp.status === "Active").length}
                  </p>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">On Leave</p>
                  <p className="text-2xl font-bold text-yellow-400">
                    {employees.filter(emp => emp.status === "On Leave").length}
                  </p>
                </div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Departments</p>
                  <p className="text-2xl font-bold text-purple-400">
                    {new Set(employees.map(emp => emp.department)).size}
                  </p>
                </div>
                <Briefcase className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Employee Table */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700 hover:bg-gray-700/50">
                    <TableHead className="text-gray-300 font-semibold">ID</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Name</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Position</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Department</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Email</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Phone</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Location</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Status</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Join Date</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Salary</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Contract</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Nationality</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Passport</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Visa Status</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Work Permit</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Emergency</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEmployees.map((employee) => (
                    <TableRow key={employee.id} className="border-gray-700 hover:bg-gray-700/30">
                      <TableCell className="text-blue-400 font-medium">{employee.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <img 
                            src={employee.avatar} 
                            alt={employee.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <span className="text-white font-medium">{employee.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-300">{employee.position}</TableCell>
                      <TableCell className="text-gray-300">{employee.department}</TableCell>
                      <TableCell className="text-gray-300">{employee.email}</TableCell>
                      <TableCell className="text-gray-300">{employee.phone}</TableCell>
                      <TableCell className="text-gray-300">{employee.location}</TableCell>
                      <TableCell className={getStatusColor(employee.status)}>{employee.status}</TableCell>
                      <TableCell className="text-gray-300">{employee.joinDate}</TableCell>
                      <TableCell className="text-green-400">AED {employee.salary}</TableCell>
                      <TableCell className="text-gray-300">{employee.contractType}</TableCell>
                      <TableCell className="text-gray-300">{employee.nationality}</TableCell>
                      <TableCell className="text-gray-300">{employee.passportNo}</TableCell>
                      <TableCell className="text-green-400">{employee.visaStatus}</TableCell>
                      <TableCell className="text-green-400">{employee.workPermit}</TableCell>
                      <TableCell className="text-gray-300">{employee.emergencyContact}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEditEmployee(employee)}
                            className="text-blue-400 border-blue-400 hover:bg-blue-400/10"
                          >
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDeleteEmployee(employee.id)}
                            className="text-red-400 border-red-400 hover:bg-red-400/10"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Employee Form Modal */}
        {showEmployeeForm && (
          <EmployeeForm
            employee={editingEmployee}
            onClose={() => setShowEmployeeForm(false)}
            onSave={handleSaveEmployee}
          />
        )}
      </div>
    </div>
  );
};

export default Manpower;
