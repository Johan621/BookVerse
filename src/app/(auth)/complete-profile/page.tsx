import { AuthLayout } from "@/components/auth/AuthLayout";
import { CompleteProfileForm } from "@/components/auth/forms/CompleteProfileForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Profile - Havnark",
  description: "Complete your Havnark profile.",
};

export default function CompleteProfilePage() {
  return (
    <AuthLayout
      title="Almost there!"
      subtitle="Add a few more details so others can get to know you better. This helps build a stronger community."
      quote="“Filling out my profile helped me connect with classmates taking the same electives. It's more than just exchanging books!”"
      quoteAuthor="Rahul M., Junior Year"
    >
      <CompleteProfileForm />
    </AuthLayout>
  );
}
