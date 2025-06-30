
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
  User
} from "lucide-react";

const Index = () => {
  const { user, signOut } = useAuth();

  const modules = [
    {
      id: 'store',
      title: 'Store System',
      icon: Store,
      color: 'from-purple-500 to-purple-700',
      description: 'Inventory & Sales Management',
      path: '/store'
    },
    {
      id: 'payroll',
      title: 'Payroll System',
      icon: Calculator,
      color: 'from-blue-500 to-blue-700',
      description: 'Employee Payments & Benefits',
      path: '/payroll'
    },
    {
      id: 'hr',
      title: 'Human Resource',
      icon: UserCheck,
      color: 'from-green-500 to-green-700',
      description: 'Employee Management',
      path: '/hr'
    },
    {
      id: 'accounting',
      title: 'Accounting System',
      icon: BarChart3,
      color: 'from-orange-500 to-orange-700',
      description: 'Financial Management',
      path: '/accounting'
    },
    {
      id: 'projects',
      title: 'Projects Management',
      icon: Briefcase,
      color: 'from-pink-500 to-pink-700',
      description: 'Project Planning & Tracking',
      path: '/projects'
    },
    {
      id: 'pos',
      title: 'Point Of Sales',
      icon: ShoppingCart,
      color: 'from-indigo-500 to-indigo-700',
      description: 'Sales & Customer Management',
      path: '/pos'
    },
    {
      id: 'purchase',
      title: 'Purchase System',
      icon: FileText,
      color: 'from-teal-500 to-teal-700',
      description: 'Procurement & Vendors',
      path: '/purchase'
    },
    {
      id: 'workshop',
      title: 'Work Shop',
      icon: Wrench,
      color: 'from-red-500 to-red-700',
      description: 'Manufacturing & Production',
      path: '/workshop'
    },
    {
      id: 'security',
      title: 'Users Security System',
      icon: Shield,
      color: 'from-gray-600 to-gray-800',
      description: 'Access Control & Permissions',
      path: '/security'
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

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => {
            const IconComponent = module.icon;
            return (
              <Link key={module.id} to={module.path}>
                <Card className="group relative overflow-hidden bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm">
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  <CardContent className="relative p-8 text-center">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${module.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors">
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
                <p className="text-gray-400 text-sm">User Role</p>
                <p className="text-2xl font-bold text-white">Employee</p>
              </div>
              <UserCheck className="w-8 h-8 text-green-400" />
            </div>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Modules</p>
                <p className="text-2xl font-bold text-white">{modules.length}</p>
              </div>
              <Briefcase className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Last Login</p>
                <p className="text-2xl font-bold text-white">Now</p>
              </div>
              <Clock className="w-8 h-8 text-orange-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
