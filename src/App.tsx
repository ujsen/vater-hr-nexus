
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Hr from "./pages/Hr";
import Manpower from "./pages/hr/Manpower";
import Contracts from "./pages/hr/Contracts";
import StaffInfo from "./pages/hr/StaffInfo";
import PassportInfo from "./pages/hr/PassportInfo";
import EmployeeRequests from "./pages/hr/EmployeeRequests";
import Accidents from "./pages/hr/Accidents";
import WorkPermit from "./pages/hr/WorkPermit";
import ManpowerStandby from "./pages/hr/ManpowerStandby";
import Documents from "./pages/hr/Documents";
import DrivingLicense from "./pages/hr/DrivingLicense";
import AdvanceVoucher from "./pages/hr/AdvanceVoucher";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hr" element={<Hr />} />
          <Route path="/hr/manpower" element={<Manpower />} />
          <Route path="/hr/contracts" element={<Contracts />} />
          <Route path="/hr/staff-info" element={<StaffInfo />} />
          <Route path="/hr/passport-info" element={<PassportInfo />} />
          <Route path="/hr/employee-requests" element={<EmployeeRequests />} />
          <Route path="/hr/accidents" element={<Accidents />} />
          <Route path="/hr/work-permit" element={<WorkPermit />} />
          <Route path="/hr/manpower-standby" element={<ManpowerStandby />} />
          <Route path="/hr/documents" element={<Documents />} />
          <Route path="/hr/driving-license" element={<DrivingLicense />} />
          <Route path="/hr/advance-voucher" element={<AdvanceVoucher />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
