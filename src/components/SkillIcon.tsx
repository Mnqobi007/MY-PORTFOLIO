import { motion } from "framer-motion";
import { skillBounce } from "@/utils/animations";
import { LucideIcon } from "lucide-react";

interface SkillIconProps {
  name: string;
  Icon: LucideIcon;
}

export function SkillIcon({ name, Icon }: SkillIconProps) {
  return (
    <motion.div
      variants={skillBounce}
      className="group flex flex-col items-center gap-3"
    >
      <div className="relative p-4 rounded-xl glass glass-hover group-hover:glow-sm transition-all duration-300">
        <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
      </div>
      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
        {name}
      </span>
    </motion.div>
  );
}
