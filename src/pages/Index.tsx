
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

  return (
    <div className="min-h-screen bg-gradient-app p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="relative mb-12">
          {/* Centered title block */}
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-primary animate-fade-in drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              VaterErp
            </h1>
            <p className="text-app-text-secondary text-lg">
              Enterprise Resource Planning System
            </p>
          </div>

          {/* User info - absolutely positioned top right */}
          <div className="absolute top-0 right-0 flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-app-orange">
              <User className="w-5 h-5" />
              {user?.email}
            </div>
            <Button 
              variant="destructive" 
              onClick={signOut}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Main Modules Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Main Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modules.map((module) => {
              const IconComponent = module.icon;
              return (
                <Link key={module.id} to={module.path}>
                  <Card className="group relative overflow-hidden bg-card/50 border-border hover:border-muted-foreground transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm h-full animate-scale-in">
                    <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                    <CardContent className="relative p-8 text-center h-full flex flex-col justify-between">
                      <div>
                        <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${module.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-foreground transition-colors">
                          {module.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm group-hover:text-card-foreground transition-colors">
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
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">System Status</p>
                <p className="text-2xl font-bold text-app-green">Online</p>
              </div>
              <Users className="w-8 h-8 text-app-blue" />
            </div>
          </div>
          
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Active Modules</p>
                <p className="text-2xl font-bold text-foreground">{modules.length}</p>
              </div>
              <Briefcase className="w-8 h-8 text-app-teal" />
            </div>
          </div>
          
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Active Users</p>
                <p className="text-2xl font-bold text-foreground">15</p>
              </div>
              <Users className="w-8 h-8 text-app-orange" />
            </div>
          </div>
          
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Last Login</p>
                <p className="text-2xl font-bold text-foreground">Now</p>
              </div>
              <Clock className="w-8 h-8 text-app-green" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
