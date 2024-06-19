import React, { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen mx-20 sm:mx-32 md:mx-26 lg:mx-44 xl:mx-56 ">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
