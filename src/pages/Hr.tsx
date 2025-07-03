
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { 
  Users, 
  FileText, 
  Clock, 
  DollarSign, 
  UserCheck,
  Briefcase,
  Shield,
  ArrowLeft,
  User,
  Calendar,
  Building,
  MapPin,
  Phone,
  Mail,
  Award,
  Clipboard,
  CreditCard,
  Car
} from "lucide-react";

const Hr = () => {
  const navigate = useNavigate();

  const hrModules = [
    {
      id: 'manpower',
      title: 'Manpower',
      icon: Users,
      color: 'from-blue-500 to-blue-700',
      description: 'Employee Directory & Management',
      path: '/hr/manpower'
    },
    {
      id: 'staff-info',
      title: 'Staff Information',
      icon: User,
      color: 'from-green-500 to-green-700',
      description: 'Detailed Staff Profiles',
      path: '/hr/staff-info'
    },
    {
      id: 'contracts',
      title: 'Contracts',
      icon: FileText,
      color: 'from-purple-500 to-purple-700',
      description: 'Employment Contracts & Agreements',
      path: '/hr/contracts'
    },
    {
      id: 'passport-info',
      title: 'Passport Information',
      icon: Shield,
      color: 'from-red-500 to-red-700',
      description: 'Travel Documents & Visas',
      path: '/hr/passport-info'
    },
    {
      id: 'accidents',
      title: 'Accidents Record',
      icon: Clipboard,
      color: 'from-orange-500 to-orange-700',
      description: 'Safety Incidents & Reports',
      path: '/hr/accidents'
    },
    {
      id: 'work-permit',
      title: 'Work Permit Information',
      icon: Briefcase,
      color: 'from-teal-500 to-teal-700',
      description: 'Work Authorization Documents',
      path: '/hr/work-permit'
    },
    {
      id: 'manpower-standby',
      title: 'Manpower Standby',
      icon: Clock,
      color: 'from-indigo-500 to-indigo-700',
      description: 'Available Staff Resources',
      path: '/hr/manpower-standby'
    },
    {
      id: 'documents',
      title: 'Documents',
      icon: FileText,
      color: 'from-yellow-500 to-yellow-700',
      description: 'HR Document Management',
      path: '/hr/documents'
    },
    {
      id: 'driving-license',
      title: 'Driving License',
      icon: Car,
      color: 'from-pink-500 to-pink-700',
      description: 'Driver License Records',
      path: '/hr/driving-license'
    },
    {
      id: 'advance-voucher',
      title: 'Advance Voucher',
      icon: DollarSign,
      color: 'from-emerald-500 to-emerald-700',
      description: 'Employee Advance Payments',
      path: '/hr/advance-voucher'
    },
    {
      id: 'tensile',
      title: 'Tensile (Q)',
      icon: Award,
      color: 'from-violet-500 to-violet-700',
      description: 'Quality Assurance Records',
      path: '/hr/tensile'
    },
    {
      id: 'id-manpower',
      title: 'ID ManPower',
      icon: CreditCard,
      color: 'from-cyan-500 to-cyan-700',
      description: 'Employee ID Management',
      path: '/hr/id-manpower'
    },
    {
      id: 'finance-dept',
      title: 'Finance Department',
      icon: Building,
      color: 'from-slate-500 to-slate-700',
      description: 'Financial Operations',
      path: '/hr/finance-dept'
    },
    {
      id: 'employee-requests',
      title: 'Employee Requests',
      icon: UserCheck,
      color: 'from-rose-500 to-rose-700',
      description: 'Staff Requests & Approvals',
      path: '/hr/employee-requests'
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
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-primary animate-fade-in">
                Human Resource Platform
              </h1>
              <p className="text-app-text-secondary text-lg mt-2">
                Complete HR Management System
              </p>
            </div>
          </div>
        </div>

        {/* HR Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {hrModules.map((module) => {
            const IconComponent = module.icon;
            return (
              <Link key={module.id} to={module.path}>
                <Card className="group relative overflow-hidden bg-card/50 border-border hover:border-muted-foreground transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm h-full animate-scale-in">
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  <CardContent className="relative p-6 text-center h-full flex flex-col justify-between">
                    <div>
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${module.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-foreground transition-colors">
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

        {/* HR Summary Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Employees</p>
                <p className="text-2xl font-bold text-app-green">247</p>
              </div>
              <Users className="w-8 h-8 text-app-blue" />
            </div>
          </div>
          
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Active Contracts</p>
                <p className="text-2xl font-bold text-foreground">189</p>
              </div>
              <FileText className="w-8 h-8 text-app-green" />
            </div>
          </div>
          
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Pending Requests</p>
                <p className="text-2xl font-bold text-foreground">12</p>
              </div>
              <Clock className="w-8 h-8 text-app-orange" />
            </div>
          </div>
          
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Departments</p>
                <p className="text-2xl font-bold text-foreground">8</p>
              </div>
              <Building className="w-8 h-8 text-app-teal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hr;
