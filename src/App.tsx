import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Sidebar } from "./components/layout/Sidebar";
import { PortfolioOverview } from "./components/dashboard/PortfolioOverview";
import { MarketTable } from "./components/dashboard/MarketTable";
import { PortfolioChart } from "./components/dashboard/PortfolioChart";
import { TradeForm } from "./components/dashboard/TradeForm";
import { AuthLayout } from "./components/auth/AuthLayout";
import { LandingPage } from "./pages/LandingPage";
import { SignUpPage } from "./pages/SignUpPage";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./components/ThemeProvider";

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeView, setActiveView] = useState("dashboard");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const mockUser = {
    name: "Alex Thompson",
    email: "alex.t@example.com",
    avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7b71755e-d098-4325-85b5-2a0b3839b9a3/user-avatar-1-fe3ea08c-1776601413408.webp"
  };

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (email: string) => {
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-sm font-medium animate-pulse">Loading CryptoPulse...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors duration-300">
      <Navbar 
        isLoggedIn={isLoggedIn} 
        user={isLoggedIn ? mockUser : undefined} 
        onLogout={handleLogout}
        onLoginClick={() => navigate("/login")}
        onStartClick={() => navigate("/signup")}
        onLogoClick={() => navigate(isLoggedIn ? "/dashboard" : "/")}
      />
      
      <div className="flex flex-1">
        {isLoggedIn && (
          <Sidebar activeView={activeView} onViewChange={setActiveView} />
        )}
        
        <main className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname + (isLoggedIn ? activeView : "")}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={isLoggedIn ? "p-4 md:p-8 bg-muted/20 min-h-full transition-colors duration-300" : ""}
            >
              <Routes location={location} key={location.pathname}>
                {/* Public Routes */}
                <Route 
                  path="/" 
                  element={
                    isLoggedIn ? <Navigate to="/dashboard" replace /> : 
                    <LandingPage onStart={() => navigate("/signup")} onLogin={() => navigate("/login")} />
                  } 
                />
                <Route 
                  path="/login" 
                  element={
                    isLoggedIn ? <Navigate to="/dashboard" replace /> : 
                    <AuthLayout onLogin={handleLogin} />
                  } 
                />
                <Route 
                  path="/signup" 
                  element={
                    isLoggedIn ? <Navigate to="/dashboard" replace /> : 
                    <SignUpPage onLogin={handleLogin} />
                  } 
                />

                {/* Protected Dashboard Route */}
                <Route 
                  path="/dashboard" 
                  element={
                    !isLoggedIn ? <Navigate to="/login" replace /> : (
                      <div className="mx-auto max-w-7xl space-y-8">
                        {activeView === "dashboard" && (
                          <>
                            <div className="flex flex-col gap-2">
                              <h1 className="text-3xl font-bold tracking-tight">Welcome back, {mockUser.name.split(' ')[0]}!</h1>
                              <p className="text-muted-foreground">Here's what's happening with your portfolio today.</p>
                            </div>
                            
                            <PortfolioOverview />
                            
                            <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
                              <PortfolioChart />
                              <TradeForm />
                            </div>
                            
                            <MarketTable />
                          </>
                        )}

                        {activeView === "market" && (
                          <>
                            <div className="flex flex-col gap-2">
                              <h1 className="text-3xl font-bold tracking-tight">Market Overview</h1>
                              <p className="text-muted-foreground">Real-time data for the top performing digital assets.</p>
                            </div>
                            <MarketTable />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                              <div className="rounded-xl border bg-card p-6">
                                <h3 className="text-lg font-semibold mb-4">Trending News</h3>
                                <div className="space-y-4">
                                  {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex gap-4 border-b pb-4 last:border-0 last:pb-0">
                                      <div className="h-16 w-16 shrink-0 rounded-md bg-muted"></div>
                                      <div className="space-y-1">
                                        <p className="font-medium line-clamp-1">Bitcoin surges past $64k as institutional interest grows</p>
                                        <p className="text-xs text-muted-foreground">2 hours ago \u2022 CoinDesk</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div className="rounded-xl border bg-card p-6">
                                <h3 className="text-lg font-semibold mb-4">Top Gainers</h3>
                                <div className="space-y-4">
                                  {[
                                    { name: "Chainlink", symbol: "LINK", change: "+14.2%" },
                                    { name: "Avalanche", symbol: "AVAX", change: "+9.5%" },
                                    { name: "Polkadot", symbol: "DOT", change: "+7.8%" }
                                  ].map((asset, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                      <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-xs">
                                          {asset.symbol[0]}
                                        </div>
                                        <div>
                                          <p className="font-medium">{asset.name}</p>
                                          <p className="text-xs text-muted-foreground">{asset.symbol}</p>
                                        </div>
                                      </div>
                                      <span className="text-emerald-500 font-medium">{asset.change}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </>
                        )}

                        {activeView !== "dashboard" && activeView !== "market" && (
                          <div className="flex flex-col items-center justify-center min-h-[400px] border-2 border-dashed rounded-xl">
                            <p className="text-muted-foreground">This section ({activeView}) is currently under development.</p>
                            <Button variant="link" onClick={() => setActiveView('dashboard')}>Return to Dashboard</Button>
                          </div>
                        )}
                      </div>
                    )
                  } 
                />

                {/* Redirect any other route to home */}
                <Route path="*" element={<Navigate to={isLoggedIn ? "/dashboard" : "/"} replace />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="cryptopulse-theme">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;