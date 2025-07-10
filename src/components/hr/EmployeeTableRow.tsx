
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Edit, Trash2, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface EmployeeTableRowProps {
  employee: any;
  onEdit: (employee: any) => void;
  onDelete: (employeeId: string) => void;
}

export const EmployeeTableRow = ({ employee, onEdit, onDelete }: EmployeeTableRowProps) => {
  const navigate = useNavigate();
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "text-green-400";
      case "On Leave": return "text-yellow-400";
      case "Inactive": return "text-red-400";
      default: return "text-gray-400";
    }
  };

  return (
    <TableRow className="border-gray-700 hover:bg-gray-700/30">
      <TableCell className="text-blue-400 font-medium">{employee.id}</TableCell>
      <TableCell className="text-white font-medium">{employee.name}</TableCell>
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
            onClick={() => navigate(`/hr/employee/${employee.id}`)}
            className="text-green-400 border-green-400 hover:bg-green-400/10"
          >
            <Eye className="w-3 h-3" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => onEdit(employee)}
            className="text-blue-400 border-blue-400 hover:bg-blue-400/10"
          >
            <Edit className="w-3 h-3" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => onDelete(employee.id)}
            className="text-red-400 border-red-400 hover:bg-red-400/10"
          >
            <Trash2 className="w-3 h-3" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};
