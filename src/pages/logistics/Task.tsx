import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Search, Home, ClipboardList, User, Settings } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Task = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      assignee: "",
      priority: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("New task:", data);
    // Here you would typically save to database
    setIsDialogOpen(false);
    form.reset();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-gray-700 text-white px-3 py-1 rounded border-none outline-none"
          />
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-300">Welcome :</span>
          <span className="text-red-400 font-bold">AL-Shebami</span>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gray-800 p-4 flex items-center justify-between border-t border-gray-700">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-red-500">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span>Inbox</span>
          </div>
          <div className="flex items-center space-x-2 text-yellow-500">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Send</span>
          </div>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>New Task</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-800 text-white border-gray-700">
            <DialogHeader>
              <DialogTitle>Create New Task</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Task Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter task title" {...field} className="bg-gray-700 border-gray-600 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter task description" {...field} className="bg-gray-700 border-gray-600 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="assignee"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Assignee</FormLabel>
                      <FormControl>
                        <Input placeholder="Assign to" {...field} className="bg-gray-700 border-gray-600 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Priority</FormLabel>
                      <FormControl>
                        <Input placeholder="Priority level" {...field} className="bg-gray-700 border-gray-600 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    Create Task
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Sidebar and Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-16 bg-gray-800 min-h-screen flex flex-col items-center py-6 space-y-6">
          <div className="flex flex-col items-center space-y-2 text-blue-400">
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </div>
          <div className="flex flex-col items-center space-y-2 text-gray-400">
            <ClipboardList className="w-6 h-6" />
            <span className="text-xs">Tasks Status</span>
          </div>
          <div className="flex flex-col items-center space-y-2 text-gray-400">
            <User className="w-6 h-6" />
            <span className="text-xs">Admin</span>
          </div>
        </div>

        {/* Main Task Board */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-4 gap-6">
            {/* Need Approval Column */}
            <div className="bg-gray-800 rounded-lg">
              <div className="bg-green-600 text-white p-3 rounded-t-lg flex items-center justify-between">
                <span className="font-medium">Need Approval (0)</span>
                <Settings className="w-4 h-4" />
              </div>
              <div className="p-4 min-h-[400px]">
                {/* Empty column */}
              </div>
            </div>

            {/* New Task Column */}
            <div className="bg-gray-800 rounded-lg">
              <div className="bg-red-600 text-white p-3 rounded-t-lg flex items-center justify-between">
                <span className="font-medium">New Task (1)</span>
                <Settings className="w-4 h-4" />
              </div>
              <div className="p-4 min-h-[400px]">
                {/* Task Card */}
                <Card className="bg-white text-black mb-4">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Date :2022-12-11</span>
                      <Button variant="ghost" size="sm">📎</Button>
                    </div>
                    <div className="text-blue-600 text-sm mb-2">
                      المولدات في المحيل - From : 
                      <br />AL-Shebami
                    </div>
                    <div className="text-gray-800 text-sm">
                      هل يتم عمل تشغيل للمولدات
                      <br />بشكل دوري يومي تحديث
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* In Progress Column */}
            <div className="bg-gray-800 rounded-lg">
              <div className="bg-yellow-600 text-white p-3 rounded-t-lg flex items-center justify-between">
                <span className="font-medium">In progress (0)</span>
                <Settings className="w-4 h-4" />
              </div>
              <div className="p-4 min-h-[400px]">
                {/* Empty column */}
              </div>
            </div>

            {/* Done Column */}
            <div className="bg-gray-800 rounded-lg">
              <div className="bg-blue-600 text-white p-3 rounded-t-lg flex items-center justify-between">
                <span className="font-medium">Done (0)</span>
                <Settings className="w-4 h-4" />
              </div>
              <div className="p-4 min-h-[400px]">
                {/* Empty column */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="fixed bottom-6 left-6">
        <Button 
          variant="outline" 
          onClick={() => navigate('/logistics')}
          className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>
    </div>
  );
};

export default Task;