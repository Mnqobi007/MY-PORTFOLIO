export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CloudSync Platform",
    description: "A full-stack cloud collaboration platform with real-time sync capabilities.",
    longDescription: "Built a comprehensive cloud platform enabling teams to collaborate in real-time. Features include document editing, file sharing, video conferencing, and project management tools. Implemented WebSocket connections for instant updates and used microservices architecture for scalability.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "WebSocket", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "AI Analytics Dashboard",
    description: "Machine learning powered analytics with predictive insights.",
    longDescription: "Developed an intelligent analytics dashboard that uses machine learning to provide predictive insights. Features automated report generation and anomaly detection.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 3,
    title: "E-Commerce Engine",
    description: "Scalable marketplace with payment integration and inventory management.",
    longDescription: "Created a robust e-commerce solution with features like multi-vendor support, real-time inventory tracking, and integrated payment processing with Stripe.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tech: ["Next.js", "Stripe", "MongoDB", "TypeScript"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 4,
    title: "DevOps Automation Suite",
    description: "CI/CD pipeline automation with monitoring and alerting system.",
    longDescription: "Built a comprehensive DevOps toolkit that automates deployment pipelines, monitors system health, and provides intelligent alerting based on custom thresholds.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    tech: ["Go", "Kubernetes", "Terraform", "Prometheus"],
    github: "https://github.com",
    featured: false,
  },
];
