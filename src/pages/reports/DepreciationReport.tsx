
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search, TrendingDown, Calculator, Package, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DepreciationReport = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const assets = [
    {
      id: "AST001",
      name: "Heavy Machinery - Excavator",
      category: "Equipment",
      purchaseDate: "2020-01-15",
      originalValue: 450000,
      currentValue: 315000,
      depreciationRate: 15,
      annualDepreciation: 67500,
      remainingLife: 3,
      method: "Straight Line"
    },
    {
      id: "AST002",
      name: "Office Building - Floor 3",
      category: "Real Estate",
      purchaseDate: "2018-06-01",
      originalValue: 2500000,
      currentValue: 2125000,
      depreciationRate: 3,
      annualDepreciation: 75000,
      remainingLife: 22,
      method: "Straight Line"
    },
    {
      id: "AST003",
      name: "IT Equipment - Servers",
      category: "Technology",
      purchaseDate: "2022-03-10",
      originalValue: 180000,
      currentValue: 126000,
      depreciationRate: 20,
      annualDepreciation: 36000,
      remainingLife: 2.5,
      method: "Declining Balance"
    },
    {
      id: "AST004",
      name: "Vehicle Fleet - Trucks",
      category: "Transportation",
      purchaseDate: "2021-08-20",
      originalValue: 320000,
      currentValue: 224000,
      depreciationRate: 12,
      annualDepreciation: 38400,
      remainingLife: 5,
      method: "Straight Line"
    }
  ];

  const depreciationTrend = [
    { year: '2020', value: 3250000 },
    { year: '2021', value: 3087500 },
    { year: '2022', value: 2890000 },
    { year: '2023', value: 2673500 },
    { year: '2024', value: 2456250 }
  ];

  const filteredAssets = assets.filter(asset => 
    asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalOriginalValue = assets.reduce((sum, asset) => sum + asset.originalValue, 0);
  const totalCurrentValue = assets.reduce((sum, asset) => sum + asset.currentValue, 0);
  const totalDepreciation = totalOriginalValue - totalCurrentValue;
  const totalAnnualDepreciation = assets.reduce((sum, asset) => sum + asset.annualDepreciation, 0);

  const getLifeColor = (life: number) => {
    if (life <= 1) return "bg-red-500";
    if (life <= 3) return "bg-yellow-500";
    return "bg-green-500";
  };

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
                <h1 className="text-3xl font-bold text-white">Asset Depreciation Report</h1>
                <p className="text-gray-400">Track asset values and depreciation schedules</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Assets</p>
                    <p className="text-2xl font-bold text-white">{assets.length}</p>
                  </div>
                  <Package className="w-8 h-8 text-red-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Current Value</p>
                    <p className="text-2xl font-bold text-green-400">SAR {(totalCurrentValue / 1000000).toFixed(1)}M</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Depreciation</p>
                    <p className="text-2xl font-bold text-red-400">SAR {(totalDepreciation / 1000000).toFixed(1)}M</p>
                  </div>
                  <TrendingDown className="w-8 h-8 text-red-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Annual Depreciation</p>
                    <p className="text-2xl font-bold text-orange-400">SAR {(totalAnnualDepreciation / 1000).toFixed(0)}K</p>
                  </div>
                  <Calculator className="w-8 h-8 text-orange-400" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2 bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Asset Value Depreciation Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={depreciationTrend}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="year" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#374151', 
                        border: '1px solid #6B7280', 
                        borderRadius: '8px',
                        color: '#F9FAFB'
                      }} 
                    />
                    <Line type="monotone" dataKey="value" stroke="#EF4444" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Depreciation Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-sm font-medium">High Risk Assets</p>
                  <p className="text-white text-lg">2</p>
                  <p className="text-gray-300 text-xs">Assets with <1 year life</p>
                </div>
                <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <p className="text-yellow-400 text-sm font-medium">Medium Risk</p>
                  <p className="text-white text-lg">1</p>
                  <p className="text-gray-300 text-xs">Assets with 1-3 year life</p>
                </div>
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400 text-sm font-medium">Low Risk</p>
                  <p className="text-white text-lg">1</p>
                  <p className="text-gray-300 text-xs">Assets with >3 year life</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Asset Depreciation Details</CardTitle>
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search assets..."
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
                    <TableHead className="text-gray-300">Asset ID</TableHead>
                    <TableHead className="text-gray-300">Asset Name</TableHead>
                    <TableHead className="text-gray-300">Category</TableHead>
                    <TableHead className="text-gray-300">Original Value</TableHead>
                    <TableHead className="text-gray-300">Current Value</TableHead>
                    <TableHead className="text-gray-300">Annual Depreciation</TableHead>
                    <TableHead className="text-gray-300">Remaining Life</TableHead>
                    <TableHead className="text-gray-300">Method</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAssets.map((asset) => (
                    <TableRow key={asset.id} className="border-gray-700 hover:bg-gray-700/30">
                      <TableCell className="text-blue-400 font-medium">{asset.id}</TableCell>
                      <TableCell className="text-white">{asset.name}</TableCell>
                      <TableCell className="text-gray-300">{asset.category}</TableCell>
                      <TableCell className="text-gray-300">SAR {asset.originalValue.toLocaleString()}</TableCell>
                      <TableCell className="text-green-400 font-medium">SAR {asset.currentValue.toLocaleString()}</TableCell>
                      <TableCell className="text-red-400">SAR {asset.annualDepreciation.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge className={`${getLifeColor(asset.remainingLife)} text-white border-none`}>
                          {asset.remainingLife} years
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-300">{asset.method}</TableCell>
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

export default DepreciationReport;
