import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { TypeWriter } from "@/components/TypeWriter";
import { MagneticButton } from "@/components/MagneticButton";

const roles = [
  "Full-Stack Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Code Craftsman",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[80px]"
        />
        
        {/* Animated rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full"
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Available for hire</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={fadeInUp}
            className="text-primary font-medium mb-4 text-lg"
          >
            Hello, I'm
          </motion.p>

          {/* Name with animated underline */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 relative inline-block"
          >
            <span className="text-gradient">Alex Chen</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary origin-left rounded-full"
            />
          </motion.h1>

          {/* Typing Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl lg:text-4xl font-display text-muted-foreground mb-8 h-[1.5em]"
          >
            <TypeWriter words={roles} />
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            I build exceptional digital experiences with modern technologies.
            Passionate about creating scalable, user-centric applications that
            make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <MagneticButton
              href="#projects"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative px-8 py-4 bg-gradient-primary text-primary-foreground font-medium rounded-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </MagneticButton>
            <MagneticButton
              href="#contact"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 glass glass-hover font-medium rounded-xl border-2 border-transparent hover:border-primary/50 transition-all"
            >
              Get in Touch
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-6"
          >
            {[
              { Icon: Github, href: "https://github.com", label: "GitHub" },
              { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 glass glass-hover rounded-full hover:glow-sm transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={fadeInUp}
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-12"
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm font-medium">Scroll Down</span>
              <ArrowDown className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
