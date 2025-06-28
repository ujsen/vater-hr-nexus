
import { Card, CardContent } from "@/components/ui/card";
import { 
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EmployeeTableRow } from "./EmployeeTableRow";

interface ManpowerTableProps {
  employees: any[];
  onEditEmployee: (employee: any) => void;
  onDeleteEmployee: (employeeId: string) => void;
}

export const ManpowerTable = ({ employees, onEditEmployee, onDeleteEmployee }: ManpowerTableProps) => {
  return (
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
              {employees.map((employee) => (
                <EmployeeTableRow
                  key={employee.id}
                  employee={employee}
                  onEdit={onEditEmployee}
                  onDelete={onDeleteEmployee}
                />
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
