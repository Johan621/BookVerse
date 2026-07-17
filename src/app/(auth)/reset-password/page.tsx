import { AuthLayout } from "@/components/auth/AuthLayout";
import { ResetPasswordForm } from "@/components/auth/forms/ResetPasswordForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Set New Password - BookVerse AI",
  description: "Set a new password for your BookVerse AI account.",
};

export default function ResetPasswordPage() {
  return (
    <AuthLayout
      title="Create New Password"
      subtitle="Your new password must be different from previous used passwords."
      quote="“The platform's security features make me feel completely safe when exchanging books with other students.”"
      quoteAuthor="Priya K., Senior Year"
    >
      <ResetPasswordForm />
    </AuthLayout>
  );
}
