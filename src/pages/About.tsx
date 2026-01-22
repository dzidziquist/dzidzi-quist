import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import catIllustration from "@/assets/dzidzi-illustration.png";

const skills = ["Tableau", "Python", "SQL", "Data Visualization", "Data Analysis", "Stakeholder Communication"];

const funFacts = [
  { emoji: "🎨", fact: "Data is art waiting to be discovered" },
  { emoji: "☕", fact: "Coffee-powered data enthusiast" },
  { emoji: "📚", fact: "Lifelong learner & tutorial creator" },
];

const About = () => {
  const [isImageClicked, setIsImageClicked] = useState(false);

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Profile Image with Interactive Border */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    className={`relative cursor-pointer rounded-2xl p-1.5 transition-colors duration-300 border-4 ${
                      isImageClicked ? "border-primary" : "border-foreground"
                    }`}
                    onClick={() => setIsImageClicked(!isImageClicked)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-48 h-48 md:w-56 md:h-56 bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                      <span className="text-6xl">👩🏾‍💻</span>
                    </div>
                  </motion.div>
                  
                  {/* Cat Illustration - positioned below profile */}
                  <motion.img
                    src={catIllustration}
                    alt="Cat illustration"
                    className="w-20 h-20 absolute -bottom-6 -right-4 opacity-80"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                {/* About Text */}
                <div className="flex-1 pt-2">
                  <span className="text-sm font-medium text-primary mb-2 block">About Me</span>
                  <h1 className="text-2xl md:text-3xl font-display font-bold mb-4">
                    Hello, I'm <span className="text-primary">Dzidzi</span> 👋🏾
                  </h1>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                    A Business Intelligence Engineer based in Ghana, passionate about transforming 
                    complex data into clear, actionable insights through beautiful visualizations. 
                    I help organizations make data-driven decisions and love sharing knowledge through tutorials.
                  </p>

                  {/* Compact Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Compact Fun Facts */}
                  <div className="flex flex-wrap gap-3">
                    {funFacts.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span>{item.emoji}</span>
                        <span>{item.fact}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
