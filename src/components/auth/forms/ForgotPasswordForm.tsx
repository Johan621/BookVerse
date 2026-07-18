"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema, type ForgotPasswordValues } from "@/lib/validations/auth";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Loader2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export const ForgotPasswordForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (_data: ForgotPasswordValues) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
    
    toast.success("Reset link sent! (Mock)");
  };

  if (isSubmitted) {
    return (
      <div className="text-center space-y-6">
        <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold">Check your email</h3>
        <p className="text-muted-foreground">
          We&apos;ve sent a password reset link to your email address. Please check your inbox and spam folder.
        </p>
        <Button variant="outline" className="w-full" onClick={() => setIsSubmitted(false)}>
          Try another email
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="student@college.edu"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-500 font-medium">{errors.email.message}</p>
        )}
      </div>

      <Button type="submit" variant="primary" className="w-full h-12 text-base font-bold" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending link...
          </>
        ) : (
          "Send Reset Link"
        )}
      </Button>

      <div className="text-center mt-6">
        <Link href="/login" className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Login
        </Link>
      </div>
    </form>
  );
};
