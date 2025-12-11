import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";
import { useRef } from "react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const ref = useRef<HTMLElement>(null);
  
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  const rotateX = useTransform(springY, [0, 1], [5, -5]);
  const rotateY = useTransform(springX, [0, 1], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl glass h-full ${
        featured ? "row-span-2 md:col-span-2" : ""
      }`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-video">
        <motion.img
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.slice(0, featured ? 6 : 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Title & Description */}
        <h3 className={`font-display font-bold text-foreground mb-2 ${
          featured ? "text-2xl md:text-3xl" : "text-xl"
        }`}>
          {project.title}
        </h3>
        <p className={`text-muted-foreground mb-4 ${
          featured ? "text-base" : "text-sm line-clamp-2"
        }`}>
          {featured ? project.longDescription : project.description}
        </p>

        {/* Links */}
        <div className="flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium glass rounded-lg hover:bg-primary/20 transition-colors"
            >
              <Github size={16} />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Featured Badge */}
      {featured && (
        <motion.div 
          initial={{ scale: 0, rotate: -12 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold bg-gradient-primary text-primary-foreground rounded-full"
        >
          ⭐ Featured
        </motion.div>
      )}

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20" />
      </div>
    </motion.article>
  );
}
