import { AuthLayout } from "@/components/auth/AuthLayout";
import { toast } from "sonner";

interface SignUpPageProps {
  onLogin: (email: string) => void;
}

export function SignUpPage({ onLogin }: SignUpPageProps) {
  const handleSignUp = (email: string) => {
    toast.success("Account created successfully!");
    onLogin(email);
  };

  return (
    <AuthLayout 
      onLogin={onLogin} 
      onSignUp={handleSignUp}
      defaultTab="signup" 
    />
  );
}