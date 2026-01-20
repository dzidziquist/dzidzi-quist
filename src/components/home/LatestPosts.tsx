import { motion } from "framer-motion";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";

const posts = [
  {
    id: 1,
    title: "Building Interactive Dashboards with Tableau",
    excerpt: "Learn the key principles of creating engaging, user-friendly data visualizations that tell a story.",
    category: "Tableau",
    readTime: "5 min read",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Python for Data Analysis: A Beginner's Guide",
    excerpt: "Getting started with pandas, numpy, and matplotlib for your data analysis journey.",
    category: "Python",
    readTime: "8 min read",
    date: "2024-01-10",
  },
  {
    id: 3,
    title: "The Art of Data Storytelling",
    excerpt: "How to transform raw numbers into compelling narratives that drive business decisions.",
    category: "Insights",
    readTime: "6 min read",
    date: "2024-01-05",
  },
];

const categoryColors: Record<string, string> = {
  Tableau: "bg-coral/10 text-coral",
  Python: "bg-mint/20 text-accent-foreground",
  Insights: "bg-lavender/20 text-secondary-foreground",
};

export const LatestPosts = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="text-sm font-medium text-primary mb-2 block">From the Blog</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Latest Articles
              </h2>
            </div>
            <Button asChild variant="outline" className="rounded-full self-start md:self-auto">
              <Link to="/blog">
                Read All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <AnimatedSection key={post.id} delay={index * 0.1}>
              <motion.article
                className="group h-full flex flex-col p-6 rounded-2xl bg-card border border-border hover-lift"
                whileHover={{ scale: 1.02 }}
              >
                {/* Category & Read Time */}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  <BookOpen className="h-4 w-4" />
                  Read Article
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
