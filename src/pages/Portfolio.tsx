import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowUpRight, BarChart2, Code, Palette, Filter, Map, Music, Tv, ShoppingCart, Vote, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import portfolio images
import genderInequalityImg from "@/assets/portfolio/gender-inequality-parliament.png";
import electionsImg from "@/assets/portfolio/trend-elections-ghana.png";
import musicPlaysImg from "@/assets/portfolio/music-plays-2023.png";
import accraMapImg from "@/assets/portfolio/accra-map-layers.png";
import rugratsImg from "@/assets/portfolio/rugrats-viz.png";
import boondocksImg from "@/assets/portfolio/boondocks-viz.png";
import salesOverviewImg from "@/assets/portfolio/sales-overview.png";

const categories = ["All", "Tableau", "Python", "Data Viz"];

const projects = [
  {
    id: 1,
    title: "Gender Inequality in Ghana's Parliament",
    description: "Interactive infographic analyzing gender representation across parliamentary sessions, regional distribution, and party representation from 1960-2020.",
    category: "Tableau",
    image: genderInequalityImg,
    link: "https://public.tableau.com/app/profile/dzidzi.quist",
    icon: Users
  },
  {
    id: 2,
    title: "Trend of Elections in Ghana",
    description: "Comprehensive visualization of Ghana's electoral history, examining voting patterns, regional preferences, and macroeconomic factors affecting election results.",
    category: "Tableau",
    image: electionsImg,
    link: "https://public.tableau.com/app/profile/dzidzi.quist",
    icon: Vote
  },
  {
    id: 3,
    title: "Know Me By My 2023 Music Plays",
    description: "Personal data visualization of Apple Music listening habits - 27,215 minutes of music analyzed by top songs, monthly patterns, and listening trends.",
    category: "Data Viz",
    image: musicPlaysImg,
    link: "https://public.tableau.com/app/profile/dzidzi.quist",
    icon: Music
  },
  {
    id: 4,
    title: "Places I Have Been To in Accra",
    description: "Interactive map using parameter actions and map layers in Tableau, showcasing locations visited across Greater Accra with toggle-able categories.",
    category: "Tableau",
    image: accraMapImg,
    link: "https://public.tableau.com/app/profile/dzidzi.quist",
    icon: Map
  },
  {
    id: 5,
    title: "Rugrats: Animated Series Analysis",
    description: "Creative data visualization exploring the Rugrats animated series (1991-2001) - season ratings, character timelines, and episode premier history.",
    category: "Data Viz",
    image: rugratsImg,
    link: "https://public.tableau.com/app/profile/dzidzi.quist",
    icon: Tv
  },
  {
    id: 6,
    title: "The Boondocks: Series Deep Dive",
    description: "Visual analysis of The Boondocks animated series featuring character breakdowns, episode ratings per season, and series timeline from 2005-2014.",
    category: "Data Viz",
    image: boondocksImg,
    link: "https://public.tableau.com/app/profile/dzidzi.quist",
    icon: Tv
  },
  {
    id: 7,
    title: "Sales Overview Dashboard",
    description: "Executive sales dashboard with KPI tracking, regional breakdowns, sales trends, and category analysis for business intelligence reporting.",
    category: "Tableau",
    image: salesOverviewImg,
    link: "https://public.tableau.com/app/profile/dzidzi.quist",
    icon: ShoppingCart
  },
  {
    id: 8,
    title: "Consumer Purchase Journey Analysis",
    description: "Market research project analyzing consumer buying behavior for smart home products using qualitative research methods and customer insights frameworks.",
    category: "Python",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    link: "#",
    icon: Code
  },
  {
    id: 9,
    title: "Customer Commitment Study",
    description: "Five-factor customer commitment analysis for Crew's Cup using Python - examining economic, forced, habitual, normative, and affective commitment drivers.",
    category: "Python",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "#",
    icon: Code
  }
];

const categoryIcons: Record<string, typeof BarChart2> = {
  Tableau: BarChart2,
  Python: Code,
  "Data Viz": Palette
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
        <div className="absolute inset-0 animated-gradient opacity-30 bg-inherit" />
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-display font-bold mb-6 md:text-3xl">
                Portfolio
              </h1>
              <p className="text-muted-foreground text-base">
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
            {categories.map(category => (
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
                const Icon = project.icon || categoryIcons[project.category] || BarChart2;
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
