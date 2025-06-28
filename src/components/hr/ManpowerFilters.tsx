
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

interface ManpowerFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterStatus: string;
  setFilterStatus: (status: string) => void;
}

export const ManpowerFilters = ({ 
  searchTerm, 
  setSearchTerm, 
  filterStatus, 
  setFilterStatus 
}: ManpowerFiltersProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div className="md:col-span-2 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Search employees..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-gray-800 border-gray-700 text-white"
        />
      </div>
      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
        className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
      >
        <option value="all">All Status</option>
        <option value="active">Active</option>
        <option value="on leave">On Leave</option>
        <option value="inactive">Inactive</option>
      </select>
      <Button variant="outline" className="text-gray-300 border-gray-600">
        <Filter className="w-4 h-4 mr-2" />
        More Filters
      </Button>
    </div>
  );
};
