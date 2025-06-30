
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface Employee {
  id: string;
  employee_id: string;
  profile_id?: string;
  department: string;
  position: string;
  manager_id?: string;
  salary?: number;
  status: string;
  hire_date: string;
  created_at: string;
  updated_at: string;
}

export const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchEmployees = async () => {
    try {
      const { data, error } = await supabase
        .from("employees")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setEmployees(data || []);
    } catch (error: any) {
      toast({
        title: "Error fetching employees",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const addEmployee = async (employeeData: Partial<Employee>) => {
    try {
      const { data, error } = await supabase
        .from("employees")
        .insert([employeeData])
        .select()
        .single();

      if (error) throw error;
      setEmployees(prev => [data, ...prev]);
      toast({
        title: "Employee added",
        description: "Employee has been successfully added.",
      });
      return data;
    } catch (error: any) {
      toast({
        title: "Error adding employee",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    }
  };

  const updateEmployee = async (id: string, employeeData: Partial<Employee>) => {
    try {
      const { data, error } = await supabase
        .from("employees")
        .update(employeeData)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      setEmployees(prev => prev.map(emp => emp.id === id ? data : emp));
      toast({
        title: "Employee updated",
        description: "Employee has been successfully updated.",
      });
      return data;
    } catch (error: any) {
      toast({
        title: "Error updating employee",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    }
  };

  const deleteEmployee = async (id: string) => {
    try {
      const { error } = await supabase
        .from("employees")
        .delete()
        .eq("id", id);

      if (error) throw error;
      setEmployees(prev => prev.filter(emp => emp.id !== id));
      toast({
        title: "Employee deleted",
        description: "Employee has been successfully deleted.",
      });
    } catch (error: any) {
      toast({
        title: "Error deleting employee",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return {
    employees,
    loading,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    refetch: fetchEmployees,
  };
};
