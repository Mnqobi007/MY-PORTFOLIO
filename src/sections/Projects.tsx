import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { fadeInUp, staggerContainer } from "@/utils/animations";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <motion.span 
              className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4 px-4 py-2 rounded-full glass"
              whileHover={{ scale: 1.05 }}
            >
              ✨ My Work
            </motion.span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
              A selection of projects that showcase my expertise in building
              full-stack applications with modern technologies.
            </p>
          </motion.div>

          {/* Asymmetric Grid Layout */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
          >
            {/* Featured Project - Spans 2 columns and 2 rows */}
            {featuredProject && (
              <motion.div
                variants={fadeInUp}
                className="md:col-span-2 md:row-span-2"
              >
                <ProjectCard project={featuredProject} featured />
              </motion.div>
            )}

            {/* Other Projects - Varied sizes */}
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className={
                  index === 0
                    ? "lg:row-span-1"
                    : index === 1
                    ? "lg:row-span-1"
                    : ""
                }
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-x-1/2" />
    </section>
  );
}
