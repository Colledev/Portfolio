import React from "react";
import { NavLink } from "react-router-dom";

const Nav: React.FC = () => {
    return (
        <div className="flex items-center gap-8">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                        ? "text-blue-800 border-b-2 border-blue-800"
                        : "hover:text-blue-800"
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/resume"
                className={({ isActive }) =>
                    isActive
                        ? "text-blue-800 border-b-2 border-blue-800"
                        : "hover:text-blue-800"
                }
            >
                Resume
            </NavLink>
            <NavLink
                to="/projects"
                className={({ isActive }) =>
                    isActive
                        ? "text-blue-800 border-b-2 border-blue-800"
                        : "hover:text-blue-800"
                }
            >
                Projects
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                    isActive
                        ? "text-blue-800 border-b-2 border-blue-800"
                        : "hover:text-blue-800 "
                }
            >
                Contact
            </NavLink>
        </div>
    );
};

export default Nav;
