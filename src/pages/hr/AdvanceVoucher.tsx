
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  DollarSign, 
  FileText, 
  Clock, 
  Shield,
  Users,
  Briefcase
} from "lucide-react";

const AdvanceVoucher = () => {
  const navigate = useNavigate();

  const voucherModules = [
    {
      id: 'add-deductions',
      title: 'Add deductions',
      icon: DollarSign,
      color: 'from-emerald-500 to-emerald-700',
      description: 'Manage employee deductions',
      path: '/hr/advance-voucher/add-deductions'
    },
    {
      id: 'voucher-report',
      title: 'Voucher Report',
      icon: FileText,
      color: 'from-blue-500 to-blue-700',
      description: 'View voucher reports',
      path: '/hr/advance-voucher/voucher-report'
    },
    {
      id: 'voucher-statement',
      title: 'Voucher Statement',
      icon: FileText,
      color: 'from-green-500 to-green-700',
      description: 'Employee voucher statements',
      path: '/hr/advance-voucher/voucher-statement'
    },
    {
      id: 'voucher-pending',
      title: 'Voucher Pending',
      icon: Clock,
      color: 'from-yellow-500 to-yellow-700',
      description: 'Pending voucher approvals',
      path: '/hr/advance-voucher/voucher-pending'
    },
    {
      id: 'guarantee-report',
      title: 'Guarantee Report',
      icon: Shield,
      color: 'from-purple-500 to-purple-700',
      description: 'Guarantee voucher list',
      path: '/hr/advance-voucher/guarantee-report'
    },
    {
      id: 'official-business',
      title: 'OFFICIAL BUSINESS',
      icon: Briefcase,
      color: 'from-indigo-500 to-indigo-700',
      description: 'Official business vouchers',
      path: '/hr/advance-voucher/official-business'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-app p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/hr')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to HR
            </Button>
            <div>
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-primary animate-fade-in">
                <span className="text-destructive">Advance</span> Voucher
              </h1>
              <p className="text-app-text-secondary text-lg mt-2">
                Employee Advance Payment Management
              </p>
            </div>
          </div>
        </div>

        {/* Voucher Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {voucherModules.map((module) => {
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
                      <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-foreground transition-colors">
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

        {/* Summary Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Vouchers</p>
                <p className="text-2xl font-bold text-app-green">156</p>
              </div>
              <FileText className="w-8 h-8 text-app-blue" />
            </div>
          </div>
          
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Amount</p>
                <p className="text-2xl font-bold text-foreground">425,000</p>
                <p className="text-xs text-muted-foreground">AED</p>
              </div>
              <DollarSign className="w-8 h-8 text-app-green" />
            </div>
          </div>
          
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Pending</p>
                <p className="text-2xl font-bold text-foreground">23</p>
              </div>
              <Clock className="w-8 h-8 text-app-orange" />
            </div>
          </div>
          
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Employees</p>
                <p className="text-2xl font-bold text-foreground">89</p>
              </div>
              <Users className="w-8 h-8 text-app-teal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceVoucher;
