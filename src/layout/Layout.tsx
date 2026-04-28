import React, { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BackgroundParticles from "../components/BackgroundParticle";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <BackgroundParticles />
          <div className="relative z-0">
            <Header />
            <main className="flex-1">{children}</main>
          </div>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
