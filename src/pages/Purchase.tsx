
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft,
  ShoppingBag,
  Package,
  Truck,
  DollarSign,
  FileText,
  CheckCircle2,
  Clock,
  AlertCircle
} from "lucide-react";

const Purchase = () => {
  const navigate = useNavigate();

  const purchaseOrders = [
    {
      id: "PO-2024-001",
      vendor: "Al-Rawdah Supplies",
      items: "Office Equipment",
      amount: 15750,
      status: "Delivered",
      orderDate: "2024-01-10",
      deliveryDate: "2024-01-15"
    },
    {
      id: "PO-2024-002",
      vendor: "Gulf Industrial Co.",
      items: "Safety Equipment",
      amount: 8900,
      status: "In Transit",
      orderDate: "2024-01-12",
      deliveryDate: "2024-01-18"
    },
    {
      id: "PO-2024-003",
      vendor: "Tech Solutions Ltd",
      items: "Computer Hardware",
      amount: 24500,
      status: "Pending",
      orderDate: "2024-01-14",
      deliveryDate: "2024-01-20"
    },
    {
      id: "PO-2024-004",
      vendor: "Building Materials Co",
      items: "Construction Supplies",
      amount: 45200,
      status: "Approved",
      orderDate: "2024-01-15",
      deliveryDate: "2024-01-22"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-600';
      case 'In Transit': return 'bg-blue-600';
      case 'Approved': return 'bg-purple-600';
      case 'Pending': return 'bg-yellow-600';
      case 'Cancelled': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

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
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
                Purchases Department
              </h1>
              <p className="text-gray-300 text-lg mt-2">
                Procurement & Vendor Management
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
                  <p className="text-gray-400 text-sm">Total Orders</p>
                  <p className="text-2xl font-bold text-white">{purchaseOrders.length}</p>
                </div>
                <ShoppingBag className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Delivered</p>
                  <p className="text-2xl font-bold text-green-400">
                    {purchaseOrders.filter(po => po.status === 'Delivered').length}
                  </p>
                </div>
                <CheckCircle2 className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">In Transit</p>
                  <p className="text-2xl font-bold text-blue-400">
                    {purchaseOrders.filter(po => po.status === 'In Transit').length}
                  </p>
                </div>
                <Truck className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Value</p>
                  <p className="text-2xl font-bold text-yellow-400">
                    ${purchaseOrders.reduce((sum, po) => sum + po.amount, 0).toLocaleString()}
                  </p>
                </div>
                <DollarSign className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Purchase Orders Table */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Purchase Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {purchaseOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-1">{order.id}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-400">
                      <div>Vendor: {order.vendor}</div>
                      <div>Items: {order.items}</div>
                      <div>Ordered: {order.orderDate}</div>
                      <div>Due: {order.deliveryDate}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-white font-medium">${order.amount.toLocaleString()}</p>
                    </div>
                    <span className={`px-3 py-1 rounded text-white text-sm ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Vendor Summary */}
        <div className="mt-8">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Top Vendors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-700/30 rounded-lg">
                  <h4 className="text-white font-medium">Building Materials Co</h4>
                  <p className="text-gray-400 text-sm">5 orders this month</p>
                  <p className="text-green-400 font-bold">$127,500</p>
                </div>
                <div className="p-4 bg-gray-700/30 rounded-lg">
                  <h4 className="text-white font-medium">Gulf Industrial Co.</h4>
                  <p className="text-gray-400 text-sm">3 orders this month</p>
                  <p className="text-green-400 font-bold">$42,300</p>
                </div>
                <div className="p-4 bg-gray-700/30 rounded-lg">
                  <h4 className="text-white font-medium">Tech Solutions Ltd</h4>
                  <p className="text-gray-400 text-sm">2 orders this month</p>
                  <p className="text-green-400 font-bold">$38,750</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
