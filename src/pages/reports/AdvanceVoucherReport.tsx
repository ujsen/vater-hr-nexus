
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search, Download, Eye, Calendar, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";

const AdvanceVoucherReport = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const vouchers = [
    {
      id: "AV001",
      employeeName: "Ahmed Al-Mansouri",
      employeeId: "EMP001",
      amount: 5000,
      requestDate: "2024-06-15",
      approvalDate: "2024-06-16",
      status: "Approved",
      purpose: "Emergency medical expenses",
      department: "Engineering"
    },
    {
      id: "AV002",
      employeeName: "Sara Al-Zahra",
      employeeId: "EMP005",
      amount: 3000,
      requestDate: "2024-06-10",
      approvalDate: "2024-06-12",
      status: "Paid",
      purpose: "Travel advance",
      department: "Sales"
    },
    {
      id: "AV003",
      employeeName: "Mohammed Hassan",
      employeeId: "EMP003",
      amount: 2500,
      requestDate: "2024-06-08",
      approvalDate: null,
      status: "Pending",
      purpose: "Training course fees",
      department: "HR"
    },
    {
      id: "AV004",
      employeeName: "Fatima Ali",
      employeeId: "EMP007",
      amount: 4500,
      requestDate: "2024-06-05",
      approvalDate: "2024-06-06",
      status: "Rejected",
      purpose: "Personal loan",
      department: "Finance"
    }
  ];

  const filteredVouchers = vouchers.filter(voucher => 
    voucher.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    voucher.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    voucher.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": return "bg-blue-500";
      case "Paid": return "bg-green-500";
      case "Pending": return "bg-yellow-500";
      case "Rejected": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const totalAmount = vouchers.reduce((sum, voucher) => sum + voucher.amount, 0);
  const approvedAmount = vouchers.filter(v => v.status === "Approved" || v.status === "Paid").reduce((sum, voucher) => sum + voucher.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Header />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/reports')}
                className="text-gray-300 border-gray-600 hover:bg-gray-700"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Reports
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-white">Advance Voucher Report</h1>
                <p className="text-gray-400">Employee advance payment tracking</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-emerald-500 to-emerald-700">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Vouchers</p>
                    <p className="text-2xl font-bold text-white">{vouchers.length}</p>
                  </div>
                  <Calendar className="w-8 h-8 text-emerald-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Amount</p>
                    <p className="text-2xl font-bold text-emerald-400">SAR {totalAmount.toLocaleString()}</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-emerald-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Approved</p>
                    <p className="text-2xl font-bold text-green-400">SAR {approvedAmount.toLocaleString()}</p>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Pending</p>
                    <p className="text-2xl font-bold text-yellow-400">{vouchers.filter(v => v.status === "Pending").length}</p>
                  </div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Advance Voucher Details</CardTitle>
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search vouchers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700">
                    <TableHead className="text-gray-300">Voucher ID</TableHead>
                    <TableHead className="text-gray-300">Employee</TableHead>
                    <TableHead className="text-gray-300">Department</TableHead>
                    <TableHead className="text-gray-300">Amount</TableHead>
                    <TableHead className="text-gray-300">Purpose</TableHead>
                    <TableHead className="text-gray-300">Request Date</TableHead>
                    <TableHead className="text-gray-300">Status</TableHead>
                    <TableHead className="text-gray-300">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredVouchers.map((voucher) => (
                    <TableRow key={voucher.id} className="border-gray-700 hover:bg-gray-700/30">
                      <TableCell className="text-blue-400 font-medium">{voucher.id}</TableCell>
                      <TableCell className="text-white">{voucher.employeeName}</TableCell>
                      <TableCell className="text-gray-300">{voucher.department}</TableCell>
                      <TableCell className="text-emerald-400 font-medium">SAR {voucher.amount.toLocaleString()}</TableCell>
                      <TableCell className="text-gray-300">{voucher.purpose}</TableCell>
                      <TableCell className="text-gray-300">{voucher.requestDate}</TableCell>
                      <TableCell>
                        <Badge className={`${getStatusColor(voucher.status)} text-white border-none`}>
                          {voucher.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline" className="text-gray-300 border-gray-600">
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdvanceVoucherReport;
