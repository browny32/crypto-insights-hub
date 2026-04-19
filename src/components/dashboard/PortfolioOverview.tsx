import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, ArrowUpRight, Wallet } from "lucide-react";

export function PortfolioOverview() {
  const stats = [
    {
      title: "Total Balance",
      value: "$42,560.80",
      change: "+12.5%",
      isPositive: true,
      icon: Wallet,
    },
    {
      title: "24h Profits",
      value: "$1,240.12",
      change: "+4.2%",
      isPositive: true,
      icon: TrendingUp,
    },
    {
      title: "Total Invested",
      value: "$32,000.00",
      change: "-2.1%",
      isPositive: false,
      icon: TrendingDown,
    },
    {
      title: "Active Assets",
      value: "12",
      change: "+2",
      isPositive: true,
      icon: ArrowUpRight,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <Card key={i} className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className={`text-xs flex items-center gap-1 mt-1 ${stat.isPositive ? 'text-emerald-500' : 'text-destructive'}`}>
              {stat.change} 
              <span className="text-muted-foreground ml-1">from yesterday</span>
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}