import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search, CheckCircle, XCircle, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const VoucherPending = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const pendingVouchers = [
    {
      sl: 1,
      voucherNo: "AV001",
      badgeNo: "EM780",
      empName: "Hussein Hadi Mohammed Ghaidan",
      amount: 5000,
      requestDate: "2025-01-15",
      purpose: "Medical Emergency",
      status: "Pending"
    },
    {
      sl: 2,
      voucherNo: "AV002",
      badgeNo: "GG1250",
      empName: "ELdwin Maningas VaLLejera",
      amount: 3000,
      requestDate: "2025-01-20",
      purpose: "Family Emergency",
      status: "Pending"
    },
    {
      sl: 3,
      voucherNo: "AV005",
      badgeNo: "NS1025",
      empName: "Radheshyam Pasi",
      amount: 2500,
      requestDate: "2025-01-22",
      purpose: "Education Expenses",
      status: "Pending"
    }
  ];

  const filteredVouchers = pendingVouchers.filter(voucher => 
    voucher.empName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    voucher.badgeNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    voucher.voucherNo.toLowerCase().includes(searchTerm.toLowerCase())
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
              <h1 className="text-3xl font-bold text-card-foreground">Voucher Pending</h1>
              <p className="text-muted-foreground">Pending voucher approvals</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search pending vouchers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Pending Vouchers Table */}
        <Card className="bg-card/50 border-border backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-card-foreground">Pending Voucher Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-app-orange/20">
                    <TableHead className="text-center font-semibold text-card-foreground">SL#</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Voucher No</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Badge #</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Emp Name</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Amount</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Request Date</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Purpose</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Status</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredVouchers.map((voucher) => (
                    <TableRow key={voucher.sl} className="hover:bg-muted/50">
                      <TableCell className="text-center text-card-foreground">{voucher.sl}</TableCell>
                      <TableCell className="text-center text-card-foreground">{voucher.voucherNo}</TableCell>
                      <TableCell className="text-center text-card-foreground">{voucher.badgeNo}</TableCell>
                      <TableCell className="text-center text-card-foreground">{voucher.empName}</TableCell>
                      <TableCell className="text-center text-card-foreground">{voucher.amount}</TableCell>
                      <TableCell className="text-center text-card-foreground">{voucher.requestDate}</TableCell>
                      <TableCell className="text-center text-card-foreground">{voucher.purpose}</TableCell>
                      <TableCell className="text-center">
                        <Badge className="bg-app-orange text-white">
                          <Clock className="w-3 h-3 mr-1" />
                          {voucher.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center space-x-2">
                          <Button size="sm" className="bg-app-green hover:bg-app-green/90">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Approve
                          </Button>
                          <Button size="sm" variant="destructive">
                            <XCircle className="w-3 h-3 mr-1" />
                            Reject
                          </Button>
                        </div>
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

export default VoucherPending;