import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { MouseGlow } from "@/components/MouseGlow";
import { FloatingParticles } from "@/components/FloatingParticles";
import { ScrollProgress } from "@/components/ScrollProgress";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ScrollProgress />
      <MouseGlow />
      <FloatingParticles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border relative z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-muted-foreground text-sm"
          >
            © {new Date().getFullYear()} Alex Chen. Crafted with ❤️ using React & Framer Motion.
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
