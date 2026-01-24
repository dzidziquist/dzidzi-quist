import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}
export const AnimatedSection = ({
  children,
  className = "",
  delay = 0
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return;
};