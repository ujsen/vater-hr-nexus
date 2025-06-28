
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EmployeeCost = () => {
  const navigate = useNavigate();
  
  const [employeeCosts] = useState([
    {
      id: 1,
      badgeNo: "NSHH2082",
      empName: "FAISAL MUGHAYYIB M ALMUGHYIRAH",
      actualJob: "HEAVY DRIVER",
      iqamaNo: "1073049361",
      medicalCost: "",
      rentCost: "",
      ticketCost: "",
      reEntryCost: "",
      safetyCost: ""
    },
    {
      id: 2,
      badgeNo: "NSHH2083",
      empName: "ALI ABDULHAMID ALMOUSA",
      actualJob: "HEAVY EQUIPMENT DRIVER",
      iqamaNo: "1060999180",
      medicalCost: "",
      rentCost: "",
      ticketCost: "",
      reEntryCost: "",
      safetyCost: ""
    },
    {
      id: 3,
      badgeNo: "NSH2085",
      empName: "Mohammed Theeb Al ALHAJRI",
      actualJob: "MAINTENANCE ELECTRICIAN",
      iqamaNo: "1127520359",
      medicalCost: "",
      rentCost: "",
      ticketCost: "",
      reEntryCost: "",
      safetyCost: ""
    },
    {
      id: 4,
      badgeNo: "NSH2091",
      empName: "SHAIK ASLAM",
      actualJob: "FILE CLOSER",
      iqamaNo: "",
      medicalCost: "",
      rentCost: "",
      ticketCost: "",
      reEntryCost: "",
      safetyCost: ""
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/hr/manpower')}
              className="text-gray-300 border-gray-600 hover:bg-gray-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-white">Employee Cost</h1>
              <p className="text-gray-400">Total EMP Prison: 4</p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800">
            <Plus className="w-4 h-4 mr-2" />
            Add New
          </Button>
        </div>

        {/* Table */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700 hover:bg-gray-700/50">
                    <TableHead className="text-gray-300 font-semibold">SL#</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Badge #</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Emp Name</TableHead>
                    <TableHead className="text-gray-300 font-semibold">ActualJob</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Iqama NO</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Medical Cost</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Rent Cost</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Ticket Cost</TableHead>
                    <TableHead className="text-gray-300 font-semibold">ReEntryCost</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Safety Cost</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employeeCosts.map((employee) => (
                    <TableRow key={employee.id} className="border-gray-700 hover:bg-gray-700/30">
                      <TableCell className="text-blue-400 font-medium">{employee.id}</TableCell>
                      <TableCell className="text-white font-medium">{employee.badgeNo}</TableCell>
                      <TableCell className="text-gray-300">{employee.empName}</TableCell>
                      <TableCell className="text-gray-300">{employee.actualJob}</TableCell>
                      <TableCell className="text-gray-300">{employee.iqamaNo}</TableCell>
                      <TableCell>
                        <Input 
                          className="bg-gray-700 border-gray-600 text-white w-24"
                          placeholder="0"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          className="bg-gray-700 border-gray-600 text-white w-24"
                          placeholder="0"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          className="bg-gray-700 border-gray-600 text-white w-24"
                          placeholder="0"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          className="bg-gray-700 border-gray-600 text-white w-24"
                          placeholder="0"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          className="bg-gray-700 border-gray-600 text-white w-24"
                          placeholder="0"
                        />
                      </TableCell>
                      <TableCell>
                        <Button 
                          size="sm" 
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Update
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmployeeCost;
