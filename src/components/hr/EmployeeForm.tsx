
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, User } from "lucide-react";

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
    contractType: employee?.contractType || 'Permanent',
    nationality: employee?.nationality || '',
    passportNo: employee?.passportNo || '',
    visaStatus: employee?.visaStatus || 'Valid',
    workPermit: employee?.workPermit || 'Valid',
    emergencyContact: employee?.emergencyContact || '',
    empCode: employee?.empCode || '',
    category: employee?.category || '',
    division: employee?.division || '',
    subDivision: employee?.subDivision || '',
    designation: employee?.designation || '',
    grade: employee?.grade || '',
    reportingManager: employee?.reportingManager || '',
    workLocation: employee?.workLocation || '',
    bankName: employee?.bankName || '',
    accountNumber: employee?.accountNumber || '',
    iBan: employee?.iBan || '',
    bankBranch: employee?.bankBranch || '',
    companyName: employee?.companyName || '',
    companyLocation: employee?.companyLocation || '',
    dateOfBirth: employee?.dateOfBirth || '',
    age: employee?.age || '',
    gender: employee?.gender || '',
    maritalStatus: employee?.maritalStatus || '',
    religion: employee?.religion || '',
    bloodGroup: employee?.bloodGroup || '',
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
      <Card className="w-full max-w-6xl bg-gray-800 border-gray-700 max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <CardTitle className="text-white flex items-center">
            <User className="w-5 h-5 mr-2" />
            {employee ? 'Edit Employee' : 'New Employee Form'}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="bg-gray-700/30 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label className="text-gray-300">Employee Code</Label>
                  <Input
                    value={formData.empCode}
                    onChange={(e) => handleChange('empCode', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="EMP001"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Full Name *</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Date of Birth</Label>
                  <Input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Age</Label>
                  <Input
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleChange('age', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Gender</Label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleChange('gender', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <Label className="text-gray-300">Nationality</Label>
                  <Input
                    value={formData.nationality}
                    onChange={(e) => handleChange('nationality', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Religion</Label>
                  <Input
                    value={formData.religion}
                    onChange={(e) => handleChange('religion', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Marital Status</Label>
                  <select
                    value={formData.maritalStatus}
                    onChange={(e) => handleChange('maritalStatus', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  >
                    <option value="">Select Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                  </select>
                </div>
                <div>
                  <Label className="text-gray-300">Blood Group</Label>
                  <select
                    value={formData.bloodGroup}
                    onChange={(e) => handleChange('bloodGroup', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-700/30 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-300">Email *</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Phone *</Label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Emergency Contact</Label>
                  <Input
                    value={formData.emergencyContact}
                    onChange={(e) => handleChange('emergencyContact', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>
            </div>

            {/* Employment Details */}
            <div className="bg-gray-700/30 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-4">Employment Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label className="text-gray-300">Category</Label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleChange('category', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  >
                    <option value="">Select Category</option>
                    <option value="Management">Management</option>
                    <option value="Staff">Staff</option>
                    <option value="Worker">Worker</option>
                  </select>
                </div>
                <div>
                  <Label className="text-gray-300">Division</Label>
                  <select
                    value={formData.division}
                    onChange={(e) => handleChange('division', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  >
                    <option value="">Select Division</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Operations">Operations</option>
                    <option value="Support">Support</option>
                  </select>
                </div>
                <div>
                  <Label className="text-gray-300">Sub Division</Label>
                  <Input
                    value={formData.subDivision}
                    onChange={(e) => handleChange('subDivision', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Department *</Label>
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
                  <Label className="text-gray-300">Designation</Label>
                  <Input
                    value={formData.designation}
                    onChange={(e) => handleChange('designation', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Position *</Label>
                  <Input
                    value={formData.position}
                    onChange={(e) => handleChange('position', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Grade</Label>
                  <select
                    value={formData.grade}
                    onChange={(e) => handleChange('grade', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  >
                    <option value="">Select Grade</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </select>
                </div>
                <div>
                  <Label className="text-gray-300">Reporting Manager</Label>
                  <Input
                    value={formData.reportingManager}
                    onChange={(e) => handleChange('reportingManager', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Work Location</Label>
                  <select
                    value={formData.workLocation}
                    onChange={(e) => handleChange('workLocation', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  >
                    <option value="">Select Location</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Abu Dhabi">Abu Dhabi</option>
                    <option value="Sharjah">Sharjah</option>
                    <option value="Ajman">Ajman</option>
                  </select>
                </div>
                <div>
                  <Label className="text-gray-300">Join Date *</Label>
                  <Input
                    type="date"
                    value={formData.joinDate}
                    onChange={(e) => handleChange('joinDate', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
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
                  <Label className="text-gray-300">Contract Type</Label>
                  <select
                    value={formData.contractType}
                    onChange={(e) => handleChange('contractType', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  >
                    <option value="Permanent">Permanent</option>
                    <option value="Contract">Contract</option>
                    <option value="Temporary">Temporary</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Salary & Bank Information */}
            <div className="bg-gray-700/30 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-4">Salary & Bank Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-300">Basic Salary (AED)</Label>
                  <Input
                    type="number"
                    value={formData.salary}
                    onChange={(e) => handleChange('salary', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Bank Name</Label>
                  <Input
                    value={formData.bankName}
                    onChange={(e) => handleChange('bankName', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Account Number</Label>
                  <Input
                    value={formData.accountNumber}
                    onChange={(e) => handleChange('accountNumber', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">IBAN</Label>
                  <Input
                    value={formData.iBan}
                    onChange={(e) => handleChange('iBan', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Bank Branch</Label>
                  <Input
                    value={formData.bankBranch}
                    onChange={(e) => handleChange('bankBranch', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>
            </div>

            {/* Company & Document Information */}
            <div className="bg-gray-700/30 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-4">Document Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-300">Passport Number</Label>
                  <Input
                    value={formData.passportNo}
                    onChange={(e) => handleChange('passportNo', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Visa Status</Label>
                  <select
                    value={formData.visaStatus}
                    onChange={(e) => handleChange('visaStatus', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  >
                    <option value="Valid">Valid</option>
                    <option value="Expired">Expired</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>
                <div>
                  <Label className="text-gray-300">Work Permit</Label>
                  <select
                    value={formData.workPermit}
                    onChange={(e) => handleChange('workPermit', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  >
                    <option value="Valid">Valid</option>
                    <option value="Expired">Expired</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                Save Employee
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
