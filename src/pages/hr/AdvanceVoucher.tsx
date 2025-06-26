
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Search, 
  Plus, 
  DollarSign, 
  Calendar, 
  User,
  Eye,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdvanceVoucher = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const vouchers = [
    {
      id: "AV001",
      employeeName: "Ahmed Al-Mansouri",
      employeeId: "EMP001",
      amount: 5000,
      currency: "AED",
      requestDate: "2024-01-15",
      approvalDate: "2024-01-16",
      disbursementDate: "2024-01-17",
      purpose: "Medical Emergency",
      status: "Approved",
      approvedBy: "HR Manager",
      repaymentPlan: "Monthly deduction of 1000 AED"
    },
    {
      id: "AV002",
      employeeName: "Sarah Johnson",
      employeeId: "EMP002",
      amount: 3000,
      currency: "AED",
      requestDate: "2024-01-20",
      purpose: "Family Emergency",
      status: "Pending",
      repaymentPlan: "Monthly deduction of 500 AED"
    },
    {
      id: "AV003",
      employeeName: "Mohammed Hassan",
      employeeId: "EMP003",
      amount: 2500,
      currency: "AED",
      requestDate: "2024-01-10",
      approvalDate: "2024-01-12",
      disbursementDate: "2024-01-13",
      purpose: "Education Expenses",
      status: "Disbursed",
      approvedBy: "Finance Manager",
      repaymentPlan: "Monthly deduction of 500 AED"
    },
    {
      id: "AV004",
      employeeName: "Emily Chen",
      employeeId: "EMP004",
      amount: 4000,
      currency: "AED",
      requestDate: "2024-01-18",
      purpose: "Vehicle Repair",
      status: "Rejected",
      rejectedBy: "Finance Manager",
      rejectionReason: "Exceeds monthly limit"
    }
  ];

  const filteredVouchers = vouchers.filter(voucher => 
    voucher.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    voucher.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    voucher.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": return "bg-green-500";
      case "Disbursed": return "bg-blue-500";
      case "Pending": return "bg-yellow-500";
      case "Rejected": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved": return CheckCircle;
      case "Disbursed": return CheckCircle;
      case "Pending": return Clock;
      case "Rejected": return XCircle;
      default: return Clock;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/hr')}
              className="text-gray-300 border-gray-600 hover:bg-gray-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to HR
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-white">Advance Voucher</h1>
              <p className="text-gray-400">Manage employee advance payments</p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800">
            <Plus className="w-4 h-4 mr-2" />
            New Advance
          </Button>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search vouchers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Vouchers</p>
                  <p className="text-2xl font-bold text-white">{vouchers.length}</p>
                </div>
                <DollarSign className="w-8 h-8 text-emerald-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Amount</p>
                  <p className="text-2xl font-bold text-green-400">14,500</p>
                  <p className="text-xs text-gray-500">AED</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Pending</p>
                  <p className="text-2xl font-bold text-yellow-400">
                    {vouchers.filter(v => v.status === "Pending").length}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Disbursed</p>
                  <p className="text-2xl font-bold text-blue-400">
                    {vouchers.filter(v => v.status === "Disbursed").length}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vouchers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredVouchers.map((voucher) => {
            const StatusIcon = getStatusIcon(voucher.status);
            return (
              <Card key={voucher.id} className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <StatusIcon className="w-8 h-8 text-emerald-400" />
                      <div>
                        <CardTitle className="text-white">{voucher.employeeName}</CardTitle>
                        <p className="text-gray-400 text-sm">{voucher.id}</p>
                      </div>
                    </div>
                    <Badge className={`${getStatusColor(voucher.status)} text-white border-none`}>
                      {voucher.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                    <div className="text-center">
                      <p className="text-emerald-400 text-sm">Amount Requested</p>
                      <p className="text-3xl font-bold text-white">
                        {voucher.amount.toLocaleString()} {voucher.currency}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Purpose</p>
                      <p className="text-white">{voucher.purpose}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Request Date</p>
                      <p className="text-white">{voucher.requestDate}</p>
                    </div>
                  </div>

                  {voucher.approvalDate && (
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Approval Date</p>
                        <p className="text-white">{voucher.approvalDate}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Approved By</p>
                        <p className="text-white">{voucher.approvedBy}</p>
                      </div>
                    </div>
                  )}

                  {voucher.disbursementDate && (
                    <div className="text-sm">
                      <p className="text-gray-400">Disbursement Date</p>
                      <p className="text-white">{voucher.disbursementDate}</p>
                    </div>
                  )}

                  {voucher.repaymentPlan && (
                    <div className="bg-gray-700/30 rounded-lg p-3">
                      <p className="text-gray-400 text-sm">Repayment Plan</p>
                      <p className="text-white text-sm">{voucher.repaymentPlan}</p>
                    </div>
                  )}

                  {voucher.status === "Rejected" && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                      <p className="text-red-400 text-sm">Rejection Reason</p>
                      <p className="text-white text-sm">{voucher.rejectionReason}</p>
                      <p className="text-gray-400 text-xs">Rejected by: {voucher.rejectedBy}</p>
                    </div>
                  )}

                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1 text-gray-300 border-gray-600">
                      <Eye className="w-3 h-3 mr-2" />
                      View Details
                    </Button>
                    {voucher.status === "Pending" && (
                      <>
                        <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                          <CheckCircle className="w-3 h-3 mr-2" />
                          Approve
                        </Button>
                        <Button size="sm" className="flex-1 bg-red-600 hover:bg-red-700">
                          <XCircle className="w-3 h-3 mr-2" />
                          Reject
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdvanceVoucher;
