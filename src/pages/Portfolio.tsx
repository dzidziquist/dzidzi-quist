import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowUpRight, BarChart2, Code, Palette, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Tableau", "Python", "Data Viz", "Figma"];

const projects = [
  {
    id: 1,
    title: "Sales Performance Dashboard",
    description: "Interactive Tableau dashboard tracking KPIs across regions with drill-down capabilities and real-time data updates.",
    category: "Tableau",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "Customer Segmentation Analysis",
    description: "Data-driven customer segments using Python clustering algorithms for targeted marketing strategies.",
    category: "Python",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "Financial Trends Visualization",
    description: "Executive-level financial reporting with interactive forecasting and trend analysis.",
    category: "Data Viz",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: 4,
    title: "E-commerce Analytics Platform",
    description: "Comprehensive Tableau dashboard for tracking e-commerce metrics, conversion rates, and customer behavior.",
    category: "Tableau",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: 5,
    title: "Healthcare Data Dashboard",
    description: "Patient outcome analysis and hospital performance metrics visualization.",
    category: "Data Viz",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: 6,
    title: "Dashboard UI Kit",
    description: "Figma design system for data visualization and analytics dashboards.",
    category: "Figma",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
    link: "#",
  },
];

const categoryIcons: Record<string, typeof BarChart2> = {
  Tableau: BarChart2,
  Python: Code,
  "Data Viz": BarChart2,
  Figma: Palette,
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-30" />
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium text-primary mb-4 block">My Work</span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Portfolio
              </h1>
              <p className="text-xl text-muted-foreground">
                A collection of data visualization projects, dashboards, and analytics work
                that showcase my skills in turning data into insights.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/80 backdrop-blur-sm z-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <Filter className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                className="rounded-full whitespace-nowrap"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => {
                const Icon = categoryIcons[project.category] || BarChart2;
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <motion.div
                        className="relative rounded-2xl overflow-hidden bg-card border border-border hover-lift"
                        whileHover={{ scale: 1.02 }}
                      >
                        {/* Image */}
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="p-2 rounded-lg bg-primary/10">
                              <Icon className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-xs font-medium text-muted-foreground">
                              {project.category}
                            </span>
                          </div>

                          <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>

                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {project.description}
                          </p>
                        </div>

                        {/* Hover Arrow */}
                        <motion.div
                          className="absolute top-4 right-4 p-2 rounded-full bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ scale: 1.1 }}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </motion.div>
                      </motion.div>
                    </a>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
