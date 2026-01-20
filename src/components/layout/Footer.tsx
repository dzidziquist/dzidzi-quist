import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/dzidziquist", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mdzquist", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/dzidziquist", label: "Twitter" },
  { icon: BarChart3, href: "https://public.tableau.com/app/profile/maureen.quist", label: "Tableau Public" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full gradient-warm flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">M</span>
              </div>
              <span className="font-display font-semibold">Maureen Dzifa Quist</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link to="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors playful-underline">
              Portfolio
            </Link>
            <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors playful-underline">
              Blog
            </Link>
            <Link to="/resume" className="text-muted-foreground hover:text-foreground transition-colors playful-underline">
              Resume
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
