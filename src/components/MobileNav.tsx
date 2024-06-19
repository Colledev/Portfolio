import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <CiMenuFries className="text-3xl text-blue-800" />
            </SheetTrigger>
            <SheetContent>
                <nav className="flex flex-col justify-center items-center gap-8 mt-16">
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
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
