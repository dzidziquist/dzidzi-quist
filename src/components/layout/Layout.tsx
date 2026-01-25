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
  const isFullScreenPage = isHomePage || isResumePage;

  return (
    <div className={isFullScreenPage ? "h-screen overflow-hidden" : "min-h-screen flex flex-col"}>
      <Header />
      <main className={isFullScreenPage ? "h-full" : "flex-1 pt-20"}>{children}</main>
      {!isFullScreenPage && <Footer />}
    </div>
  );
};
