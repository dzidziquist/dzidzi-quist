import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Code, Database, BarChart3, Palette, Brain, Users } from "lucide-react";

const skills = [
  { icon: BarChart3, name: "Tableau", level: 95, color: "bg-coral" },
  { icon: Code, name: "Python", level: 85, color: "bg-mint" },
  { icon: Database, name: "SQL", level: 90, color: "bg-lavender" },
  { icon: Palette, name: "Data Visualization", level: 92, color: "bg-peach" },
  { icon: Brain, name: "Data Analysis", level: 88, color: "bg-soft-pink" },
  { icon: Users, name: "Stakeholder Communication", level: 90, color: "bg-coral" },
];

const funFacts = [
  { emoji: "🎨", fact: "I believe data is art waiting to be discovered" },
  { emoji: "☕", fact: "Coffee-powered data enthusiast" },
  { emoji: "📚", fact: "Lifelong learner and tutorial creator" },
  { emoji: "🌍", fact: "Based in Ghana, working globally" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-30" />
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-coral/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <span className="text-sm font-medium text-primary mb-4 block">About Me</span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Hello, I'm <span className="gradient-text">Maureen</span> 👋
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Data Analyst and Visualization Specialist based in Ghana, 
                dedicated to transforming complex datasets into clear, actionable insights 
                through beautiful and intuitive visualizations.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With expertise in Tableau, Python, and SQL, I help organizations make 
                data-driven decisions by creating interactive dashboards and compelling 
                data stories. I'm also passionate about sharing knowledge through tutorials 
                and blog posts, helping others on their data journey.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary mb-2 block">Expertise</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Skills & Technologies
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <AnimatedSection key={skill.name} delay={index * 0.1}>
                <motion.div
                  className="p-6 rounded-2xl bg-card border border-border hover-lift"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${skill.color}/20`}>
                      <skill.icon className="h-6 w-6" />
                    </div>
                    <span className="font-display font-semibold">{skill.name}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 block text-right">
                    {skill.level}%
                  </span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary mb-2 block">Get to Know Me</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Fun Facts
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {funFacts.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="p-6 rounded-2xl bg-gradient-to-br from-card to-muted/50 border border-border text-center hover-lift"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <span className="text-4xl mb-4 block">{item.emoji}</span>
                  <p className="text-sm text-muted-foreground">{item.fact}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
