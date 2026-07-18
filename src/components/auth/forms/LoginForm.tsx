"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginValues } from "@/lib/validations/auth";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (_data: LoginValues) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    
    toast.success("Successfully logged in! (Mock)");
  };

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

      <div className="space-y-2 relative">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="••••••••"
          {...register("password")}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-9 -translate-y-1/2 text-muted-foreground"
          aria-label="Toggle password visibility"
        >
          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
        {errors.password && (
          <p className="text-sm text-red-500 font-medium">{errors.password.message}</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox id="rememberMe" {...register("rememberMe")} />
          <Label htmlFor="rememberMe" className="text-sm text-muted-foreground font-normal cursor-pointer">
            Remember me
          </Label>
        </div>
        <Link
          href="/forgot-password"
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Forgot password?
        </Link>
      </div>

      <Button type="submit" variant="primary" className="w-full h-12 text-base font-bold" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Signing in...
          </>
        ) : (
          "Sign In"
        )}
      </Button>

      <p className="text-center text-sm text-muted-foreground mt-6">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-semibold text-foreground hover:text-primary transition-colors">
          Create one now
        </Link>
      </p>
    </form>
  );
};
