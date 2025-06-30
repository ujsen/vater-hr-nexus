
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft,
  Store as StoreIcon,
  Package,
  BarChart3,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  Boxes
} from "lucide-react";

const Store = () => {
  const navigate = useNavigate();

  const inventory = [
    {
      id: "SKU-001",
      name: "Safety Helmets",
      category: "Safety Equipment",
      currentStock: 45,
      minLevel: 20,
      maxLevel: 100,
      unitPrice: 25.00,
      lastUpdated: "2024-01-15"
    },
    {
      id: "SKU-002", 
      name: "Steel Pipes (6m)",
      category: "Construction Materials",
      currentStock: 8,
      minLevel: 15,
      maxLevel: 50,
      unitPrice: 120.00,
      lastUpdated: "2024-01-14"
    },
    {
      id: "SKU-003",
      name: "Office Chairs",
      category: "Furniture",
      currentStock: 25,
      minLevel: 10,
      maxLevel: 40,
      unitPrice: 150.00,
      lastUpdated: "2024-01-13"
    },
    {
      id: "SKU-004",
      name: "Hydraulic Oil (20L)",
      category: "Maintenance",
      currentStock: 12,
      minLevel: 8,
      maxLevel: 30,
      unitPrice: 85.00,
      lastUpdated: "2024-01-12"
    }
  ];

  const getStockStatus = (current: number, min: number) => {
    if (current <= min) return { status: 'Low Stock', color: 'text-red-400', bgColor: 'bg-red-600' };
    if (current <= min * 1.5) return { status: 'Medium', color: 'text-yellow-400', bgColor: 'bg-yellow-600' };
    return { status: 'Good', color: 'text-green-400', bgColor: 'bg-green-600' };
  };

  const totalValue = inventory.reduce((sum, item) => sum + (item.currentStock * item.unitPrice), 0);
  const lowStockItems = inventory.filter(item => item.currentStock <= item.minLevel).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="text-gray-300 border-gray-600 hover:bg-gray-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Store Department
              </h1>
              <p className="text-gray-300 text-lg mt-2">
                Inventory Management & Stock Control
              </p>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Items</p>
                  <p className="text-2xl font-bold text-white">{inventory.length}</p>
                </div>
                <Package className="w-8 h-8 text-indigo-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Low Stock Items</p>
                  <p className="text-2xl font-bold text-red-400">{lowStockItems}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Stock Value</p>
                  <p className="text-2xl font-bold text-green-400">${totalValue.toLocaleString()}</p>
                </div>
                <BarChart3 className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Categories</p>
                  <p className="text-2xl font-bold text-white">
                    {new Set(inventory.map(item => item.category)).size}
                  </p>
                </div>
                <Boxes className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Inventory Table */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Inventory Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {inventory.map((item) => {
                const stockInfo = getStockStatus(item.currentStock, item.minLevel);
                const stockPercentage = (item.currentStock / item.maxLevel) * 100;
                
                return (
                  <div key={item.id} className="p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-white font-medium">{item.name}</h3>
                        <p className="text-gray-400 text-sm">{item.id} • {item.category}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 rounded text-xs ${stockInfo.bgColor} text-white`}>
                          {stockInfo.status}
                        </span>
                        <span className="text-white font-medium">${item.unitPrice.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">Stock Level</span>
                          <span className="text-white">
                            {item.currentStock} / {item.maxLevel} units
                          </span>
                        </div>
                        <div className="w-full bg-gray-600 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-300 ${
                              stockPercentage <= (item.minLevel / item.maxLevel) * 100 
                                ? 'bg-red-500' 
                                : stockPercentage <= 50 
                                ? 'bg-yellow-500' 
                                : 'bg-green-500'
                            }`}
                            style={{ width: `${Math.min(stockPercentage, 100)}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-400">
                          Last Updated: {item.lastUpdated}
                        </div>
                        <div className="text-sm text-white">
                          Value: ${(item.currentStock * item.unitPrice).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Category Breakdown */}
        <div className="mt-8">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Stock by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {Array.from(new Set(inventory.map(item => item.category))).map(category => {
                  const categoryItems = inventory.filter(item => item.category === category);
                  const categoryValue = categoryItems.reduce((sum, item) => sum + (item.currentStock * item.unitPrice), 0);
                  
                  return (
                    <div key={category} className="p-4 bg-gray-700/30 rounded-lg">
                      <h4 className="text-white font-medium mb-2">{category}</h4>
                      <p className="text-gray-400 text-sm">{categoryItems.length} items</p>
                      <p className="text-green-400 font-bold">${categoryValue.toLocaleString()}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Store;
