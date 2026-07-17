"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterValues } from "@/lib/validations/auth";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export const RegisterForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      college: "",
      department: "",
      semester: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: undefined,
    },
  });

  const onSubmit = async (data: RegisterValues) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    
    console.log("Register data:", data);
    toast.success("Successfully registered! (Mock)");
    // TODO: Implement Supabase Auth integration here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" placeholder="John Doe" {...register("fullName")} />
          {errors.fullName && <p className="text-xs text-red-500">{errors.fullName.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="john@college.edu" {...register("email")} />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="college">College / University</Label>
        <Input id="college" placeholder="State University" {...register("college")} />
        {errors.college && <p className="text-xs text-red-500">{errors.college.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="department">Department</Label>
          <Input id="department" placeholder="Computer Science" {...register("department")} />
          {errors.department && <p className="text-xs text-red-500">{errors.department.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="semester">Semester</Label>
          <Input id="semester" placeholder="e.g., 5th Semester" {...register("semester")} />
          {errors.semester && <p className="text-xs text-red-500">{errors.semester.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="••••••••" {...register("password")} />
          {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input id="confirmPassword" type="password" placeholder="••••••••" {...register("confirmPassword")} />
          {errors.confirmPassword && <p className="text-xs text-red-500">{errors.confirmPassword.message}</p>}
        </div>
      </div>

      <div className="flex items-start space-x-2 pt-2">
        <Checkbox id="acceptTerms" {...register("acceptTerms")} className="mt-1" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="acceptTerms" className="text-sm text-muted-foreground font-normal leading-relaxed cursor-pointer">
            I agree to the{" "}
            <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>
            {" "}and{" "}
            <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
          </Label>
          {errors.acceptTerms && <p className="text-xs text-red-500">{errors.acceptTerms.message}</p>}
        </div>
      </div>

      <Button type="submit" variant="primary" className="w-full h-12 text-base font-bold mt-4" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Creating account...
          </>
        ) : (
          "Sign Up"
        )}
      </Button>

      <p className="text-center text-sm text-muted-foreground mt-6">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-foreground hover:text-primary transition-colors">
          Sign In
        </Link>
      </p>
    </form>
  );
};
