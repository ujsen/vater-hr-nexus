
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase } from "lucide-react";

interface ManpowerStatsProps {
  employees: any[];
}

export const ManpowerStats = ({ employees }: ManpowerStatsProps) => {
  return (
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
  );
};
