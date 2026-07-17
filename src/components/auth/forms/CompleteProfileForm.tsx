"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { completeProfileSchema, type CompleteProfileValues } from "@/lib/validations/auth";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const CompleteProfileForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompleteProfileValues>({
    resolver: zodResolver(completeProfileSchema),
    defaultValues: {
      bio: "",
      interests: "",
      phone: "",
    },
  });

  const onSubmit = async (data: CompleteProfileValues) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    
    console.log("Complete Profile data:", data);
    toast.success("Profile updated successfully! (Mock)");
    router.push("/dashboard");
    // TODO: Implement Supabase Auth update profile
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="bio">Bio (Optional)</Label>
        <Input
          id="bio"
          placeholder="Tell others a bit about yourself..."
          {...register("bio")}
        />
        {errors.bio && (
          <p className="text-sm text-red-500 font-medium">{errors.bio.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="interests">Interests / Subjects (Optional)</Label>
        <Input
          id="interests"
          placeholder="e.g. Machine Learning, Physics"
          {...register("interests")}
        />
        {errors.interests && (
          <p className="text-sm text-red-500 font-medium">{errors.interests.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number (Optional)</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+91 98765 43210"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-sm text-red-500 font-medium">{errors.phone.message}</p>
        )}
      </div>

      <Button type="submit" variant="primary" className="w-full h-12 text-base font-bold" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Saving...
          </>
        ) : (
          "Complete Profile"
        )}
      </Button>

      <div className="text-center mt-4">
        <Button 
          type="button" 
          variant="ghost" 
          className="text-muted-foreground hover:text-foreground"
          onClick={() => router.push("/dashboard")}
        >
          Skip for now
        </Button>
      </div>
    </form>
  );
};
