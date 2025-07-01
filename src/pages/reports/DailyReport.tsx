
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Users, DollarSign, Package, TrendingUp, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";

const DailyReport = () => {
  const navigate = useNavigate();

  const todayStats = {
    date: "June 25, 2024",
    revenue: 45680,
    orders: 23,
    newCustomers: 5,
    activeEmployees: 189,
    completedTasks: 34,
    pendingTasks: 12
  };

  const departmentActivity = [
    { name: "Sales", tasks: 8, completed: 6, pending: 2, efficiency: 75 },
    { name: "Engineering", tasks: 12, completed: 9, pending: 3, efficiency: 75 },
    { name: "HR", tasks: 6, completed: 5, pending: 1, efficiency: 83 },
    { name: "Finance", tasks: 4, completed: 4, pending: 0, efficiency: 100 },
    { name: "Operations", tasks: 8, completed: 6, pending: 2, efficiency: 75 }
  ];

  const topPerformers = [
    { name: "Ahmed Al-Mansouri", department: "Engineering", tasksCompleted: 5, efficiency: 95 },
    { name: "Sara Al-Zahra", department: "Sales", tasksCompleted: 4, efficiency: 92 },
    { name: "Mohammed Hassan", department: "HR", tasksCompleted: 3, efficiency: 89 }
  ];

  const alerts = [
    { type: "warning", message: "Server maintenance scheduled for tonight", priority: "Medium" },
    { type: "info", message: "New employee orientation at 2 PM", priority: "Low" },
    { type: "error", message: "Payment gateway experiencing delays", priority: "High" }
  ];

  const getEfficiencyColor = (efficiency: number) => {
    if (efficiency >= 90) return "text-green-400";
    if (efficiency >= 75) return "text-yellow-400";
    return "text-red-400";
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case "error": return "bg-red-500/10 border-red-500/20 text-red-400";
      case "warning": return "bg-yellow-500/10 border-yellow-500/20 text-yellow-400";
      case "info": return "bg-blue-500/10 border-blue-500/20 text-blue-400";
      default: return "bg-gray-500/10 border-gray-500/20 text-gray-400";
    }
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
                <h1 className="text-3xl font-bold text-white">Daily Operations Report</h1>
                <p className="text-gray-400">Today's performance summary - {todayStats.date}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Today's Revenue</p>
                    <p className="text-2xl font-bold text-green-400">SAR {todayStats.revenue.toLocaleString()}</p>
                    <p className="text-xs text-green-400">+12% from yesterday</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Active Employees</p>
                    <p className="text-2xl font-bold text-blue-400">{todayStats.activeEmployees}</p>
                    <p className="text-xs text-blue-400">76% attendance</p>
                  </div>
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Completed Tasks</p>
                    <p className="text-2xl font-bold text-purple-400">{todayStats.completedTasks}</p>
                    <p className="text-xs text-purple-400">{todayStats.pendingTasks} pending</p>
                  </div>
                  <Package className="w-8 h-8 text-purple-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">New Orders</p>
                    <p className="text-2xl font-bold text-orange-400">{todayStats.orders}</p>
                    <p className="text-xs text-orange-400">{todayStats.newCustomers} new customers</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-orange-400" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Department Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departmentActivity.map((dept, index) => (
                    <div key={index} className="p-4 bg-gray-700/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-medium">{dept.name}</h3>
                        <span className={`font-bold ${getEfficiencyColor(dept.efficiency)}`}>
                          {dept.efficiency}%
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400">Total Tasks</p>
                          <p className="text-white">{dept.tasks}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Completed</p>
                          <p className="text-green-400">{dept.completed}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Pending</p>
                          <p className="text-yellow-400">{dept.pending}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Top Performers Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformers.map((performer, index) => (
                    <div key={index} className="p-4 bg-gray-700/30 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-medium">{performer.name}</h3>
                          <p className="text-gray-400 text-sm">{performer.department}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-green-400 font-bold">{performer.tasksCompleted} tasks</p>
                          <p className="text-gray-300 text-sm">{performer.efficiency}% efficiency</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-yellow-400" />
                Today's Alerts & Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {alerts.map((alert, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${getAlertColor(alert.type)}`}>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className={`${alert.priority === 'High' ? 'border-red-500 text-red-400' : 
                        alert.priority === 'Medium' ? 'border-yellow-500 text-yellow-400' : 
                        'border-blue-500 text-blue-400'}`}>
                        {alert.priority}
                      </Badge>
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <p className="text-sm">{alert.message}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DailyReport;
