
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Search, 
  Plus, 
  Users, 
  Filter,
  Briefcase
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { EmployeeCard } from "@/components/hr/EmployeeCard";
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
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
    }
  ]);

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.department.toLowerCase().includes(searchTerm.toLowerCase());
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
              <h1 className="text-3xl font-bold text-white">Manpower Directory</h1>
              <p className="text-gray-400">Manage your workforce</p>
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

        {/* Employee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEmployees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onEdit={handleEditEmployee}
              onDelete={handleDeleteEmployee}
            />
          ))}
        </div>

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
