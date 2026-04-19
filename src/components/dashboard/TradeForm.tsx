import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RefreshCcw, Wallet } from "lucide-react";
import { toast } from "sonner";

export function TradeForm() {
  const [amount, setAmount] = useState("");
  const [asset, setAsset] = useState("btc");

  const handleTrade = (type: "buy" | "sell") => {
    if (!amount || isNaN(Number(amount))) {
      toast.error("Please enter a valid amount");
      return;
    }
    
    toast.success(`Successfully ${type === "buy" ? "bought" : "sold"} ${amount} worth of ${asset.toUpperCase()}`);
    setAmount("");
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Trade Crypto</CardTitle>
        <CardDescription>Instant buy or sell assets</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="buy">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="buy">Buy</TabsTrigger>
            <TabsTrigger value="sell">Sell</TabsTrigger>
          </TabsList>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="asset">Select Asset</Label>
              <Select defaultValue={asset} onValueChange={setAsset}>
                <SelectTrigger id="asset">
                  <SelectValue placeholder="Select asset" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
                  <SelectItem value="eth">Ethereum (ETH)</SelectItem>
                  <SelectItem value="sol">Solana (SOL)</SelectItem>
                  <SelectItem value="ada">Cardano (ADA)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="amount">Amount (USD)</Label>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Wallet className="h-3 w-3" /> Bal: $5,230.00
                </span>
              </div>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                <Input
                  id="amount"
                  placeholder="0.00"
                  className="pl-7"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>

            <div className="rounded-lg bg-muted p-3 text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Estimated BTC</span>
                <span className="font-medium">{amount ? (Number(amount) / 64231.5).toFixed(8) : "0.00000000"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Transaction Fee</span>
                <span className="font-medium">$1.50</span>
              </div>
            </div>
          </div>

          <TabsContent value="buy" className="mt-6">
            <Button className="w-full" onClick={() => handleTrade("buy")}>
              Buy Now
            </Button>
          </TabsContent>
          <TabsContent value="sell" className="mt-6">
            <Button variant="secondary" className="w-full" onClick={() => handleTrade("sell")}>
              Sell Now
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-center border-t py-4">
        <button className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1">
          <RefreshCcw className="h-3 w-3" /> Update price: 1 BTC = $64,231.50
        </button>
      </CardFooter>
    </Card>
  );
}