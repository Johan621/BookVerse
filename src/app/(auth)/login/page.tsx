"use client";

import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/forms/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Login"
      subtitle="Welcome back! Sign in to continue."
    >
      <LoginForm />
    </AuthLayout>
  );
}
