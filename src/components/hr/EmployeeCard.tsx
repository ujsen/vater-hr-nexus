
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Briefcase, 
  Users, 
  MoreVertical,
  Edit,
  Trash2
} from "lucide-react";

interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  location: string;
  status: string;
  joinDate: string;
  avatar: string;
}

interface EmployeeCardProps {
  employee: Employee;
  onEdit: (employee: Employee) => void;
  onDelete: (employeeId: string) => void;
}

export const EmployeeCard = ({ employee, onEdit, onDelete }: EmployeeCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500";
      case "On Leave": return "bg-yellow-500";
      case "Inactive": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <Card className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={employee.avatar} 
              alt={employee.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-white">{employee.name}</h3>
              <p className="text-sm text-gray-400">{employee.id}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge className={`${getStatusColor(employee.status)} text-white border-none`}>
              {employee.status}
            </Badge>
            <div className="relative group">
              <Button variant="ghost" size="sm">
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </Button>
              <div className="absolute right-0 top-8 bg-gray-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 min-w-[120px]">
                <button 
                  onClick={() => onEdit(employee)}
                  className="flex items-center w-full px-3 py-2 text-sm text-white hover:bg-gray-600 rounded-t-md"
                >
                  <Edit className="w-3 h-3 mr-2" />
                  Edit
                </button>
                <button 
                  onClick={() => onDelete(employee.id)}
                  className="flex items-center w-full px-3 py-2 text-sm text-red-400 hover:bg-gray-600 rounded-b-md"
                >
                  <Trash2 className="w-3 h-3 mr-2" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center space-x-2 text-sm">
          <Briefcase className="w-4 h-4 text-gray-400" />
          <span className="text-white">{employee.position}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Users className="w-4 h-4 text-gray-400" />
          <span className="text-gray-300">{employee.department}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Mail className="w-4 h-4 text-gray-400" />
          <span className="text-gray-300">{employee.email}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Phone className="w-4 h-4 text-gray-400" />
          <span className="text-gray-300">{employee.phone}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="text-gray-300">{employee.location}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span className="text-gray-300">Joined {employee.joinDate}</span>
        </div>
      </CardContent>
    </Card>
  );
};
