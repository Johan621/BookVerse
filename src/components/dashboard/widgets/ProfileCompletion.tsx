import * as React from "react";
import { Button } from "@/components/ui/Button";
import { UserCircle2, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";

export const ProfileCompletion = () => {
  const completionPercentage = 60;

  return (
    <FadeIn>
      <div className="flex flex-col sm:flex-row items-center sm:justify-between p-6 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border border-primary/20 shadow-inner relative overflow-hidden gap-6">
        
        {/* Background glow */}
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-32 bg-primary/30 blur-[50px] rounded-full pointer-events-none" />

        <div className="flex items-center gap-4 relative z-10 w-full sm:w-auto">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
            <UserCircle2 className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-foreground">Profile 60% Complete</h3>
            <p className="text-sm text-muted-foreground mt-1">Add your bio and interests to get better matches.</p>
            
            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-white/10 rounded-full mt-3 overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        </div>

        <Link href="/complete-profile" className="w-full sm:w-auto relative z-10 shrink-0">
          <Button variant="primary" className="w-full">
            Complete Profile <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </FadeIn>
  );
};
