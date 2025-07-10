
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./hooks/useTheme";
import { AuthProvider } from "./hooks/useAuth";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Hr from "./pages/Hr";
import Manpower from "./pages/hr/Manpower";
import FinalExit from "./pages/hr/FinalExit";
import Evasion from "./pages/hr/Evasion";
import Dependent from "./pages/hr/Dependent";
import EmployeeCost from "./pages/hr/EmployeeCost";
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
import AddDeductions from "./pages/hr/advance-voucher/AddDeductions";
import VoucherReport from "./pages/hr/advance-voucher/VoucherReport";
import VoucherStatement from "./pages/hr/advance-voucher/VoucherStatement";
import EmployeeDetail from "./pages/hr/EmployeeDetail";
import VoucherPending from "./pages/hr/advance-voucher/VoucherPending";
import GuaranteeReport from "./pages/hr/advance-voucher/GuaranteeReport";
import OfficialBusiness from "./pages/hr/advance-voucher/OfficialBusiness";
import Workshop from "./pages/Workshop";
import Reports from "./pages/Reports";
import Logistics from "./pages/Logistics";
import Tasks from "./pages/Tasks";
import Sales from "./pages/Sales";
import Projects from "./pages/Projects";
import Purchase from "./pages/Purchase";
import Store from "./pages/Store";
import PlatformInfo from "./pages/reports/PlatformInfo";
import LogisticsWorkshop from "./pages/logistics/Workshop";
import VehicleData from "./pages/logistics/VehicleData";
import UpdateVehicle from "./pages/logistics/UpdateVehicle";
import LogisticsComplaints from "./pages/logistics/Complaints";
import LogisticsTask from "./pages/logistics/Task";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="vaterErp-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Index />
              </ProtectedRoute>
            } />
            <Route path="/hr" element={
              <ProtectedRoute>
                <Hr />
              </ProtectedRoute>
            } />
            <Route path="/hr/manpower" element={
              <ProtectedRoute>
                <Manpower />
              </ProtectedRoute>
            } />
            <Route path="/hr/final-exit" element={
              <ProtectedRoute>
                <FinalExit />
              </ProtectedRoute>
            } />
            <Route path="/hr/evasion" element={
              <ProtectedRoute>
                <Evasion />
              </ProtectedRoute>
            } />
            <Route path="/hr/dependent" element={
              <ProtectedRoute>
                <Dependent />
              </ProtectedRoute>
            } />
            <Route path="/hr/employee-cost" element={
              <ProtectedRoute>
                <EmployeeCost />
              </ProtectedRoute>
            } />
            <Route path="/hr/contracts" element={
              <ProtectedRoute>
                <Contracts />
              </ProtectedRoute>
            } />
            <Route path="/hr/staff-info" element={
              <ProtectedRoute>
                <StaffInfo />
              </ProtectedRoute>
            } />
            <Route path="/hr/passport-info" element={
              <ProtectedRoute>
                <PassportInfo />
              </ProtectedRoute>
            } />
            <Route path="/hr/employee-requests" element={
              <ProtectedRoute>
                <EmployeeRequests />
              </ProtectedRoute>
            } />
            <Route path="/hr/accidents" element={
              <ProtectedRoute>
                <Accidents />
              </ProtectedRoute>
            } />
            <Route path="/hr/work-permit" element={
              <ProtectedRoute>
                <WorkPermit />
              </ProtectedRoute>
            } />
            <Route path="/hr/manpower-standby" element={
              <ProtectedRoute>
                <ManpowerStandby />
              </ProtectedRoute>
            } />
            <Route path="/hr/documents" element={
              <ProtectedRoute>
                <Documents />
              </ProtectedRoute>
            } />
            <Route path="/hr/driving-license" element={
              <ProtectedRoute>
                <DrivingLicense />
              </ProtectedRoute>
            } />
            <Route path="/reports/advance-voucher" element={
              <ProtectedRoute>
                <AdvanceVoucher />
              </ProtectedRoute>
            } />
            <Route path="/reports/advance-voucher/add-deductions" element={
              <ProtectedRoute>
                <AddDeductions />
              </ProtectedRoute>
            } />
            <Route path="/reports/advance-voucher/voucher-report" element={
              <ProtectedRoute>
                <VoucherReport />
              </ProtectedRoute>
            } />
            <Route path="/reports/advance-voucher/voucher-statement" element={
              <ProtectedRoute>
                <VoucherStatement />
              </ProtectedRoute>
            } />
            <Route path="/reports/advance-voucher/voucher-pending" element={
              <ProtectedRoute>
                <VoucherPending />
              </ProtectedRoute>
            } />
            <Route path="/reports/advance-voucher/guarantee-report" element={
              <ProtectedRoute>
                <GuaranteeReport />
              </ProtectedRoute>
            } />
            <Route path="/reports/advance-voucher/official-business" element={
              <ProtectedRoute>
                <OfficialBusiness />
              </ProtectedRoute>
            } />
            <Route path="/workshop" element={
              <ProtectedRoute>
                <Workshop />
              </ProtectedRoute>
            } />
            <Route path="/reports" element={
              <ProtectedRoute>
                <Reports />
              </ProtectedRoute>
            } />
            <Route path="/logistics" element={
              <ProtectedRoute>
                <Logistics />
              </ProtectedRoute>
            } />
            <Route path="/tasks" element={
              <ProtectedRoute>
                <Tasks />
              </ProtectedRoute>
            } />
            <Route path="/sales" element={
              <ProtectedRoute>
                <Sales />
              </ProtectedRoute>
            } />
            <Route path="/projects" element={
              <ProtectedRoute>
                <Projects />
              </ProtectedRoute>
            } />
            <Route path="/purchase" element={
              <ProtectedRoute>
                <Purchase />
              </ProtectedRoute>
            } />
            <Route path="/store" element={
              <ProtectedRoute>
                <Store />
              </ProtectedRoute>
            } />
            <Route path="/reports/platform-info" element={
              <ProtectedRoute>
                <PlatformInfo />
              </ProtectedRoute>
            } />
            <Route path="/logistics/workshop" element={
              <ProtectedRoute>
                <LogisticsWorkshop />
              </ProtectedRoute>
            } />
            <Route path="/logistics/vehicle-data" element={
              <ProtectedRoute>
                <VehicleData />
              </ProtectedRoute>
            } />
            <Route path="/logistics/update-vehicle" element={
              <ProtectedRoute>
                <UpdateVehicle />
              </ProtectedRoute>
            } />
            <Route path="/logistics/complaints" element={
              <ProtectedRoute>
                <LogisticsComplaints />
              </ProtectedRoute>
            } />
            <Route path="/logistics/task" element={
              <ProtectedRoute>
                <LogisticsTask />
              </ProtectedRoute>
            } />
            <Route path="/hr/employee/:employeeId" element={
              <ProtectedRoute>
                <EmployeeDetail />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </ThemeProvider>
  </QueryClientProvider>
);

export default App;
