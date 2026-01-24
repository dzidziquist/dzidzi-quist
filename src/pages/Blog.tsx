import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Clock, ArrowRight, Search, Tag, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const categories = ["All", "Tableau", "Python", "Tutorials", "Insights", "Career"];
const posts = [{
  id: 1,
  title: "Building Interactive Dashboards with Tableau: A Complete Guide",
  excerpt: "Learn the key principles of creating engaging, user-friendly data visualizations that tell a story and drive action.",
  category: "Tableau",
  readTime: "8 min read",
  date: "January 15, 2024",
  featured: true
}, {
  id: 2,
  title: "Python for Data Analysis: A Beginner's Guide",
  excerpt: "Getting started with pandas, numpy, and matplotlib for your data analysis journey. Everything you need to know.",
  category: "Python",
  readTime: "12 min read",
  date: "January 10, 2024",
  featured: true
}, {
  id: 3,
  title: "The Art of Data Storytelling",
  excerpt: "How to transform raw numbers into compelling narratives that resonate with stakeholders and drive business decisions.",
  category: "Insights",
  readTime: "6 min read",
  date: "January 5, 2024",
  featured: false
}, {
  id: 4,
  title: "Advanced Tableau Calculations: LOD Expressions Explained",
  excerpt: "Master Level of Detail expressions to create more powerful and flexible calculations in your dashboards.",
  category: "Tutorials",
  readTime: "10 min read",
  date: "December 28, 2023",
  featured: false
}, {
  id: 5,
  title: "Breaking Into Data Analytics: My Career Journey",
  excerpt: "Personal insights and lessons learned from transitioning into a data analytics career. Tips for aspiring analysts.",
  category: "Career",
  readTime: "7 min read",
  date: "December 20, 2023",
  featured: false
}, {
  id: 6,
  title: "Automating Reports with Python and Tableau",
  excerpt: "Combine the power of Python scripting with Tableau Server to automate your reporting workflows.",
  category: "Python",
  readTime: "15 min read",
  date: "December 15, 2023",
  featured: false
}];
const categoryColors: Record<string, string> = {
  Tableau: "bg-coral/10 text-coral",
  Python: "bg-mint/20 text-accent-foreground",
  Tutorials: "bg-lavender/20 text-secondary-foreground",
  Insights: "bg-peach/20 text-foreground",
  Career: "bg-soft-pink/20 text-foreground"
};
const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const filteredPosts = posts.filter(post => activeCategory === "All" || post.category === activeCategory).filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
  const featuredPosts = posts.filter(post => post.featured);
  return <Layout>
      {/* Hero Section */}
      


      {/* All Posts with Filter */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Search and Filter */}
          <AnimatedSection>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search articles..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 rounded-full" />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto">
                <Tag className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                {categories.map(category => <Button key={category} variant={activeCategory === category ? "default" : "outline"} size="sm" className="rounded-full whitespace-nowrap" onClick={() => setActiveCategory(category)}>
                    {category}
                  </Button>)}
              </div>
            </div>
          </AnimatedSection>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => <AnimatedSection key={post.id} delay={index * 0.1}>
                <motion.article className="group h-full flex flex-col p-6 rounded-2xl bg-card border border-border hover-lift" whileHover={{
              scale: 1.02
            }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                      Read
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </motion.article>
              </AnimatedSection>)}
          </div>

          {filteredPosts.length === 0 && <div className="text-center py-16 text-muted-foreground">
              No articles found matching your criteria.
            </div>}
        </div>
      </section>
    </Layout>;
};
export default Blog;