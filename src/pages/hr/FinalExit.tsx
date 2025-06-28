
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FinalExit = () => {
  const navigate = useNavigate();
  
  const [finalExitEmployees] = useState([
    {
      id: 1,
      record: "EM764",
      empName: "Gul Mat Khan Moeen Khan",
      actualJob: "Roller Compactor Operator",
      iqamaNo: "2318257926",
      iqamaIssue: "2021-10-19",
      iqamaExpiration: "2022-10-09",
      passportIssue: "2019-05-06",
      passportExpiration: "2024-05-04",
      workpermitIssue: "2021-10-21",
      workpermitExpiration: "2022-10-11",
      joinedToCompany: "2013-08-10",
      contractExpiration: "2022-10-09",
      ibanBank: "SA2410000003486044000105",
      endDate: "2022-11-29",
      status: "FAINAL EXIT"
    },
    {
      id: 2,
      record: "EM780",
      empName: "Hussein Hadi Mohammed Ghadan",
      actualJob: "Mechanic",
      iqamaNo: "2336313248",
      iqamaIssue: "2020-11-19",
      iqamaExpiration: "2022-11-05",
      passportIssue: "2022-11-06",
      passportExpiration: "2027-11-06",
      workpermitIssue: "2021-11-06",
      workpermitExpiration: "2022-11-06",
      joinedToCompany: "2013-09-14",
      contractExpiration: "2022-10-08",
      ibanBank: "SA5510000003474218000107",
      endDate: "",
      status: "FAINAL EXIT"
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
              <h1 className="text-3xl font-bold text-white">EMP FAINAL EXIT Record</h1>
              <p className="text-gray-400">Total EMP FAINAL EXIT: 166</p>
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
                    <TableHead className="text-gray-300 font-semibold">Record</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Emp Name</TableHead>
                    <TableHead className="text-gray-300 font-semibold">ActualJob</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Iqama NO</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Iqama Issue</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Iqama Expiration</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Passport Issue</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Passport Expiration</TableHead>
                    <TableHead className="text-gray-300 font-semibold">workprmit Issue</TableHead>
                    <TableHead className="text-gray-300 font-semibold">workprmit Expiration</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Joined to Company</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Contract Expiration</TableHead>
                    <TableHead className="text-gray-300 font-semibold">IBAN Bank</TableHead>
                    <TableHead className="text-gray-300 font-semibold">End Date</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {finalExitEmployees.map((employee) => (
                    <TableRow key={employee.id} className="border-gray-700 hover:bg-gray-700/30">
                      <TableCell className="text-blue-400 font-medium">{employee.id}</TableCell>
                      <TableCell className="text-white font-medium">{employee.record}</TableCell>
                      <TableCell className="text-gray-300">{employee.empName}</TableCell>
                      <TableCell className="text-gray-300">{employee.actualJob}</TableCell>
                      <TableCell className="text-gray-300">{employee.iqamaNo}</TableCell>
                      <TableCell className="text-gray-300">{employee.iqamaIssue}</TableCell>
                      <TableCell className="text-gray-300">{employee.iqamaExpiration}</TableCell>
                      <TableCell className="text-gray-300">{employee.passportIssue}</TableCell>
                      <TableCell className="text-gray-300">{employee.passportExpiration}</TableCell>
                      <TableCell className="text-gray-300">{employee.workpermitIssue}</TableCell>
                      <TableCell className="text-gray-300">{employee.workpermitExpiration}</TableCell>
                      <TableCell className="text-gray-300">{employee.joinedToCompany}</TableCell>
                      <TableCell className="text-gray-300">{employee.contractExpiration}</TableCell>
                      <TableCell className="text-gray-300">{employee.ibanBank}</TableCell>
                      <TableCell className="text-gray-300">{employee.endDate}</TableCell>
                      <TableCell className="text-red-400">{employee.status}</TableCell>
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

export default FinalExit;
