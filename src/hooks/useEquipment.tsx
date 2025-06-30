
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface Equipment {
  id: string;
  name: string;
  model?: string;
  serial_number?: string;
  status: string;
  location?: string;
  purchase_date?: string;
  warranty_expiry?: string;
  created_at: string;
  updated_at: string;
}

export const useEquipment = () => {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchEquipment = async () => {
    try {
      const { data, error } = await supabase
        .from("equipment")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setEquipment(data || []);
    } catch (error: any) {
      toast({
        title: "Error fetching equipment",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const addEquipment = async (equipmentData: Partial<Equipment>) => {
    try {
      const { data, error } = await supabase
        .from("equipment")
        .insert([equipmentData])
        .select()
        .single();

      if (error) throw error;
      setEquipment(prev => [data, ...prev]);
      toast({
        title: "Equipment added",
        description: "Equipment has been successfully added.",
      });
      return data;
    } catch (error: any) {
      toast({
        title: "Error adding equipment",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    }
  };

  const updateEquipment = async (id: string, equipmentData: Partial<Equipment>) => {
    try {
      const { data, error } = await supabase
        .from("equipment")
        .update(equipmentData)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      setEquipment(prev => prev.map(eq => eq.id === id ? data : eq));
      toast({
        title: "Equipment updated",
        description: "Equipment has been successfully updated.",
      });
      return data;
    } catch (error: any) {
      toast({
        title: "Error updating equipment",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    }
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  return {
    equipment,
    loading,
    addEquipment,
    updateEquipment,
    refetch: fetchEquipment,
  };
};
