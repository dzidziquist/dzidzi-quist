import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Download, Briefcase, GraduationCap, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const experience = [
  {
    id: 1,
    role: "Senior Data Analyst",
    company: "Company Name",
    period: "2022 - Present",
    description: "Lead data visualization initiatives and create executive dashboards using Tableau. Mentor junior analysts and establish data visualization best practices.",
    type: "work",
  },
  {
    id: 2,
    role: "Data Analyst",
    company: "Previous Company",
    period: "2020 - 2022",
    description: "Built interactive dashboards and automated reporting processes. Collaborated with stakeholders to translate business requirements into data solutions.",
    type: "work",
  },
  {
    id: 3,
    role: "Bachelor's in Computer Science",
    company: "University Name",
    period: "2016 - 2020",
    description: "Focused on data science and analytics. Graduated with honors and completed thesis on data visualization techniques.",
    type: "education",
  },
];

const certifications = [
  { name: "Tableau Desktop Specialist", issuer: "Tableau", year: "2023" },
  { name: "Google Data Analytics", issuer: "Google", year: "2022" },
  { name: "Python for Data Science", issuer: "IBM", year: "2021" },
];

const technologies = [
  "Tableau", "Python", "SQL", "Power BI", "Excel", "Figma",
  "Pandas", "NumPy", "Matplotlib", "Seaborn", "Git", "PostgreSQL"
];

const Resume = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-30" />
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium text-primary mb-4 block">My Journey</span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Resume
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A timeline of my professional experience, education, and certifications 
                in the world of data analytics.
              </p>
              <Button className="rounded-full" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-primary mb-2 block">Experience & Education</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Career Timeline
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {experience.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.15}>
                <motion.div
                  className="relative pl-8 pb-12 last:pb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Line */}
                  {index < experience.length - 1 && (
                    <div className="absolute left-[11px] top-10 w-0.5 h-full bg-border" />
                  )}

                  {/* Timeline Dot */}
                  <div className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center ${
                    item.type === "work" ? "bg-coral" : "bg-mint"
                  }`}>
                    {item.type === "work" ? (
                      <Briefcase className="h-3 w-3 text-white" />
                    ) : (
                      <GraduationCap className="h-3 w-3 text-white" />
                    )}
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className="p-6 rounded-2xl bg-card border border-border hover-lift ml-4"
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {item.period}
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-1">
                      {item.role}
                    </h3>
                    <p className="text-primary font-medium mb-3">{item.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary mb-2 block">Credentials</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Certifications
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <AnimatedSection key={cert.name} delay={index * 0.1}>
                <motion.div
                  className="p-6 rounded-2xl bg-gradient-to-br from-card to-muted/50 border border-border text-center hover-lift"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                >
                  <Award className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-display font-semibold mb-1">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-2">{cert.year}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary mb-2 block">Tech Stack</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Technologies & Tools
              </h2>
            </div>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {technologies.map((tech, index) => (
              <AnimatedSection key={tech} delay={index * 0.05}>
                <motion.span
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  whileHover={{ scale: 1.1, rotate: Math.random() * 6 - 3 }}
                >
                  {tech}
                </motion.span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
