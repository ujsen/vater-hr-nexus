
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Users,
  Target,
  Calendar
} from "lucide-react";

const Sales = () => {
  const navigate = useNavigate();

  const recentSales = [
    {
      id: "INV-2024-001",
      customer: "Abdullah Trading Co.",
      amount: 15750,
      date: "2024-01-15",
      status: "Paid"
    },
    {
      id: "INV-2024-002",
      customer: "Al-Noor Industries",
      amount: 8900,
      date: "2024-01-14",
      status: "Pending"
    },
    {
      id: "INV-2024-003",
      customer: "Saudi Construction Ltd.",
      amount: 25600,
      date: "2024-01-13",
      status: "Paid"
    },
    {
      id: "INV-2024-004",
      customer: "Riyadh Electronics",
      amount: 4300,
      date: "2024-01-12",
      status: "Overdue"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'bg-green-600';
      case 'Pending': return 'bg-yellow-600';
      case 'Overdue': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-app p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-secondary animate-fade-in">
                Sales Department
              </h1>
              <p className="text-app-text-secondary text-lg mt-2">
                Sales Management & Customer Relations
              </p>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Revenue</p>
                  <p className="text-2xl font-bold text-app-green">$148K</p>
                  <p className="text-xs text-app-green">+12% from last month</p>
                </div>
                <DollarSign className="w-8 h-8 text-app-green" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Orders</p>
                  <p className="text-2xl font-bold text-app-blue">342</p>
                  <p className="text-xs text-app-blue">+8% from last month</p>
                </div>
                <ShoppingCart className="w-8 h-8 text-app-blue" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Active Customers</p>
                  <p className="text-2xl font-bold text-app-teal">89</p>
                  <p className="text-xs text-app-teal">+5% from last month</p>
                </div>
                <Users className="w-8 h-8 text-app-teal" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Conversion Rate</p>
                  <p className="text-2xl font-bold text-app-orange">68%</p>
                  <p className="text-xs text-app-orange">+3% from last month</p>
                </div>
                <Target className="w-8 h-8 text-app-orange" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sales Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Sales */}
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-app-green" />
                Recent Sales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentSales.map((sale) => (
                  <div key={sale.id} className="flex items-center justify-between p-3 bg-muted/30 rounded hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <p className="text-card-foreground font-medium">{sale.id}</p>
                      <p className="text-muted-foreground text-sm">{sale.customer}</p>
                      <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        {sale.date}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-card-foreground font-bold">${sale.amount.toLocaleString()}</p>
                      <span className={`px-2 py-1 rounded text-xs text-white ${getStatusColor(sale.status)}`}>
                        {sale.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sales Performance */}
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center">
                <Target className="w-5 h-5 mr-2 text-app-green" />
                Monthly Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Sales Target</span>
                    <span className="text-card-foreground font-bold">$200K</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-app-green h-2 rounded-full" style={{ width: '74%' }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">74% achieved ($148K)</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Customer Acquisition</span>
                    <span className="text-card-foreground font-bold">25</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-app-blue h-2 rounded-full" style={{ width: '83%' }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">83% of monthly goal (30)</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Order Fulfillment</span>
                    <span className="text-card-foreground font-bold">96%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-app-teal h-2 rounded-full" style={{ width: '96%' }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Excellent performance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sales;
