import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  BarChart3, 
  Globe, 
  ChevronRight,
  TrendingUp,
  Lock,
  Smartphone
} from "lucide-react";

interface LandingPageProps {
  onStart: () => void;
  onLogin: () => void;
}

export function LandingPage({ onStart, onLogin }: LandingPageProps) {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Bank-Grade Security",
      description: "Your assets are protected by industry-leading encryption and multi-sig cold storage systems."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Lightning Fast",
      description: "Execute trades in milliseconds with our high-performance engine and global infrastructure."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Advanced Analytics",
      description: "Professional-grade tools and real-time data to help you make informed investment decisions."
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Markets",
      description: "Access hundreds of digital assets and trading pairs from across the globe in one place."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-16 pb-24 md:pt-32 md:pb-40">
        <div className="container relative z-10 mx-auto px-4 sm:px-8">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary"
            >
              <span className="flex h-2 w-2 mr-2 rounded-full bg-primary animate-pulse"></span>
              New: CryptoPulse v2.0 is now live
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
            >
              The Smarter Way to <span className="text-primary">Invest</span> in Crypto.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            >
              Track your portfolio, analyze market trends, and execute trades on the most 
              secure platform. Join over 5 million users worldwide.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
            >
              <Button size="lg" className="h-14 px-8 text-lg" onClick={onStart}>
                Start Trading Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg" onClick={onLogin}>
                View Market Data
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30 blur-3xl">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full"></div>
        </div>

        {/* Hero Image / Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="container mx-auto mt-20 px-4 sm:px-8"
        >
          <div className="relative mx-auto max-w-5xl rounded-2xl border bg-card shadow-2xl overflow-hidden">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7b71755e-d098-4325-85b5-2a0b3839b9a3/landing-hero-crypto-ef6b3a3c-1776602381242.webp" 
              alt="Platform Dashboard" 
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">$42B+</p>
              <p className="text-muted-foreground uppercase text-xs tracking-widest font-semibold">Volume Traded</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">5M+</p>
              <p className="text-muted-foreground uppercase text-xs tracking-widest font-semibold">Registered Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">120+</p>
              <p className="text-muted-foreground uppercase text-xs tracking-widest font-semibold">Countries Support</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">99.9%</p>
              <p className="text-muted-foreground uppercase text-xs tracking-widest font-semibold">Platform Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why choose CryptoPulse?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide the most comprehensive suite of tools for crypto enthusiasts and professional traders alike.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl border bg-card hover:shadow-lg transition-all"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 bg-muted/20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7b71755e-d098-4325-85b5-2a0b3839b9a3/security-feature-c89fa74e-1776602381018.webp" 
                alt="Security" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 p-6 bg-primary text-primary-foreground rounded-xl shadow-lg hidden md:block">
                <Shield className="h-10 w-10" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your security is our top priority</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We employ multiple layers of security to ensure your funds and personal information remain protected at all times.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: <Lock className="h-5 w-5 text-primary" />, text: "Two-Factor Authentication (2FA) for all accounts" },
                  { icon: <Shield className="h-5 w-5 text-primary" />, text: "98% of digital assets stored in cold wallets" },
                  { icon: <Smartphone className="h-5 w-5 text-primary" />, text: "Biometric security for mobile app access" },
                  { icon: <TrendingUp className="h-5 w-5 text-primary" />, text: "Real-time fraud monitoring systems" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <span className="font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-10" variant="outline">
                Learn more about security <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to start your crypto journey?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Create an account in minutes and start building your future portfolio today.
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-bold" onClick={onStart}>
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-xl">
                  C
                </div>
                <span className="text-xl font-bold tracking-tight">CryptoPulse</span>
              </div>
              <p className="text-muted-foreground max-w-sm mb-6">
                The most trusted platform for managing and growing your digital asset portfolio. 
                Built for both beginners and experts.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-sm tracking-widest">Platform</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Exchange</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Wallet</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Fees</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-sm tracking-widest">Company</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 CryptoPulse. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}