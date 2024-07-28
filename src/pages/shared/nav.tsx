import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "../../shared/container";

const PATHS = [
   { to: "/", title: "Home" },
   { to: "/about-me", title: "About Me" },
   { to: "/#works", title: "Works" },
];

const Nav = () => {
   return (
      <Container>
         <div className="flex justify-between items-center">
            <Link to="/" className="font-bold text-5xl font-title">
               AYO
            </Link>
            <ul className="inline-flex gap-6 text-xs">
               {PATHS.map((_path) => (
                  <li key={_path.title}>
                     <NavLink
                        to={_path.to}
                        className={() => (window.location.pathname === _path.to ? "text-[#FEF404]" : "")}>
                        {_path.title}
                     </NavLink>
                  </li>
               ))}
            </ul>
         </div>
      </Container>
   );
};

export { Nav };
