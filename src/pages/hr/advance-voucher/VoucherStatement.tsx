import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const VoucherStatement = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const voucherStatements = [
    {
      sl: 1,
      badgeNo: "EM780",
      empName: "Hussein Hadi Mohammed Ghaidan",
      amount: 1539,
      deductions: 0,
      balance: 1539
    },
    {
      sl: 2,
      badgeNo: "GG1250",
      empName: "ELdwin Maningas VaLLejera",
      amount: 16441,
      deductions: 0,
      balance: 16441
    },
    {
      sl: 3,
      badgeNo: "GG1521",
      empName: "Gaffar Osman Saied Omer",
      amount: 24348,
      deductions: 0,
      balance: 24348
    },
    {
      sl: 4,
      badgeNo: "GG1868",
      empName: "SYED SAJJAD HAIDER BUKHARI",
      amount: 3037,
      deductions: 0,
      balance: 3037
    },
    {
      sl: 5,
      badgeNo: "GG2014",
      empName: "TONY GEORGE",
      amount: 839,
      deductions: 0,
      balance: 839
    },
    {
      sl: 6,
      badgeNo: "GG728",
      empName: "Mohammed Khalil Sulaiman Abunamous",
      amount: 175347,
      deductions: 0,
      balance: 175347
    },
    {
      sl: 7,
      badgeNo: "GGNS1392",
      empName: "Mohsen Ali Naji Al Shebami",
      amount: 6603.88,
      deductions: 0,
      balance: 6603.88
    },
    {
      sl: 8,
      badgeNo: "GGNS1968",
      empName: "HASNOR SUMANG SULTAN",
      amount: 1900,
      deductions: 0,
      balance: 1900
    },
    {
      sl: 9,
      badgeNo: "MHGG7",
      empName: "Mary Ann Orence Ruiz",
      amount: 5000,
      deductions: 0,
      balance: 5000
    },
    {
      sl: 10,
      badgeNo: "NS1025",
      empName: "Radheshyam Pasi",
      amount: 2768,
      deductions: 0,
      balance: 2768
    },
    {
      sl: 11,
      badgeNo: "NS1110",
      empName: "Mohammad Ayaz Nomani",
      amount: 5646,
      deductions: 0,
      balance: 5646
    },
    {
      sl: 12,
      badgeNo: "NS112",
      empName: "Ansari ishahak",
      amount: 1964,
      deductions: 0,
      balance: 1964
    }
  ];

  const filteredStatements = voucherStatements.filter(statement => 
    statement.empName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    statement.badgeNo.toLowerCase().includes(searchTerm.toLowerCase())
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
              <h1 className="text-3xl font-bold text-card-foreground">Voucher Statement</h1>
              <p className="text-muted-foreground">Employee voucher balance statements</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search statements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Voucher Statement Table */}
        <Card className="bg-card/50 border-border backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-card-foreground">Voucher Statement</CardTitle>
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
                    <TableHead className="text-center font-semibold text-card-foreground">deductions</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Balance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStatements.map((statement) => (
                    <TableRow key={statement.sl} className="hover:bg-muted/50">
                      <TableCell className="text-center text-card-foreground">{statement.sl}</TableCell>
                      <TableCell className="text-center text-card-foreground">{statement.badgeNo}</TableCell>
                      <TableCell className="text-center text-card-foreground">{statement.empName}</TableCell>
                      <TableCell className="text-center text-card-foreground">{statement.amount}</TableCell>
                      <TableCell className="text-center text-card-foreground">{statement.deductions}</TableCell>
                      <TableCell className="text-center text-card-foreground">{statement.balance}</TableCell>
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

export default VoucherStatement;