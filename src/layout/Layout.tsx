import React, { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BackgroundParticles from "../components/BackgroundParticle"; // Adjust the path as necessary

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className="relative flex flex-col min-h-screen ">
                <div className="mx-20 sm:mx-32 md:mx-26 lg:mx-44">
                    <BackgroundParticles />
                    <div className="relative z-0">
                        <Header />
                        <main className="flex-1">{children}</main>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Layout;
