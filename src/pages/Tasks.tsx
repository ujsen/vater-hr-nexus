
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft,
  Clock,
  CheckCircle2,
  AlertCircle,
  User,
  Calendar,
  Plus
} from "lucide-react";

const Tasks = () => {
  const navigate = useNavigate();

  const tasks = [
    {
      id: 1,
      title: "Complete inventory audit",
      assignee: "Ahmed Ali",
      priority: "High",
      status: "In Progress",
      dueDate: "2024-01-15",
      category: "Inventory"
    },
    {
      id: 2,
      title: "Update employee records",
      assignee: "Sarah Mohammad",
      priority: "Medium",
      status: "Pending",
      dueDate: "2024-01-18",
      category: "HR"
    },
    {
      id: 3,
      title: "Generate monthly sales report",
      assignee: "Omar Hassan",
      priority: "High",
      status: "Completed",
      dueDate: "2024-01-10",
      category: "Sales"
    },
    {
      id: 4,
      title: "Schedule equipment maintenance",
      assignee: "Ali Rahman",
      priority: "Low",
      status: "Pending",
      dueDate: "2024-01-20",
      category: "Maintenance"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-600';
      case 'In Progress': return 'bg-blue-600';
      case 'Pending': return 'bg-yellow-600';
      default: return 'bg-gray-600';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-400';
      case 'Medium': return 'text-yellow-400';
      case 'Low': return 'text-green-400';
      default: return 'text-gray-400';
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
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400">
                Task Manager
              </h1>
              <p className="text-gray-300 text-lg mt-2">
                Assignment & Progress Tracking
              </p>
            </div>
          </div>
          <Button className="bg-teal-600 hover:bg-teal-700">
            <Plus className="w-4 h-4 mr-2" />
            New Task
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Tasks</p>
                  <p className="text-2xl font-bold text-white">{tasks.length}</p>
                </div>
                <Clock className="w-8 h-8 text-teal-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Completed</p>
                  <p className="text-2xl font-bold text-green-400">
                    {tasks.filter(t => t.status === 'Completed').length}
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
                  <p className="text-gray-400 text-sm">In Progress</p>
                  <p className="text-2xl font-bold text-blue-400">
                    {tasks.filter(t => t.status === 'In Progress').length}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Pending</p>
                  <p className="text-2xl font-bold text-yellow-400">
                    {tasks.filter(t => t.status === 'Pending').length}
                  </p>
                </div>
                <AlertCircle className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tasks List */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Task Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-1">{task.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {task.assignee}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {task.dueDate}
                      </div>
                      <span className={`px-2 py-1 rounded text-xs ${task.category === 'HR' ? 'bg-purple-600' : task.category === 'Sales' ? 'bg-green-600' : task.category === 'Inventory' ? 'bg-blue-600' : 'bg-orange-600'} text-white`}>
                        {task.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`font-medium ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                    <span className={`px-3 py-1 rounded text-white text-sm ${getStatusColor(task.status)}`}>
                      {task.status}
                    </span>
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

export default Tasks;
