import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Database,
  Server,
  GitBranch,
  Terminal,
} from "lucide-react";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/utils/animations";
import { SkillIcon } from "@/components/SkillIcon";

const skills = [
  { name: "React", Icon: Code2 },
  { name: "Node.js", Icon: Server },
  { name: "TypeScript", Icon: Terminal },
  { name: "PostgreSQL", Icon: Database },
  { name: "Python", Icon: Code2 },
  { name: "Git", Icon: GitBranch },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <motion.div variants={slideInLeft} className="space-y-8">
            <div>
              <motion.span 
                className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4 px-4 py-2 rounded-full glass"
              >
                About Me
              </motion.span>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Crafting Digital
                <span className="text-gradient"> Experiences</span>
              </h3>
            </div>
            
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
              <p>
                Build exceptional digital experiences with modern technologies. Passionate about creating scalable, user-centric applications that make a difference.
              </p>
              <p>
                With 1+ years of full-stack experience, I specialize in React, Node.js, and cloud architecture—transforming complex problems into elegant solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { value: "1+", label: "Years" },
                { value: "3+", label: "Projects" },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  className="text-center px-6 py-4 rounded-xl glass"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-display font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={slideInRight} className="relative">
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              
              <h4 className="text-xl font-display font-semibold mb-8 text-center relative z-10">
                Technologies I Work With
              </h4>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-4 gap-6 relative z-10"
              >
                {skills.map((skill) => (
                  <SkillIcon key={skill.name} {...skill} />
                ))}
              </motion.div>
            </div>

            {/* Simple decorative ring */}
            <div className="absolute -right-16 -bottom-16 w-32 h-32 border border-primary/10 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
