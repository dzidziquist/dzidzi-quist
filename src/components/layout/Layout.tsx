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

  return (
    <div className={isHomePage ? "h-screen overflow-hidden" : "min-h-screen flex flex-col"}>
      <Header />
      <main className={isHomePage ? "h-full" : "flex-1 pt-20"}>{children}</main>
      {!isHomePage && <Footer />}
    </div>
  );
};
