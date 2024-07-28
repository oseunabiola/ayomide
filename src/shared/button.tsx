import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "yellow" };
type LinkButtonProp = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
   variant?: "yellow" | "black";
   to: string;
   isExternal?: boolean;
};

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

const LinkButton = ({ children, to, isExternal, variant, ...rest }: LinkButtonProp) => {
   let variantClassNames = "";
   switch (variant) {
      case "yellow":
         variantClassNames += "bg-accent text-black";
         break;
      case "black":
         variantClassNames += "bg-black text-accent";
         break;

      default:
         break;
   }

   if (isExternal) {
      return (
         <a href={to} className={`py-4 px-8 rounded text-center ${variantClassNames}`} {...rest}>
            {children}
         </a>
      );
   }

   return (
      <Link to={to} className={`py-4 px-8 rounded text-center ${variantClassNames}`} {...rest}>
         {children}
      </Link>
   );
};
export { Button, LinkButton };
