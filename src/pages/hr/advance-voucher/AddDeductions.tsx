import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AddDeductions = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const deductions = [
    {
      sl: 1,
      badgeNo: "EM780",
      empName: "Hussein Hadi Mohammed Ghaidan",
      amount: 1539,
      monthlyInstallments: 575,
      deductionAmount: ""
    },
    {
      sl: 2,
      badgeNo: "GG1250",
      empName: "ELdwin Maningas VaLLejera",
      amount: 5000,
      monthlyInstallments: 1000,
      deductionAmount: ""
    },
    {
      sl: 3,
      badgeNo: "GG1250",
      empName: "ELdwin Maningas VaLLejera",
      amount: 3000,
      monthlyInstallments: 800,
      deductionAmount: ""
    },
    {
      sl: 4,
      badgeNo: "GG1250",
      empName: "ELdwin Maningas VaLLejera",
      amount: 2000,
      monthlyInstallments: 500,
      deductionAmount: ""
    },
    {
      sl: 5,
      badgeNo: "GG1250",
      empName: "ELdwin Maningas VaLLejera",
      amount: 200,
      monthlyInstallments: 200,
      deductionAmount: ""
    },
    {
      sl: 6,
      badgeNo: "GG1250",
      empName: "ELdwin Maningas VaLLejera",
      amount: 1000,
      monthlyInstallments: 500,
      deductionAmount: ""
    },
    {
      sl: 7,
      badgeNo: "GG1250",
      empName: "ELdwin Maningas VaLLejera",
      amount: 2241,
      monthlyInstallments: 500,
      deductionAmount: ""
    },
    {
      sl: 8,
      badgeNo: "GG1250",
      empName: "ELdwin Maningas VaLLejera",
      amount: 3000,
      monthlyInstallments: 500,
      deductionAmount: ""
    }
  ];

  const filteredDeductions = deductions.filter(deduction => 
    deduction.empName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    deduction.badgeNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-app p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/hr/advance-voucher')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-card-foreground">Add Deductions</h1>
              <p className="text-muted-foreground">Manage employee salary deductions</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Deductions Table */}
        <Card className="bg-card/50 border-border backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-card-foreground">Employee Deductions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-app-teal/20">
                    <TableHead className="text-center font-semibold text-card-foreground">SL#</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Badge #</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Emp Name</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Amount</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Monthly Installments</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Deduction Amount</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDeductions.map((deduction) => (
                    <TableRow key={deduction.sl} className="hover:bg-muted/50">
                      <TableCell className="text-center text-card-foreground">{deduction.sl}</TableCell>
                      <TableCell className="text-center text-card-foreground">{deduction.badgeNo}</TableCell>
                      <TableCell className="text-center text-card-foreground">{deduction.empName}</TableCell>
                      <TableCell className="text-center text-card-foreground">{deduction.amount}</TableCell>
                      <TableCell className="text-center text-card-foreground">{deduction.monthlyInstallments}</TableCell>
                      <TableCell className="text-center">
                        <Input 
                          type="number" 
                          placeholder="Enter amount"
                          className="w-32 text-center"
                        />
                      </TableCell>
                      <TableCell className="text-center">
                        <Button size="sm" className="bg-app-green hover:bg-app-green/90">
                          <Save className="w-3 h-3 mr-1" />
                          Save Data
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

export default AddDeductions;