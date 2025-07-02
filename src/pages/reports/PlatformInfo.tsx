import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Plus, FileSpreadsheet, Edit } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PlatformInfo = () => {
  const navigate = useNavigate();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  // Sample platform data based on the screenshot
  const platformData = [
    {
      sl: 1,
      clientName: "Saudi Electricity Company",
      code: "SCECO",
      vendorNumber: "5000968",
      link: "https://www.se.com.sa/Vendor/Login.aspx",
      platformType: "Finance Portal",
      userName: "5000968001",
      password: "••••••••",
      registeredEmail1: "No",
      registeredMobile: "966561904595",
      authorizedEmployee: "shebani",
      expiryDate: "0000-00-00",
      status: "Active",
    },
    {
      sl: 2,
      clientName: "Saudi Electricity Company",
      code: "SCECO",
      vendorNumber: "5000969",
      link: "https://srm.se.com.sa:8011/ui/portal",
      platformType: "SEC Portal",
      userName: "VD0201 21",
      password: "••••••••",
      registeredEmail1: "info@nassaco.com",
      registeredMobile: "NO",
      authorizedEmployee: "shebani / Yusef",
      expiryDate: "0000-00-00",
      status: "Active",
    },
    {
      sl: 3,
      clientName: "Aramco",
      code: "Aramco",
      vendorNumber: "10025893",
      link: "https://service.ariba.com/Sourcing.aw?10952007/aw2/avr+&Awsessionid=Ohv0o9GSddred+1#0",
      platformType: "sap",
      userName: "Under update",
      password: "••••••••",
      registeredEmail1: "info@nassaco.net",
      registeredMobile: "NO",
      authorizedEmployee: "",
      expiryDate: "0000-00-00",
      status: "Active",
    },
    {
      sl: 4,
      clientName: "The General Corporation for Saline Water Conversion",
      code: "SWCC",
      vendorNumber: "1002293",
      link: "https://www.swcc.gov.sa/ar/Pages/Index/Supplier/System",
      platformType: "sap",
      userName: "talib@nassaco.com",
      password: "••••••••",
      registeredEmail1: "talib@nassaco.com",
      registeredMobile: "NO",
      authorizedEmployee: "na99",
      expiryDate: "2025-09-04",
      status: "Active",
    },
    {
      sl: 5,
      clientName: "Saudi Arabian Mining Company",
      code: "Maaden",
      vendorNumber: "14235",
      link: "https://ektor.login.em2.oraclecloud.com/",
      platformType: "",
      userName: "talib@nassaco.com",
      password: "••••••••",
      registeredEmail1: "talib@nassaco.com",
      registeredMobile: "NO",
      authorizedEmployee: "",
      expiryDate: "0000-00-00",
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/reports')}
              className="text-gray-300 border-gray-600 hover:bg-gray-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-4xl font-extrabold text-white">
                Platform Information
              </h1>
            </div>
          </div>
          <div className="flex gap-3">
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  New Platform
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-gray-800 border-gray-700">
                <DialogHeader>
                  <DialogTitle className="text-white">Platform Information</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="platform-id" className="text-gray-300">Platform # *</Label>
                    <Input id="platform-id" placeholder="40" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="client-name" className="text-gray-300">Client Name *</Label>
                    <Input id="client-name" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="code" className="text-gray-300">CODE *</Label>
                    <Input id="code" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vendor-number" className="text-gray-300">Vendor # *</Label>
                    <Input id="vendor-number" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="link" className="text-gray-300">Link *</Label>
                    <Input id="link" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="platform-type" className="text-gray-300">Platform Type *</Label>
                    <Input id="platform-type" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user-name" className="text-gray-300">User Name *</Label>
                    <Input id="user-name" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-300">Password *</Label>
                    <Input id="password" type="password" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registered-email1" className="text-gray-300">Registered Email-1 *</Label>
                    <Input id="registered-email1" type="email" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registered-email2" className="text-gray-300">Registered Email-2 *</Label>
                    <Input id="registered-email2" type="email" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registered-mobile" className="text-gray-300">Registered Mobile *</Label>
                    <Input id="registered-mobile" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="authorized-employee" className="text-gray-300">Authorized Employee *</Label>
                    <Input id="authorized-employee" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="attach-document" className="text-gray-300">Attach document *</Label>
                    <Input id="attach-document" type="file" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expiry-date" className="text-gray-300">Expiry Date *</Label>
                    <Input id="expiry-date" type="date" placeholder="mm/dd/yyyy" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                </div>
                <div className="flex justify-center pt-4">
                  <Button className="bg-gray-600 hover:bg-gray-700 text-white px-8">
                    Save
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button variant="outline" className="text-gray-300 border-gray-600 hover:bg-gray-700">
              <FileSpreadsheet className="w-4 h-4 mr-2" />
              Export to Excel
            </Button>
          </div>
        </div>

        {/* Platform Information Table */}
        <Card className="bg-white border-gray-300">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-teal-600 border-teal-600">
                    <TableHead className="text-white font-semibold text-center">SL#</TableHead>
                    <TableHead className="text-white font-semibold text-center">Client Name</TableHead>
                    <TableHead className="text-white font-semibold text-center">CODE</TableHead>
                    <TableHead className="text-white font-semibold text-center">Vendor #</TableHead>
                    <TableHead className="text-white font-semibold text-center">Link</TableHead>
                    <TableHead className="text-white font-semibold text-center">Platform Type</TableHead>
                    <TableHead className="text-white font-semibold text-center">User Name</TableHead>
                    <TableHead className="text-white font-semibold text-center">Password</TableHead>
                    <TableHead className="text-white font-semibold text-center">Registered Email-1</TableHead>
                    <TableHead className="text-white font-semibold text-center">Registered Mobile</TableHead>
                    <TableHead className="text-white font-semibold text-center">Authorized Employee</TableHead>
                    <TableHead className="text-white font-semibold text-center">Expiry Date</TableHead>
                    <TableHead className="text-white font-semibold text-center">Status</TableHead>
                    <TableHead className="text-white font-semibold text-center">Update</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {platformData.map((platform, index) => (
                    <TableRow key={platform.sl} className={`border-gray-300 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                      <TableCell className="text-center text-gray-900">{platform.sl}</TableCell>
                      <TableCell className="text-gray-900">{platform.clientName}</TableCell>
                      <TableCell className="text-center text-gray-900">{platform.code}</TableCell>
                      <TableCell className="text-center text-gray-900">{platform.vendorNumber}</TableCell>
                      <TableCell className="text-center">
                        <a 
                          href={platform.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline text-sm"
                        >
                          {platform.link.length > 40 ? platform.link.substring(0, 40) + '...' : platform.link}
                        </a>
                      </TableCell>
                      <TableCell className="text-center text-gray-900">{platform.platformType}</TableCell>
                      <TableCell className="text-center text-gray-900">{platform.userName}</TableCell>
                      <TableCell className="text-center text-gray-900">{platform.password}</TableCell>
                      <TableCell className="text-center text-gray-900">{platform.registeredEmail1}</TableCell>
                      <TableCell className="text-center text-gray-900">{platform.registeredMobile}</TableCell>
                      <TableCell className="text-center text-gray-900">{platform.authorizedEmployee}</TableCell>
                      <TableCell className="text-center text-gray-900">{platform.expiryDate}</TableCell>
                      <TableCell className="text-center">
                        <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                          {platform.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="bg-orange-500 hover:bg-orange-600 text-white border-orange-500"
                        >
                          <Edit className="w-3 h-3 mr-1" />
                          Update
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

export default PlatformInfo;