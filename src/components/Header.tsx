import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleHireMe = () => {
        navigate("/contact");
    };

    return (
        <div className="flex justify-between mt-8">
            <div>
                <NavLink to="/" className="text-3xl">
                    Gabriel Colle
                </NavLink>
            </div>
            <div className="hidden xl:flex gap-8 items-center ">
                <Nav />
                <Button onClick={handleHireMe}>Contact</Button>
            </div>
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    );
};

export default Header;
