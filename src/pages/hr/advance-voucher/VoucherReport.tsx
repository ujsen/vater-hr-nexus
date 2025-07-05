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

const VoucherReport = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const voucherReports = [
    {
      sl: 1,
      voucherNo: "1",
      badgeNo: "NSHH940",
      empName: "Amarjeet Kumar Osihar Mahto",
      amount: 100,
      installments: 100,
      balance: 0
    }
  ];

  const filteredReports = voucherReports.filter(report => 
    report.empName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.badgeNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.voucherNo.toString().includes(searchTerm)
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
              <h1 className="text-3xl font-bold text-card-foreground">Voucher Report</h1>
              <p className="text-muted-foreground">View voucher payment reports</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search vouchers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Voucher Report Table */}
        <Card className="bg-card/50 border-border backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-card-foreground">Voucher Report</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-app-teal/20">
                    <TableHead className="text-center font-semibold text-card-foreground">SL#</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">VOUCHER NO</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Badge #</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Emp Name</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Amount</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Installments</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Balance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredReports.map((report) => (
                    <TableRow key={report.sl} className="hover:bg-muted/50">
                      <TableCell className="text-center text-card-foreground">{report.sl}</TableCell>
                      <TableCell className="text-center text-app-blue font-medium">{report.voucherNo}</TableCell>
                      <TableCell className="text-center text-card-foreground">{report.badgeNo}</TableCell>
                      <TableCell className="text-center text-card-foreground">{report.empName}</TableCell>
                      <TableCell className="text-center text-card-foreground">{report.amount}</TableCell>
                      <TableCell className="text-center text-card-foreground">{report.installments}</TableCell>
                      <TableCell className="text-center text-card-foreground">{report.balance}</TableCell>
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

export default VoucherReport;