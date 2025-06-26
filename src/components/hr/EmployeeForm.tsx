
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { X, Save, User } from "lucide-react";

interface EmployeeFormProps {
  onClose: () => void;
  onSave: (employee: any) => void;
  employee?: any;
}

export const EmployeeForm = ({ onClose, onSave, employee }: EmployeeFormProps) => {
  const [formData, setFormData] = useState({
    name: employee?.name || '',
    email: employee?.email || '',
    phone: employee?.phone || '',
    position: employee?.position || '',
    department: employee?.department || '',
    location: employee?.location || '',
    status: employee?.status || 'Active',
    joinDate: employee?.joinDate || new Date().toISOString().split('T')[0],
    salary: employee?.salary || '',
    avatar: employee?.avatar || `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face`
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEmployee = {
      ...formData,
      id: employee?.id || `EMP${String(Date.now()).slice(-3).padStart(3, '0')}`
    };
    onSave(newEmployee);
    onClose();
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl bg-gray-800 border-gray-700 max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <CardTitle className="text-white flex items-center">
            <User className="w-5 h-5 mr-2" />
            {employee ? 'Edit Employee' : 'Add New Employee'}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-gray-300">Full Name</Label>
                <Input
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div>
                <Label className="text-gray-300">Email</Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div>
                <Label className="text-gray-300">Phone</Label>
                <Input
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div>
                <Label className="text-gray-300">Position</Label>
                <Input
                  value={formData.position}
                  onChange={(e) => handleChange('position', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div>
                <Label className="text-gray-300">Department</Label>
                <select
                  value={formData.department}
                  onChange={(e) => handleChange('department', e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  required
                >
                  <option value="">Select Department</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Human Resources">Human Resources</option>
                  <option value="Operations">Operations</option>
                  <option value="Finance">Finance</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>
              <div>
                <Label className="text-gray-300">Location</Label>
                <select
                  value={formData.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  required
                >
                  <option value="">Select Location</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Abu Dhabi">Abu Dhabi</option>
                  <option value="Sharjah">Sharjah</option>
                  <option value="Ajman">Ajman</option>
                </select>
              </div>
              <div>
                <Label className="text-gray-300">Status</Label>
                <select
                  value={formData.status}
                  onChange={(e) => handleChange('status', e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                >
                  <option value="Active">Active</option>
                  <option value="On Leave">On Leave</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div>
                <Label className="text-gray-300">Join Date</Label>
                <Input
                  type="date"
                  value={formData.joinDate}
                  onChange={(e) => handleChange('joinDate', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2 pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                <Save className="w-4 h-4 mr-2" />
                Save Employee
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
