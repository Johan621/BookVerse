import { AuthLayout } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { MailCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Email - BookVerse AI",
  description: "Verify your email address to access BookVerse AI.",
};

export default function VerifyEmailPage() {
  return (
    <AuthLayout
      title="Verify your email"
      subtitle="We've sent a verification link to your email address. Please verify to continue."
      quote="“The platform's security features make me feel completely safe when exchanging books with other students.”"
      quoteAuthor="Priya K., Senior Year"
    >
      <div className="text-center space-y-6 pt-4">
        <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/30 shadow-lg shadow-primary/20">
          <MailCheck className="w-10 h-10" />
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          Didn't receive the email? Check your spam folder or click below to resend.
        </p>

        <div className="flex flex-col gap-4 pt-4">
          <Button variant="primary" className="w-full h-12 text-base font-bold">
            Resend Verification Email
          </Button>
          
          <Link href="/login">
            <Button variant="outline" className="w-full h-12 text-base font-semibold">
              Back to Login
            </Button>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
