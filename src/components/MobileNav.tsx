import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <CiMenuFries className="text-3xl text-accent" />
      </SheetTrigger>
      <SheetContent>
        <nav className="flex flex-col justify-center items-center gap-8 mt-16">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-accent border-b-2 border-accent"
                : "text-white/80 hover:text-accent"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/resume"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-accent border-b-2 border-accent"
                : "text-white/80 hover:text-accent"
            }
          >
            Resume
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-accent border-b-2 border-accent"
                : "text-white/80 hover:text-accent"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-accent border-b-2 border-accent"
                : "text-white/80 hover:text-accent"
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
