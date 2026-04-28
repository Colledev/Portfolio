import React from "react";
import { NavLink } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <div className="flex items-center gap-8">
      <NavLink
        to="/"
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
        className={({ isActive }) =>
          isActive
            ? "text-accent border-b-2 border-accent"
            : "text-white/80 hover:text-accent"
        }
      >
        Projects
      </NavLink>
    </div>
  );
};

export default Nav;
