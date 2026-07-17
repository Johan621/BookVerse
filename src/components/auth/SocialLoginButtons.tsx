"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Google, Github } from "lucide-react";

export const SocialLoginButtons = () => (
  <motion.div
    className="flex gap-4 justify-center mt-6"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Button variant="outline" className="flex items-center gap-2">
      <Google className="h-4 w-4" />
      Google
    </Button>
    <Button variant="outline" className="flex items-center gap-2">
      <Github className="h-4 w-4" />
      GitHub
    </Button>
  </motion.div>
);
