import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Lock, User, Github } from "lucide-react";
import { motion } from "framer-motion";

interface AuthLayoutProps {
  onLogin: (email: string) => void;
  onSignUp?: (email: string) => void;
  defaultTab?: "login" | "signup";
}

export function AuthLayout({ onLogin, onSignUp, defaultTab = "login" }: AuthLayoutProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email);
    }
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupEmail && signupPassword && onSignUp) {
      onSignUp(signupEmail);
    } else if (signupEmail && signupPassword) {
      onLogin(signupEmail);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-center p-12 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7b71755e-d098-4325-85b5-2a0b3839b9a3/dashboard-bg-a1b34194-1776601413966.webp" 
            alt="background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary font-bold text-2xl mb-8">
            C
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold tracking-tight mb-6"
          >
            Invest in the future of finance.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl opacity-90 max-w-lg mb-8"
          >
            CryptoPulse is the most secure and intuitive way to manage your digital assets and grow your portfolio.
          </motion.p>
          
          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/20">
            <div className="space-y-2">
              <p className="text-3xl font-bold">$1B+</p>
              <p className="text-sm opacity-70 uppercase tracking-widest">Assets Protected</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold">5M+</p>
              <p className="text-sm opacity-70 uppercase tracking-widest">Global Users</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-8 bg-background">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-[400px]"
        >
          <div className="lg:hidden flex justify-center mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-bold text-2xl">
              C
            </div>
          </div>
          
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <Card className="border-none shadow-none bg-transparent">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Welcome back</CardTitle>
                  <CardDescription>Enter your credentials to access your account</CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <form onSubmit={handleLoginSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="name@example.com" 
                          className="pl-10" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Button variant="link" className="p-0 h-auto text-xs" type="button">Forgot password?</Button>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="password" 
                          type="password" 
                          className="pl-10" 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full">Login</Button>
                  </form>
                  
                  <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full">
                      <Github className="mr-2 h-4 w-4" /> Github
                    </Button>
                    <Button variant="outline" className="w-full">
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.908 4.152-1.24 1.24-3.152 2.592-6.412 2.592-5.18 0-9.28-4.2-9.28-9.38s4.1-9.38 9.28-9.38c2.8 0 4.932 1.092 6.472 2.54l2.288-2.288C18.42 1.252 15.78 0 12.48 0 6.88 0 2.25 4.6 2.25 10.2s4.63 10.2 10.23 10.2c3.1 0 5.44-1.02 7.18-2.82 1.84-1.84 2.42-4.42 2.42-6.5 0-.62-.04-1.2-.14-1.76H12.48z"
                        />
                      </svg> Google
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="signup">
              <Card className="border-none shadow-none bg-transparent">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Create an account</CardTitle>
                  <CardDescription>Get started with your crypto journey today</CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <form onSubmit={handleSignUpSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="full-name">Username</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="full-name" 
                          placeholder="johndoe" 
                          className="pl-10" 
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="signup-email" 
                          type="email" 
                          placeholder="name@example.com" 
                          className="pl-10" 
                          value={signupEmail}
                          onChange={(e) => setSignupEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="signup-password" 
                          type="password" 
                          className="pl-10" 
                          value={signupPassword}
                          onChange={(e) => setSignupPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full">Create Account</Button>
                  </form>
                </CardContent>
                <CardFooter className="px-0">
                  <p className="text-xs text-muted-foreground text-center w-full">
                    By clicking continue, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}