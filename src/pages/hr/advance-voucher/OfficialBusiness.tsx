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

const OfficialBusiness = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const officialBusinessVouchers = [
    {
      sl: 1,
      voucherNo: 2185,
      badgeNo: "GG1459",
      empName: "RAKAN NASSIR SALEM ALHYDER",
      date: "2025-06-21",
      amount: 2728,
      type: "OFFICIAL BUSINESS"
    },
    {
      sl: 2,
      voucherNo: 961,
      badgeNo: "NST1584",
      empName: "RAJ KUMAR BHOMJAN",
      date: "2024-02-04",
      amount: 500,
      type: "OFFICIAL BUSINESS"
    },
    {
      sl: 3,
      voucherNo: 411,
      badgeNo: "NSHH1161",
      empName: "Mohamed Hamdi Abdelrahman Abbas",
      date: "2023-04-17",
      amount: 2100,
      type: "OFFICIAL BUSINESS"
    },
    {
      sl: 4,
      voucherNo: 201,
      badgeNo: "NS1110",
      empName: "Mohammad Ayaz Nomani",
      date: "2022-12-20",
      amount: 7000,
      type: "OFFICIAL BUSINESS"
    }
  ];

  const filteredVouchers = officialBusinessVouchers.filter(voucher => 
    voucher.empName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    voucher.badgeNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    voucher.voucherNo.toString().includes(searchTerm)
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
              <h1 className="text-3xl font-bold text-card-foreground">OFFICIAL BUSINESS VOUCHER List</h1>
              <p className="text-muted-foreground">Official business voucher records</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search official business vouchers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Official Business Voucher Table */}
        <Card className="bg-card/50 border-border backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-card-foreground">OFFICIAL BUSINESS VOUCHER List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-app-teal/20">
                    <TableHead className="text-center font-semibold text-card-foreground">SL#</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Voucher #</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Badge #</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Emp Name</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Date</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Amount</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Type</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredVouchers.map((voucher) => (
                    <TableRow key={voucher.sl} className="hover:bg-muted/50">
                      <TableCell className="text-center text-card-foreground">{voucher.sl}</TableCell>
                      <TableCell className="text-center text-card-foreground">{voucher.voucherNo}</TableCell>
                      <TableCell className="text-center text-card-foreground">{voucher.badgeNo}</TableCell>
                      <TableCell className="text-center text-card-foreground">{voucher.empName}</TableCell>
                      <TableCell className="text-center text-card-foreground">{voucher.date}</TableCell>
                      <TableCell className="text-center text-card-foreground">{voucher.amount}</TableCell>
                      <TableCell className="text-center text-card-foreground">{voucher.type}</TableCell>
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

export default OfficialBusiness;