import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Download, Briefcase, GraduationCap, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
const experience = [{
  id: 1,
  role: "Business Intelligence Engineer",
  company: "Amazon Prime Video",
  location: "Seattle, WA",
  period: "Feb 2025 – Present",
  type: "work"
}, {
  id: 2,
  role: "SQL Instructional Assistant",
  company: "University of Southern California",
  location: "Los Angeles, CA",
  period: "Sep 2024 – Dec 2024",
  type: "work"
}, {
  id: 3,
  role: "Business Intelligence Engineer Intern",
  company: "Amazon Prime Video",
  location: "Seattle, WA",
  period: "Jun 2024 – Aug 2024",
  type: "work"
}, {
  id: 4,
  role: "Programme Policy Officer (Data Engineer/Analyst)",
  company: "World Food Programme",
  location: "Kabul, Afghanistan",
  period: "Apr 2021 – Jul 2023",
  type: "work"
}];
const education = [{
  id: 1,
  degree: "Master of Science in Business Analytics (STEM)",
  school: "University of Southern California, Marshall School of Business",
  location: "Los Angeles, CA",
  period: "Dec 2024",
  membership: "Business Analytics Student Association (BASA)",
  honors: "USC MSBA Fall 2023 Scholarship Award, USC Marshall MSBA Global Case Competition - Finalist (Nov 2023), Dean's List (May & Dec 2024)",
  experience: "USC Black Graduate Business Leaders - VP of Community and Events, USC MSBA Student Ambassador"
}, {
  id: 2,
  degree: "Bachelor of Arts in Economics and Statistics",
  school: "University of Ghana",
  location: "Accra, Ghana",
  period: "May 2016",
  honors: ""
}];
const certifications = [{
  name: "GIS Fundamentals (QGIS Training)",
  issuer: "QGIS"
}, {
  name: "Google Data Analytics",
  issuer: "Google"
}, {
  name: "Tableau Consumer, Author, Designer",
  issuer: "Tableau"
}];
const awards = ["Tableau Public Ambassador 2023", "Tableau Public Ambassador 2022", "Tableau Conference Gallery - Data Viz Displayed 2022 & 2020", "Tableau Featured Author 2021"];
const technologies = ["Python", "SQL", "NoSQL", "MS Excel", "Tableau", "PowerPoint", "Xlsform (ODK)", "Power BI", "Palantir", "Amazon QuickSight", "R", "Core AI/ML Skills"];
const Resume = () => {
  return <Layout>
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Top bar with Download button */}
          <div className="flex justify-end mb-8">
            <Button variant="outline" size="sm" className="rounded-full border-2 border-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary">
              <Download className="mr-2 h-3 w-3" />
              Download Resume
            </Button>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Experience & Certifications */}
            <div className="space-y-8">
              {/* Experience */}
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-coral flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">Relevant Experience</h2>
                </div>
                <div className="space-y-4">
                  {experience.filter(item => item.type === "work").map((item, index) => <motion.div key={item.id} className="p-5 rounded-xl bg-card border border-border" initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: index * 0.1
                }}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {item.period}
                        </div>
                        <span className="text-xs text-muted-foreground">{item.location}</span>
                      </div>
                      <h3 className="font-display font-semibold text-sm">{item.role}</h3>
                      <p className="text-primary text-sm">{item.company}</p>
                    </motion.div>)}
                </div>
              </AnimatedSection>

              {/* Certifications */}
              <AnimatedSection delay={0.1}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">Certifications</h2>
                </div>
                <div className="grid gap-3">
                  {certifications.map((cert, index) => <motion.div key={cert.name} className="p-4 rounded-xl bg-card border border-border flex items-center justify-between" initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: index * 0.1
                }}>
                      <div>
                        <h3 className="font-display font-semibold text-sm">{cert.name}</h3>
                        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </motion.div>)}
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column - Education, Awards & Technologies */}
            <div className="space-y-8">
              {/* Education */}
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">Education</h2>
                </div>
                <div className="space-y-4">
                  {education.map((item, index) => <motion.div key={item.id} className="p-5 rounded-xl bg-card border border-border" initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: index * 0.1
                }}>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                        <Calendar className="h-3 w-3" />
                        {item.period}
                      </div>
                      <h3 className="font-display font-semibold text-sm">{item.degree}</h3>
                      <p className="text-primary text-sm">{item.school}</p>
                      {item.membership && <p className="text-xs text-muted-foreground mt-2">
                          <span className="font-medium text-foreground">Membership:</span> {item.membership}
                        </p>}
                      {item.honors && <p className="text-xs text-muted-foreground mt-1">
                          <span className="font-medium text-foreground">Honors:</span> {item.honors}
                        </p>}
                      {item.experience && <p className="text-xs text-muted-foreground mt-1">
                          <span className="font-medium text-foreground">Experience:</span> {item.experience}
                        </p>}
                    </motion.div>)}
                </div>
              </AnimatedSection>

              {/* Awards */}
              <AnimatedSection delay={0.25}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/60 flex items-center justify-center">
                    <span className="text-lg">🏆</span>
                  </div>
                  <h2 className="text-2xl font-display font-bold">Awards</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {awards.map((award, index) => <motion.span key={award} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium" initial={{
                  opacity: 0,
                  scale: 0.8
                }} whileInView={{
                  opacity: 1,
                  scale: 1
                }} viewport={{
                  once: true
                }} transition={{
                  delay: index * 0.05
                }}>
                      {award}
                    </motion.span>)}
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
                  {technologies.map((tech, index) => <motion.span key={tech} className="px-3 py-1.5 rounded-full bg-card border border-border text-sm font-medium" initial={{
                  opacity: 0,
                  scale: 0.8
                }} whileInView={{
                  opacity: 1,
                  scale: 1
                }} viewport={{
                  once: true
                }} transition={{
                  delay: index * 0.03
                }} whileHover={{
                  scale: 1.05
                }}>
                      {tech}
                    </motion.span>)}
                </div>
              </AnimatedSection>

            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Resume;