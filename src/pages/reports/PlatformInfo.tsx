
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Server, Database, Users, Shield, Activity, HardDrive } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";

const PlatformInfo = () => {
  const navigate = useNavigate();

  const systemInfo = {
    version: "1.2.3",
    environment: "Production",
    uptime: "15 days, 8 hours",
    lastUpdate: "2024-06-25 14:30:00",
    totalUsers: 247,
    activeUsers: 89,
    diskUsage: "67%",
    memoryUsage: "42%",
    cpuUsage: "23%"
  };

  const modules = [
    { name: "HR Management", status: "Active", version: "2.1.0" },
    { name: "Financial Reports", status: "Active", version: "1.8.2" },
    { name: "Inventory", status: "Active", version: "1.5.4" },
    { name: "Workshop", status: "Maintenance", version: "2.0.1" },
    { name: "Logistics", status: "Active", version: "1.7.8" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500";
      case "Maintenance": return "bg-yellow-500";
      case "Inactive": return "bg-red-500";
      default: return "bg-gray-500";
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
                <h1 className="text-3xl font-bold text-white">Platform Information</h1>
                <p className="text-gray-400">System status and configuration details</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">System Version</p>
                    <p className="text-2xl font-bold text-cyan-400">{systemInfo.version}</p>
                  </div>
                  <Server className="w-8 h-8 text-cyan-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Users</p>
                    <p className="text-2xl font-bold text-green-400">{systemInfo.totalUsers}</p>
                  </div>
                  <Users className="w-8 h-8 text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Active Users</p>
                    <p className="text-2xl font-bold text-blue-400">{systemInfo.activeUsers}</p>
                  </div>
                  <Activity className="w-8 h-8 text-blue-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Disk Usage</p>
                    <p className="text-2xl font-bold text-orange-400">{systemInfo.diskUsage}</p>
                  </div>
                  <HardDrive className="w-8 h-8 text-orange-400" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Database className="w-5 h-5 mr-2 text-cyan-400" />
                  System Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">Environment</p>
                    <Badge className="bg-green-500 text-white">{systemInfo.environment}</Badge>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Uptime</p>
                    <p className="text-white">{systemInfo.uptime}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Last Update</p>
                    <p className="text-white">{systemInfo.lastUpdate}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Memory Usage</p>
                    <p className="text-white">{systemInfo.memoryUsage}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-cyan-400" />
                  Module Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {modules.map((module, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                      <div>
                        <p className="text-white font-medium">{module.name}</p>
                        <p className="text-gray-400 text-sm">v{module.version}</p>
                      </div>
                      <Badge className={`${getStatusColor(module.status)} text-white border-none`}>
                        {module.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformInfo;
