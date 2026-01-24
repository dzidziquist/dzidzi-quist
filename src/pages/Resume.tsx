import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Download, Briefcase, GraduationCap, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
const experience = [{
  id: 1,
  role: "Senior Data Analyst",
  company: "Company Name",
  period: "2022 - Present",
  description: "Lead data visualization initiatives and create executive dashboards using Tableau. Mentor junior analysts and establish data visualization best practices.",
  type: "work"
}, {
  id: 2,
  role: "Data Analyst",
  company: "Previous Company",
  period: "2020 - 2022",
  description: "Built interactive dashboards and automated reporting processes. Collaborated with stakeholders to translate business requirements into data solutions.",
  type: "work"
}, {
  id: 3,
  role: "Bachelor's in Computer Science",
  company: "University Name",
  period: "2016 - 2020",
  description: "Focused on data science and analytics. Graduated with honors and completed thesis on data visualization techniques.",
  type: "education"
}];
const certifications = [{
  name: "Tableau Desktop Specialist",
  issuer: "Tableau",
  year: "2023"
}, {
  name: "Google Data Analytics",
  issuer: "Google",
  year: "2022"
}, {
  name: "Python for Data Science",
  issuer: "IBM",
  year: "2021"
}];
const technologies = ["Tableau", "Python", "SQL", "Power BI", "Excel", "Figma", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Git", "PostgreSQL"];
const Resume = () => {
  return <Layout>
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Experience & Education */}
            <div className="space-y-8">
              {/* Experience */}
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-coral flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">Experience</h2>
                </div>
                <div className="space-y-4">
                  {experience.filter(item => item.type === "work").map((item, index) => (
                    <motion.div 
                      key={item.id}
                      className="p-5 rounded-xl bg-card border border-border"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                        <Calendar className="h-3 w-3" />
                        {item.period}
                      </div>
                      <h3 className="font-display font-semibold">{item.role}</h3>
                      <p className="text-primary text-sm">{item.company}</p>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Education */}
              <AnimatedSection delay={0.2}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-mint flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">Education</h2>
                </div>
                <div className="space-y-4">
                  {experience.filter(item => item.type === "education").map((item, index) => (
                    <motion.div 
                      key={item.id}
                      className="p-5 rounded-xl bg-card border border-border"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                        <Calendar className="h-3 w-3" />
                        {item.period}
                      </div>
                      <h3 className="font-display font-semibold">{item.role}</h3>
                      <p className="text-primary text-sm">{item.company}</p>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column - Certifications & Technologies */}
            <div className="space-y-8">
              {/* Certifications */}
              <AnimatedSection delay={0.1}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">Certifications</h2>
                </div>
                <div className="grid gap-3">
                  {certifications.map((cert, index) => (
                    <motion.div 
                      key={cert.name}
                      className="p-4 rounded-xl bg-card border border-border flex items-center justify-between"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div>
                        <h3 className="font-display font-semibold text-sm">{cert.name}</h3>
                        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        {cert.year}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Technologies */}
              <AnimatedSection delay={0.3}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-lg">🛠</span>
                  </div>
                  <h2 className="text-2xl font-display font-bold">Technologies & Tools</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.span 
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-card border border-border text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </AnimatedSection>

              {/* Download Button */}
              <AnimatedSection delay={0.4}>
                <Button className="rounded-full w-full" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Resume;