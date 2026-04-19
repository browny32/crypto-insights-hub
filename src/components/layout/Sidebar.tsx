import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  TrendingUp,
  Wallet,
  History,
  Settings,
  HelpCircle,
  PieChart,
  ShieldCheck
} from "lucide-react";

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "market", label: "Market", icon: TrendingUp },
    { id: "portfolio", label: "Portfolio", icon: PieChart },
    { id: "wallet", label: "Wallet", icon: Wallet },
    { id: "history", label: "History", icon: History },
  ];

  const bottomItems = [
    { id: "settings", label: "Settings", icon: Settings },
    { id: "security", label: "Security", icon: ShieldCheck },
    { id: "help", label: "Help Center", icon: HelpCircle },
  ];

  return (
    <aside className="hidden md:flex w-64 flex-col border-r bg-card h-[calc(100vh-64px)] p-4">
      <div className="space-y-4 py-4 flex flex-col h-full">
        <div className="flex-1">
          <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Main Menu
          </h2>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={activeView === item.id ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3",
                  activeView === item.id && "bg-secondary font-medium"
                )}
                onClick={() => onViewChange(item.id)}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>

        <div className="mt-auto">
          <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Account
          </h2>
          <nav className="space-y-1">
            {bottomItems.map((item) => (
              <Button
                key={item.id}
                variant={activeView === item.id ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3",
                  activeView === item.id && "bg-secondary font-medium"
                )}
                onClick={() => onViewChange(item.id)}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}