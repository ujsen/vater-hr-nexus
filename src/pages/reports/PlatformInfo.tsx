import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
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

  // Sample platform data based on the screenshot
  const platformData = [
    {
      id: 1,
      name: "Vater Marketing Company",
      location: "Kuwait",
      website: "https://vater.com.kw",
      email: "info@vater.com.kw",
      category: "Marketing",
      status: "Active",
      established: "2020",
    },
    {
      id: 2,
      name: "Vater Marketing Company",
      location: "Lebanon",
      website: "https://vater.com.lb",
      email: "info@vater.com.lb", 
      category: "Marketing",
      status: "Active",
      established: "2021",
    },
    {
      id: 3,
      name: "Algrave",
      location: "Algeria",
      website: "https://algrave.com",
      email: "contact@algrave.com",
      category: "Technology",
      status: "Active", 
      established: "2019",
    },
    {
      id: 4,
      name: "The General Corporation for Sahara Water Company",
      location: "SAHCO",
      website: "https://sahco.com",
      email: "info@sahco.com",
      category: "Water Supply",
      status: "Active",
      established: "2018",
    },
    {
      id: 5,
      name: "Vater Arabian Trading Company",
      location: "Lebanon",
      website: "https://vater-arabia.com",
      email: "info@vater-arabia.com",
      category: "Trading",
      status: "Active",
      established: "2020",
    },
    {
      id: 6,
      name: "National Shipping Company",
      location: "Kuwait",
      website: "https://nationalshipping.com.kw",
      email: "shipping@nationalshipping.com.kw",
      category: "Logistics",
      status: "Active",
      established: "2017",
    },
    {
      id: 7,
      name: "Investment Limited Company",
      location: "INVESTMENT",
      website: "https://investment-limited.com",
      email: "invest@investment-limited.com",
      category: "Finance",
      status: "Active",
      established: "2016",
    },
    {
      id: 8,
      name: "Vater International Investment Company",
      location: "Algeria",
      website: "https://vater-international.com",
      email: "info@vater-international.com",
      category: "Investment",
      status: "Active",
      established: "2019",
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
              Back to Reports
            </Button>
            <div>
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Platform Information
              </h1>
              <p className="text-gray-300 text-lg mt-2">
                System Information & Company Directory
              </p>
            </div>
          </div>
        </div>

        {/* Platform Information Table */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-xl">Company Platforms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-600">
                    <TableHead className="text-gray-300 font-semibold">ID</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Company Name</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Location</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Website</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Email</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Category</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Status</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Established</TableHead>
                    <TableHead className="text-gray-300 font-semibold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {platformData.map((platform) => (
                    <TableRow key={platform.id} className="border-gray-600 hover:bg-gray-700/50">
                      <TableCell className="text-gray-200">{platform.id}</TableCell>
                      <TableCell className="text-gray-200 font-medium">{platform.name}</TableCell>
                      <TableCell className="text-gray-200">{platform.location}</TableCell>
                      <TableCell className="text-gray-200">
                        <a 
                          href={platform.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1"
                        >
                          {platform.website}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </TableCell>
                      <TableCell className="text-gray-200">{platform.email}</TableCell>
                      <TableCell className="text-gray-200">{platform.category}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-900/50 text-green-400 border border-green-700">
                          {platform.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-gray-200">{platform.established}</TableCell>
                      <TableCell>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-gray-300 border-gray-600 hover:bg-gray-700"
                        >
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="text-center">
              <p className="text-gray-400 text-sm">Total Platforms</p>
              <p className="text-3xl font-bold text-cyan-400">{platformData.length}</p>
            </div>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="text-center">
              <p className="text-gray-400 text-sm">Active Companies</p>
              <p className="text-3xl font-bold text-green-400">{platformData.filter(p => p.status === 'Active').length}</p>
            </div>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="text-center">
              <p className="text-gray-400 text-sm">Countries</p>
              <p className="text-3xl font-bold text-blue-400">{new Set(platformData.map(p => p.location)).size}</p>
            </div>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="text-center">
              <p className="text-gray-400 text-sm">Avg. Age (Years)</p>
              <p className="text-3xl font-bold text-purple-400">
                {Math.round(platformData.reduce((acc, p) => acc + (2024 - parseInt(p.established)), 0) / platformData.length)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformInfo;