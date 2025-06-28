
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dependent = () => {
  const navigate = useNavigate();
  
  const [dependentRecords] = useState([
    {
      id: 1,
      sponserIqama: "2500915281",
      sponser: "GG1521",
      dependentId: "GG1521Spouse1",
      dependentName: "FATIMA ELRASHEED HASSAN OSMAN",
      gender: "Female",
      birthDate: "1993-05-17",
      nationality: "Saudi Arabia",
      iqamaNo: "2500915281",
      bordeNo: "4796432807",
      visaType: "Visitor"
    },
    {
      id: 2,
      sponserIqama: "2500915281",
      sponser: "GG1521",
      dependentId: "GG1521Child2",
      dependentName: "REEM JAFFAR OSMAN SAIED",
      gender: "Female",
      birthDate: "2016-12-06",
      nationality: "Sudan",
      iqamaNo: "2500915281",
      bordeNo: "4796427856",
      visaType: "Visitor"
    },
    {
      id: 3,
      sponserIqama: "2087563841",
      sponser: "GG728",
      dependentId: "GG728-Spouse1",
      dependentName: "Israa M. S. Abunamous Rifa",
      gender: "FEMALE",
      birthDate: "1994-02-20",
      nationality: "Palestine",
      iqamaNo: "2456474754",
      bordeNo: "",
      visaType: "Iqama"
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
              <h1 className="text-3xl font-bold text-white">Dependent</h1>
              <p className="text-gray-400">Total Dependent: 62</p>
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
                    <TableHead className="text-gray-300 font-semibold">Sponser Iqama</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Sponser</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Dependent #</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Dependent Name</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Gender</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Birth Date</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Nationality</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Iqama #</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Borde #</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Visa Type</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dependentRecords.map((record) => (
                    <TableRow key={record.id} className="border-gray-700 hover:bg-gray-700/30">
                      <TableCell className="text-blue-400 font-medium">{record.id}</TableCell>
                      <TableCell className="text-white font-medium">{record.sponserIqama}</TableCell>
                      <TableCell className="text-gray-300">{record.sponser}</TableCell>
                      <TableCell className="text-gray-300">{record.dependentId}</TableCell>
                      <TableCell className="text-gray-300">{record.dependentName}</TableCell>
                      <TableCell className="text-gray-300">{record.gender}</TableCell>
                      <TableCell className="text-gray-300">{record.birthDate}</TableCell>
                      <TableCell className="text-gray-300">{record.nationality}</TableCell>
                      <TableCell className="text-gray-300">{record.iqamaNo}</TableCell>
                      <TableCell className="text-gray-300">{record.bordeNo}</TableCell>
                      <TableCell className="text-green-400">{record.visaType}</TableCell>
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

export default Dependent;
