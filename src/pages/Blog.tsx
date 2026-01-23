import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Clock, ArrowRight, Search, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const categories = ["All", "Tableau", "Python", "Tutorials", "Insights", "Career"];

const posts = [
  {
    id: 1,
    title: "Building Interactive Dashboards with Tableau",
    excerpt: "Learn the key principles of creating engaging data visualizations.",
    category: "Tableau",
    readTime: "8 min",
    date: "Jan 15, 2024",
  },
  {
    id: 2,
    title: "Python for Data Analysis",
    excerpt: "Getting started with pandas and matplotlib.",
    category: "Python",
    readTime: "12 min",
    date: "Jan 10, 2024",
  },
  {
    id: 3,
    title: "The Art of Data Storytelling",
    excerpt: "Transform numbers into compelling narratives.",
    category: "Insights",
    readTime: "6 min",
    date: "Jan 5, 2024",
  },
  {
    id: 4,
    title: "LOD Expressions Explained",
    excerpt: "Master Level of Detail expressions in Tableau.",
    category: "Tutorials",
    readTime: "10 min",
    date: "Dec 28, 2023",
  },
  {
    id: 5,
    title: "Breaking Into Data Analytics",
    excerpt: "My career journey and tips for aspiring analysts.",
    category: "Career",
    readTime: "7 min",
    date: "Dec 20, 2023",
  },
  {
    id: 6,
    title: "Automating Reports with Python",
    excerpt: "Combine Python with Tableau Server automation.",
    category: "Python",
    readTime: "15 min",
    date: "Dec 15, 2023",
  },
];

const categoryColors: Record<string, string> = {
  Tableau: "bg-coral/10 text-coral",
  Python: "bg-mint/20 text-accent-foreground",
  Tutorials: "bg-lavender/20 text-secondary-foreground",
  Insights: "bg-peach/20 text-foreground",
  Career: "bg-soft-pink/20 text-foreground",
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts
    .filter(post => activeCategory === "All" || post.category === activeCategory)
    .filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <Layout>
      <section className="h-[calc(100vh-140px)] flex flex-col overflow-hidden">
        <div className="container mx-auto px-6 py-6 flex flex-col h-full">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-4">
              <h1 className="text-xl md:text-2xl font-display font-bold mb-2">
                Insights & Tutorials
              </h1>
              <p className="text-sm text-muted-foreground">
                Sharing knowledge about data visualization and analytics.
              </p>
            </div>
          </AnimatedSection>

          {/* Search and Filter */}
          <AnimatedSection>
            <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-4">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 rounded-full h-9 text-sm"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto">
                <Tag className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    className="rounded-full whitespace-nowrap h-7 text-xs px-3"
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Posts Grid */}
          <div className="flex-1 overflow-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 0.05}>
                  <motion.article
                    className="group p-4 rounded-xl bg-card border border-border hover-lift"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-sm font-display font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-1">
                      {post.title}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed mb-2 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:gap-2 transition-all"
                      >
                        Read
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </motion.article>
                </AnimatedSection>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-8 text-muted-foreground text-sm">
                No articles found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
