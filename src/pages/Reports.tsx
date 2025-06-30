
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { 
  BarChart3,
  ArrowLeft,
  Shield,
  Banknote,
  PieChart,
  History,
  TrendingUp,
  FileText
} from "lucide-react";

const Reports = () => {
  const navigate = useNavigate();

  const reportModules = [
    {
      id: 'platform-info',
      title: 'Platform Information',
      icon: Shield,
      color: 'from-cyan-500 to-cyan-700',
      description: 'System Information & Settings',
      path: '/reports/platform-info'
    },
    {
      id: 'advance-voucher',
      title: 'Advance Voucher',
      icon: Banknote,
      color: 'from-emerald-500 to-emerald-700',
      description: 'Employee Advance Reports',
      path: '/reports/advance-voucher'
    },
    {
      id: 'summary-report',
      title: 'Summary Report',
      icon: PieChart,
      color: 'from-violet-500 to-violet-700',
      description: 'Executive Summary Dashboard',
      path: '/reports/summary'
    },
    {
      id: 'employee-history',
      title: 'Employee History',
      icon: History,
      color: 'from-blue-600 to-blue-800',
      description: 'Staff Activity & History Records',
      path: '/reports/employee-history'
    },
    {
      id: 'depreciation-report',
      title: 'Depreciation Report',
      icon: TrendingUp,
      color: 'from-red-600 to-red-800',
      description: 'Asset Depreciation Analysis',
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
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
                Reports & Analytics
              </h1>
              <p className="text-gray-300 text-lg mt-2">
                Comprehensive Business Intelligence Dashboard
              </p>
            </div>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reportModules.map((module) => {
            const IconComponent = module.icon;
            return (
              <Link key={module.id} to={module.path}>
                <Card className="group relative overflow-hidden bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  <CardContent className="relative p-8 text-center h-full flex flex-col justify-between">
                    <div>
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${module.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors">
                        {module.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {module.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Reports</p>
                <p className="text-2xl font-bold text-yellow-400">{reportModules.length}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Generated Today</p>
                <p className="text-2xl font-bold text-white">24</p>
              </div>
              <FileText className="w-8 h-8 text-green-400" />
            </div>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Scheduled Reports</p>
                <p className="text-2xl font-bold text-white">8</p>
              </div>
              <History className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Data Sources</p>
                <p className="text-2xl font-bold text-white">12</p>
              </div>
              <Shield className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
