"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { toast } from "sonner";

export const SocialLoginButtons = () => (
  <motion.div
    className="flex flex-wrap gap-4 justify-center mt-6"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Button onClick={() => toast.info("Coming soon!")} variant="outline" className="flex items-center gap-2">
      <FaGoogle className="h-4 w-4" />
      Google
    </Button>
    <Button onClick={() => toast.info("Coming soon!")} variant="outline" className="flex items-center gap-2">
      <FaGithub className="h-4 w-4" />
      GitHub
    </Button>
  </motion.div>
);
