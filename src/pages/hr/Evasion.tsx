
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Evasion = () => {
  const navigate = useNavigate();
  
  const [evasionEmployees] = useState([
    {
      id: 1,
      record: "NS1602",
      empName: "DIPAK UDHARKOTI KARKI",
      actualJob: "Excavator Operator",
      iqamaNo: "2511575140",
      iqamaIssue: "2023-04-10",
      iqamaExpiration: "2023-10-07",
      passportIssue: "2014-09-10",
      passportExpiration: "2024-09-09",
      workpermitIssue: "2023-04-12",
      workpermitExpiration: "2023-10-09",
      contractExpiration: "2024-01-18",
      ibanBank: "SA6910000003400001374502",
      endDate: "2023-05-30",
      status: "Evasion"
    },
    {
      id: 2,
      record: "NSHH1208",
      empName: "Ram Babu Chaudhary",
      actualJob: "JCB Backhoe Loader Operator",
      iqamaNo: "2436438572",
      iqamaIssue: "2022-10-09",
      iqamaExpiration: "2023-07-06",
      passportIssue: "2016-01-16",
      passportExpiration: "2026-01-18",
      workpermitIssue: "2022-10-11",
      workpermitExpiration: "2023-07-08",
      contractExpiration: "2023-06-07",
      ibanBank: "SA6310000002763647000101",
      endDate: "2023-02-26",
      status: "Evasion"
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
              <h1 className="text-3xl font-bold text-white">Evasion Record</h1>
              <p className="text-gray-400">Total EMP FAINAL EXIT: 13</p>
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
                    <TableHead className="text-gray-300 font-semibold">Contract Expiration</TableHead>
                    <TableHead className="text-gray-300 font-semibold">IBAN Bank</TableHead>
                    <TableHead className="text-gray-300 font-semibold">End Date</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {evasionEmployees.map((employee) => (
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
                      <TableCell className="text-gray-300">{employee.contractExpiration}</TableCell>
                      <TableCell className="text-gray-300">{employee.ibanBank}</TableCell>
                      <TableCell className="text-gray-300">{employee.endDate}</TableCell>
                      <TableCell className="text-yellow-400">{employee.status}</TableCell>
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

export default Evasion;
