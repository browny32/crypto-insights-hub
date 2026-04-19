import { 
  Area, 
  AreaChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis,
  CartesianGrid
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const data = [
  { date: "Jan 01", value: 32000 },
  { date: "Jan 05", value: 33500 },
  { date: "Jan 10", value: 31000 },
  { date: "Jan 15", value: 34200 },
  { date: "Jan 20", value: 38000 },
  { date: "Jan 25", value: 36500 },
  { date: "Jan 30", value: 41000 },
  { date: "Feb 04", value: 42560 },
];

export function PortfolioChart() {
  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-7">
        <div>
          <CardTitle>Portfolio Performance</CardTitle>
          <CardDescription>Track your wealth growth over time</CardDescription>
        </div>
        <Tabs defaultValue="1m">
          <TabsList className="grid w-[200px] grid-cols-4">
            <TabsTrigger value="1w">1W</TabsTrigger>
            <TabsTrigger value="1m">1M</TabsTrigger>
            <TabsTrigger value="3m">3M</TabsTrigger>
            <TabsTrigger value="1y">1Y</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.205 0 0)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="oklch(0.205 0 0)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" />
              <XAxis 
                dataKey="date" 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  borderColor: "hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))"
                }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, "Balance"]}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="oklch(0.205 0 0)"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}