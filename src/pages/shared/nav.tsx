import React from "react";
import { Link, NavLink } from "react-router-dom";

const PATHS = [
   { to: "/", title: "HOME" },
   { to: "/about-me", title: "ABOUT ME" },
   { to: "/#works", title: "WORKS" },
];

const Nav = () => {
   return (
      <div className="flex justify-between items-center">
         <Link to="/" className="font-bold text-5xl font-title">
            AYO
         </Link>
         <ul className="inline-flex gap-6 font-medium text-xs">
            {PATHS.map((_path) => (
               <li key={_path.title}>
                  <NavLink
                     to={_path.to}
                     className={() => (window.location.pathname === _path.to ? "text-yellow-500" : "")}>
                     {_path.title}
                  </NavLink>
               </li>
            ))}
         </ul>
      </div>
   );
};

export { Nav };
