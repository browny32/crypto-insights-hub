import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, MoreHorizontal } from "lucide-react";

const marketData = [
  { id: "1", name: "Bitcoin", symbol: "BTC", price: "$64,231.50", change: "+2.45%", cap: "$1.2T", status: "Bullish" },
  { id: "2", name: "Ethereum", symbol: "ETH", price: "$3,450.20", change: "+1.12%", cap: "$414B", status: "Bullish" },
  { id: "3", name: "Solana", symbol: "SOL", price: "$145.80", change: "-0.85%", cap: "$64B", status: "Bearish" },
  { id: "4", name: "Cardano", symbol: "ADA", price: "$0.45", change: "+0.15%", cap: "$16B", status: "Neutral" },
  { id: "5", name: "Polkadot", symbol: "DOT", price: "$7.20", change: "-2.30%", cap: "$10B", status: "Bearish" },
  { id: "6", name: "Chainlink", symbol: "LINK", price: "$18.40", change: "+4.20%", cap: "$11B", status: "Bullish" },
];

export function MarketTable() {
  return (
    <div className="rounded-md border bg-card">
      <div className="flex items-center justify-between p-4">
        <h3 className="text-lg font-semibold">Market Trends</h3>
        <Button variant="outline" size="sm">View All</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Asset</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>24h Change</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>Sentiment</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {marketData.map((asset) => (
            <TableRow key={asset.id}>
              <TableCell className="font-medium">
                <div className="flex flex-col">
                  <span>{asset.name}</span>
                  <span className="text-xs text-muted-foreground uppercase">{asset.symbol}</span>
                </div>
              </TableCell>
              <TableCell>{asset.price}</TableCell>
              <TableCell className={asset.change.startsWith("+") ? "text-emerald-500" : "text-destructive"}>
                <div className="flex items-center gap-1">
                  {asset.change.startsWith("+") ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {asset.change}
                </div>
              </TableCell>
              <TableCell>{asset.cap}</TableCell>
              <TableCell>
                <Badge variant={asset.status === "Bullish" ? "default" : asset.status === "Bearish" ? "destructive" : "outline"}>
                  {asset.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}