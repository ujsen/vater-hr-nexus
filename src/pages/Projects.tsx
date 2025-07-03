
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft,
  Briefcase,
  Calendar,
  DollarSign,
  Users,
  CheckCircle2,
  Clock,
  AlertCircle,
  TrendingUp
} from "lucide-react";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "PRJ-2024-001",
      name: "Al-Riyadh Office Complex",
      manager: "Ahmed Al-Rashid",
      status: "In Progress",
      progress: 65,
      budget: 2500000,
      spent: 1625000,
      startDate: "2024-01-15",
      endDate: "2024-08-30",
      team: 12
    },
    {
      id: "PRJ-2024-002",
      name: "Jeddah Industrial Facility",
      manager: "Sara Mohammad",
      status: "Planning",
      progress: 15,
      budget: 4200000,
      spent: 630000,
      startDate: "2024-03-01",
      endDate: "2024-12-15",
      team: 18
    },
    {
      id: "PRJ-2024-003",
      name: "Dammam Warehouse Expansion",
      manager: "Omar Hassan",
      status: "Completed",
      progress: 100,
      budget: 800000,
      spent: 785000,
      startDate: "2023-10-01",
      endDate: "2024-01-10",
      team: 8
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-600';
      case 'In Progress': return 'bg-blue-600';
      case 'Planning': return 'bg-yellow-600';
      case 'On Hold': return 'bg-red-600';
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
                Project Management
              </h1>
              <p className="text-app-text-secondary text-lg mt-2">
                Planning, Tracking & Execution
              </p>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Projects</p>
                  <p className="text-2xl font-bold text-foreground">{projects.length}</p>
                </div>
                <Briefcase className="w-8 h-8 text-app-orange" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Active Projects</p>
                  <p className="text-2xl font-bold text-app-blue">
                    {projects.filter(p => p.status === 'In Progress').length}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-app-blue" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Completed</p>
                  <p className="text-2xl font-bold text-app-green">
                    {projects.filter(p => p.status === 'Completed').length}
                  </p>
                </div>
                <CheckCircle2 className="w-8 h-8 text-app-green" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Budget</p>
                  <p className="text-2xl font-bold text-app-orange">
                    ${(projects.reduce((sum, p) => sum + p.budget, 0) / 1000000).toFixed(1)}M
                  </p>
                </div>
                <DollarSign className="w-8 h-8 text-app-orange" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects List */}
        <Card className="bg-card/50 border-border backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-card-foreground">Project Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.id} className="p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-card-foreground font-semibold text-lg">{project.name}</h3>
                      <p className="text-muted-foreground">{project.id}</p>
                    </div>
                    <span className={`px-3 py-1 rounded text-white text-sm ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      Manager: {project.manager}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.startDate} - {project.endDate}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Team: {project.team} members
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-card-foreground">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-app-blue h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Budget</span>
                        <span className="text-card-foreground">
                          ${project.spent.toLocaleString()} / ${project.budget.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-app-orange h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${(project.spent / project.budget) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
