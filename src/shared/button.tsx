import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "yellow" };
type LinkButtonProp = React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: "yellow"; to: string };

const Button = ({ children, variant, ...rest }: ButtonProps) => {
   let variantClassNames = "";
   switch (variant) {
      case "yellow":
         variantClassNames += "bg-accent";
         break;

      default:
         break;
   }
   return (
      <button className={`py-4 px-8 rounded ${variantClassNames}`} {...rest}>
         {children}
      </button>
   );
};

const LinkButton = ({ children, to, variant, ...rest }: LinkButtonProp) => {
   let variantClassNames = "";
   switch (variant) {
      case "yellow":
         variantClassNames += "bg-accent";
         break;

      default:
         break;
   }
   return (
      <Link to={to} className={`py-4 px-8 rounded ${variantClassNames}`} {...rest}>
         {children}
      </Link>
   );
};
export { Button, LinkButton };
