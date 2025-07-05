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

const GuaranteeReport = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const guaranteeReports = [
    {
      sl: 1,
      voucherNo: 2220,
      badgeNo: "NSH1669",
      empName: "MAHIUDDIN UDDIN",
      date: "2025-07-03",
      amount: 4000,
      type: "GUARANTEE",
      guaranteeBadgeNo: "NSH1668",
      guaranteeName: "EMON MIA"
    },
    {
      sl: 2,
      voucherNo: 2210,
      badgeNo: "NSHH1974",
      empName: "MOHAMMED KHADAR MOHIUDDIN",
      date: "2025-06-30",
      amount: 4500,
      type: "GUARANTEE",
      guaranteeBadgeNo: "NSTG1788",
      guaranteeName: "HUSSAIN PATEL FAIZUDDIN PATEL"
    },
    {
      sl: 3,
      voucherNo: 2181,
      badgeNo: "NSH1350",
      empName: "Vivek Singh Jhuman Singh",
      date: "2025-06-18",
      amount: 4000,
      type: "GUARANTEE",
      guaranteeBadgeNo: "NSH1652",
      guaranteeName: "MOHAMMAD ANSAR MOHAMMAD ZUBAIR"
    },
    {
      sl: 4,
      voucherNo: 2155,
      badgeNo: "NSHH1132",
      empName: "Mohammad Yusuf Najamul Hak",
      date: "2025-05-31",
      amount: 7000,
      type: "GUARANTEE",
      guaranteeBadgeNo: "NSHH2008",
      guaranteeName: "MD SHADAB GAUHAR"
    },
    {
      sl: 5,
      voucherNo: 2153,
      badgeNo: "NSHH1150",
      empName: "MD Isfak Naimul Haque",
      date: "2025-05-29",
      amount: 5000,
      type: "GUARANTEE",
      guaranteeBadgeNo: "NSHH2008",
      guaranteeName: "MD SHADAB GAUHAR"
    },
    {
      sl: 6,
      voucherNo: 2149,
      badgeNo: "NSHT1585",
      empName: "NEPAL DARJI",
      date: "2025-05-26",
      amount: 2600,
      type: "GUARANTEE",
      guaranteeBadgeNo: "NSH1485",
      guaranteeName: "Purna Bahadur B K"
    },
    {
      sl: 7,
      voucherNo: 2150,
      badgeNo: "NSH1618",
      empName: "Birendra Karki",
      date: "2025-05-26",
      amount: 2600,
      type: "GUARANTEE",
      guaranteeBadgeNo: "NSH1485",
      guaranteeName: "Purna Bahadur B K"
    }
  ];

  const filteredReports = guaranteeReports.filter(report => 
    report.empName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.badgeNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.guaranteeName.toLowerCase().includes(searchTerm.toLowerCase())
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
              <h1 className="text-3xl font-bold text-card-foreground">GUARANTEE VOUCHER List</h1>
              <p className="text-muted-foreground">Guarantee voucher reports</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search guarantee vouchers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Guarantee Report Table */}
        <Card className="bg-card/50 border-border backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-card-foreground">GUARANTEE VOUCHER List</CardTitle>
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
                    <TableHead className="text-center font-semibold text-card-foreground">Guarantee Badge #</TableHead>
                    <TableHead className="text-center font-semibold text-card-foreground">Guarantee Name</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredReports.map((report) => (
                    <TableRow key={report.sl} className="hover:bg-muted/50">
                      <TableCell className="text-center text-card-foreground">{report.sl}</TableCell>
                      <TableCell className="text-center text-card-foreground">{report.voucherNo}</TableCell>
                      <TableCell className="text-center text-card-foreground">{report.badgeNo}</TableCell>
                      <TableCell className="text-center text-card-foreground">{report.empName}</TableCell>
                      <TableCell className="text-center text-card-foreground">{report.date}</TableCell>
                      <TableCell className="text-center text-card-foreground">{report.amount}</TableCell>
                      <TableCell className="text-center text-card-foreground">{report.type}</TableCell>
                      <TableCell className="text-center text-card-foreground">{report.guaranteeBadgeNo}</TableCell>
                      <TableCell className="text-center text-card-foreground">{report.guaranteeName}</TableCell>
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

export default GuaranteeReport;