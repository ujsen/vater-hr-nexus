import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { EmployeeForm } from "@/components/hr/EmployeeForm";
import { ManpowerStats } from "@/components/hr/ManpowerStats";
import { ManpowerFilters } from "@/components/hr/ManpowerFilters";
import { ManpowerActions } from "@/components/hr/ManpowerActions";
import { ManpowerTable } from "@/components/hr/ManpowerTable";
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
            Add New
          </Button>
        </div>

        {/* Action Buttons */}
        <ManpowerActions />

        {/* Search and Filters */}
        <ManpowerFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />

        {/* Stats Cards */}
        <ManpowerStats employees={employees} />

        {/* Employee Table */}
        <ManpowerTable
          employees={filteredEmployees}
          onEditEmployee={handleEditEmployee}
          onDeleteEmployee={handleDeleteEmployee}
        />

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
