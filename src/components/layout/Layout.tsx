import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isResumePage = location.pathname === "/resume";

  // All pages: flex column layout with footer at bottom
  const getContainerClass = () => {
    return "min-h-screen flex flex-col";
  };

  const getMainClass = () => {
    if (isHomePage) return "flex-1";
    if (isResumePage) return "flex-1 pt-16 md:pt-20";
    return "flex-1 pt-20";
  };

  return (
    <div className={getContainerClass()}>
      <Header />
      <main className={getMainClass()}>{children}</main>
      
    </div>
  );
};
