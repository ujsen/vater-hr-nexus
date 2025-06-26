
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Search, 
  Plus, 
  FileText, 
  Calendar, 
  User,
  Download,
  Eye,
  Upload,
  Folder,
  File
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Documents = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const documents = [
    {
      id: "DOC001",
      name: "Employee Handbook 2024",
      type: "Policy Document",
      category: "HR Policies",
      uploadDate: "2024-01-01",
      size: "2.4 MB",
      format: "PDF",
      uploadedBy: "HR Manager",
      description: "Updated company policies and procedures",
      tags: ["Policy", "Guidelines", "Employee"]
    },
    {
      id: "DOC002",
      name: "Safety Training Manual",
      type: "Training Material",
      category: "Safety",
      uploadDate: "2024-01-15",
      size: "5.7 MB",
      format: "PDF",
      uploadedBy: "Safety Officer",
      description: "Comprehensive safety procedures and protocols",
      tags: ["Safety", "Training", "Manual"]
    },
    {
      id: "DOC003",
      name: "Benefits Package Overview",
      type: "Information Document",
      category: "Benefits",
      uploadDate: "2024-01-10",
      size: "1.8 MB",
      format: "PDF",
      uploadedBy: "HR Manager",
      description: "Employee benefits and compensation details",
      tags: ["Benefits", "Compensation", "Insurance"]
    },
    {
      id: "DOC004",
      name: "Emergency Procedures",
      type: "Procedure Document",
      category: "Safety",
      uploadDate: "2024-01-05",
      size: "890 KB",
      format: "PDF",
      uploadedBy: "Safety Officer",
      description: "Emergency response and evacuation procedures",
      tags: ["Emergency", "Safety", "Procedures"]
    },
    {
      id: "DOC005",
      name: "Leave Policy 2024",
      type: "Policy Document",
      category: "HR Policies",
      uploadDate: "2023-12-20",
      size: "1.2 MB",
      format: "PDF",
      uploadedBy: "HR Manager",
      description: "Annual leave, sick leave, and vacation policies",
      tags: ["Leave", "Policy", "Vacation"]
    }
  ];

  const filteredDocuments = documents.filter(doc => 
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Policy Document": return "bg-blue-500";
      case "Training Material": return "bg-green-500";
      case "Information Document": return "bg-purple-500";
      case "Procedure Document": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "HR Policies": return FileText;
      case "Safety": return Shield;
      case "Benefits": return DollarSign;
      default: return File;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/hr')}
              className="text-gray-300 border-gray-600 hover:bg-gray-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to HR
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-white">HR Documents</h1>
              <p className="text-gray-400">Manage HR documents and files</p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800">
            <Plus className="w-4 h-4 mr-2" />
            Upload Document
          </Button>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Documents</p>
                  <p className="text-2xl font-bold text-white">{documents.length}</p>
                </div>
                <FileText className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Categories</p>
                  <p className="text-2xl font-bold text-blue-400">
                    {new Set(documents.map(doc => doc.category)).size}
                  </p>
                </div>
                <Folder className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">This Month</p>
                  <p className="text-2xl font-bold text-green-400">3</p>
                </div>
                <Upload className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Size</p>
                  <p className="text-2xl font-bold text-purple-400">12.8 MB</p>
                </div>
                <File className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredDocuments.map((document) => {
            const CategoryIcon = getCategoryIcon(document.category);
            return (
              <Card key={document.id} className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <CategoryIcon className="w-8 h-8 text-yellow-400" />
                      <div>
                        <CardTitle className="text-white text-sm">{document.name}</CardTitle>
                        <p className="text-gray-400 text-xs">{document.id}</p>
                      </div>
                    </div>
                    <Badge className={`${getTypeColor(document.type)} text-white border-none text-xs`}>
                      {document.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Category</p>
                      <p className="text-white">{document.category}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Format</p>
                      <p className="text-white">{document.format}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Size</p>
                      <p className="text-white">{document.size}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Upload Date</p>
                      <p className="text-white">{document.uploadDate}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">Description</p>
                    <p className="text-white text-sm">{document.description}</p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm mb-2">Tags</p>
                    <div className="flex flex-wrap gap-1">
                      {document.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-gray-600 text-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm">
                    <p className="text-gray-400">Uploaded by</p>
                    <p className="text-white">{document.uploadedBy}</p>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1 text-gray-300 border-gray-600">
                      <Eye className="w-3 h-3 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-gray-300 border-gray-600">
                      <Download className="w-3 h-3 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Documents;
