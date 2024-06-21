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
            <div className="relative flex flex-col min-h-screen ">
                <div className="mx-4 xs:mx-20 sm:mx-32 md:mx-14 lg:mx-44 xl:mx-64">
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
