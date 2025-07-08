import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, FileText, MapPin, User, Settings } from "lucide-react";

const Workshop = () => {
  const navigate = useNavigate();

  const serviceOrders = [
    {
      sl: 1,
      vehicleDoor: "C-150",
      typeService: "Change OIL",
      typeOrder: "HYUNDAI DINA",
      date: "2025-07-07",
      breakdown: "KM: 289390",
      driverBadge: "NSGG1486",
      driverName: "Rajan PoudeL",
      mechanicName: "",
      notes: ""
    },
    {
      sl: 2,
      vehicleDoor: "Q-199",
      typeService: "Maintenance",
      typeOrder: "CASE BACKHOE LOADER",
      date: "2025-07-07",
      breakdown: "silencer and diesel filter broken",
      driverBadge: "NSH1940",
      driverName: "MALKEET SINGH",
      mechanicName: "",
      notes: ""
    },
    {
      sl: 3,
      vehicleDoor: "C-289",
      typeService: "Maintenance",
      typeOrder: "JMC DUMP TRUCK 3 TONS DOUBLE CAB",
      date: "2025-07-07",
      breakdown: "BELT PROBLEM AND WELDING NEEDED",
      driverBadge: "NSJ1690",
      driverName: "Jogendra Prasad Dhobi",
      mechanicName: "",
      notes: ""
    },
    {
      sl: 4,
      vehicleDoor: "C-257",
      typeService: "Change OIL",
      typeOrder: "TOYOTA CORROLA / YARIS",
      date: "2025-07-07",
      breakdown: "KM: 253113",
      driverBadge: "NSJT1707",
      driverName: "Ibrahim Aldayer Ibrahim Abdalgader",
      mechanicName: "",
      notes: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-app p-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/logistics')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>MVPI Scheduling</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Transfer</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Status Order</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>From Workshop</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>In Service</span>
            </Button>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-card-foreground">Service Order List</h1>
        </div>

        {/* Stats */}
        <div className="mb-6 text-card-foreground">
          <p className="text-lg">
            New Order: <span className="font-bold">8</span> | 
            Order in Work Shop: <span className="font-bold">15</span> | 
            Order Under Check: <span className="font-bold">1</span> | 
            Order Closed: <span className="font-bold">4640</span> | 
            <span className="text-destructive">Service Outside: 78</span> | 
            <span className="text-app-green">Need Spare Parts: 86</span>
          </p>
        </div>

        {/* Service Orders Table */}
        <Card className="bg-card/50 border-border backdrop-blur-sm">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-app-teal">
                    <TableHead className="text-white font-bold border border-border">SL#</TableHead>
                    <TableHead className="text-white font-bold border border-border">Vehicle Door #</TableHead>
                    <TableHead className="text-white font-bold border border-border">Type Service</TableHead>
                    <TableHead className="text-white font-bold border border-border">Type Order</TableHead>
                    <TableHead className="text-white font-bold border border-border">Date</TableHead>
                    <TableHead className="text-white font-bold border border-border">Breakdown Description</TableHead>
                    <TableHead className="text-white font-bold border border-border">Driver's Badge#</TableHead>
                    <TableHead className="text-white font-bold border border-border">Driver's Name</TableHead>
                    <TableHead className="text-white font-bold border border-border">Mechanic Name</TableHead>
                    <TableHead className="text-white font-bold border border-border">Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {serviceOrders.map((order) => (
                    <TableRow key={order.sl} className="hover:bg-muted/30">
                      <TableCell className="border border-border">{order.sl}</TableCell>
                      <TableCell className="border border-border">{order.vehicleDoor}</TableCell>
                      <TableCell className="border border-border">{order.typeService}</TableCell>
                      <TableCell className="border border-border">{order.typeOrder}</TableCell>
                      <TableCell className="border border-border">{order.date}</TableCell>
                      <TableCell className="border border-border">{order.breakdown}</TableCell>
                      <TableCell className="border border-border">{order.driverBadge}</TableCell>
                      <TableCell className="border border-border">{order.driverName}</TableCell>
                      <TableCell className="border border-border">
                        <select className="w-full p-1 border border-border bg-background rounded">
                          <option value="">{order.mechanicName}</option>
                        </select>
                      </TableCell>
                      <TableCell className="border border-border">
                        <input 
                          type="text" 
                          className="w-full p-1 border border-border bg-background rounded"
                          value={order.notes}
                          readOnly
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Workshop;