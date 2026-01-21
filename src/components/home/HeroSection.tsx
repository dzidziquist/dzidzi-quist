import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient opacity-50" />
      
      {/* Decorative Blobs */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-coral/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-mint/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, -20, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-lavender/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight"
            >
              Hi, I'm{" "}
              <span className="gradient-text">Maureen Dzifa Quist</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              A data analyst who transforms complex datasets into compelling visual stories. 
              I specialize in Tableau, Python, and creative analytics to help businesses 
              make smarter, data-driven decisions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button asChild size="lg" className="rounded-full px-8 group">
                <Link to="/portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/about">
                  About Me
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right side - Illustration placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Placeholder for cat and monitor illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-coral/20 via-lavender/20 to-mint/20 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🖥️ 🐱</div>
                  <p className="text-sm text-muted-foreground">
                    Upload your cat & monitor illustration to replace this placeholder
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
