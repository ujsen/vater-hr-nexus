
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { 
  Store, 
  Users, 
  FileText, 
  Clock, 
  DollarSign, 
  ShoppingCart,
  UserCheck,
  Briefcase,
  Shield,
  BarChart3,
  Calculator,
  Wrench,
  LogOut,
  User,
  Truck,
  Building2,
  TrendingUp,
  History,
  ShoppingBag,
  PieChart,
  Banknote
} from "lucide-react";

const Index = () => {
  const { user, signOut } = useAuth();

  const modules = [
    {
      id: 'logistics',
      title: 'Logistic Service',
      icon: Truck,
      color: 'from-blue-500 to-blue-700',
      description: 'Transportation & Logistics',
      path: '/logistics'
    },
    {
      id: 'hr',
      title: 'HR Department',
      icon: UserCheck,
      color: 'from-purple-500 to-purple-700',
      description: 'Human Resource Management',
      path: '/hr'
    },
    {
      id: 'projects',
      title: 'Project Management',
      icon: Briefcase,
      color: 'from-orange-500 to-orange-700',
      description: 'Project Planning & Tracking',
      path: '/projects'
    },
    {
      id: 'tasks',
      title: 'Task Manager',
      icon: Clock,
      color: 'from-teal-500 to-teal-700',
      description: 'Task Assignment & Tracking',
      path: '/tasks'
    },
    {
      id: 'purchase',
      title: 'Purchases Department',
      icon: ShoppingBag,
      color: 'from-green-500 to-green-700',
      description: 'Procurement & Purchasing',
      path: '/purchase'
    },
    {
      id: 'store',
      title: 'Store Department',
      icon: Store,
      color: 'from-indigo-500 to-indigo-700',
      description: 'Inventory Management',
      path: '/store'
    },
    {
      id: 'sales',
      title: 'Sales Department',
      icon: TrendingUp,
      color: 'from-red-500 to-red-700',
      description: 'Sales & Customer Management',
      path: '/sales'
    },
    {
      id: 'reports',
      title: 'Report',
      icon: BarChart3,
      color: 'from-yellow-500 to-yellow-700',
      description: 'Analytics & Reporting',
      path: '/reports'
    }
  ];

  const reportModules = [
    {
      id: 'platform-info',
      title: 'Platform Information',
      icon: Shield,
      color: 'from-cyan-500 to-cyan-700',
      description: 'System Information',
      path: '/reports/platform-info'
    },
    {
      id: 'advance-voucher',
      title: 'Advance Voucher',
      icon: Banknote,
      color: 'from-emerald-500 to-emerald-700',
      description: 'Employee Advances',
      path: '/reports/advance-voucher'
    },
    {
      id: 'summary-report',
      title: 'Summary Report',
      icon: PieChart,
      color: 'from-violet-500 to-violet-700',
      description: 'Executive Summary',
      path: '/reports/summary'
    },
    {
      id: 'employee-history',
      title: 'Employee History',
      icon: History,
      color: 'from-blue-600 to-blue-800',
      description: 'Staff Activity Records',
      path: '/reports/employee-history'
    },
    {
      id: 'depreciation-report',
      title: 'Depreciation Report',
      icon: TrendingUp,
      color: 'from-red-600 to-red-800',
      description: 'Asset Depreciation',
      path: '/reports/depreciation'
    },
    {
      id: 'daily-report',
      title: 'Daily Report',
      icon: FileText,
      color: 'from-gray-500 to-gray-700',
      description: 'Daily Operations Summary',
      path: '/reports/daily'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="relative mb-12">
          {/* Centered title block */}
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-text drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              VaterErp
            </h1>
            <p className="text-gray-300 text-lg">
              Enterprise Resource Planning System
            </p>
          </div>

          {/* User info - absolutely positioned top right */}
          <div className="absolute top-0 right-0 flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-red-300">
              <User className="w-5 h-5" />
              {user?.email}
            </div>
            <Button 
              variant="outline" 
              onClick={signOut}
              className="text-gray-300 border-gray-600 hover:bg-gray-700"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Main Modules Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Main Modules</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {modules.map((module) => {
              const IconComponent = module.icon;
              return (
                <Link key={module.id} to={module.path}>
                  <Card className="group relative overflow-hidden bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm">
                    <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                    <CardContent className="relative p-6 text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${module.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                        {module.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Reports Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Reports & Analytics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {reportModules.map((module) => {
              const IconComponent = module.icon;
              return (
                <Link key={module.id} to={module.path}>
                  <Card className="group relative overflow-hidden bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm">
                    <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                    <CardContent className="relative p-5 text-center">
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br ${module.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-md font-semibold text-white mb-1 group-hover:text-gray-100 transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors">
                        {module.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Quick Stats Footer */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">System Status</p>
                <p className="text-2xl font-bold text-green-400">Online</p>
              </div>
              <Users className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Modules</p>
                <p className="text-2xl font-bold text-white">{modules.length}</p>
              </div>
              <Briefcase className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Reports Available</p>
                <p className="text-2xl font-bold text-white">{reportModules.length}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-orange-400" />
            </div>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Last Login</p>
                <p className="text-2xl font-bold text-white">Now</p>
              </div>
              <Clock className="w-8 h-8 text-green-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
