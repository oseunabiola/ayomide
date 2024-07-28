import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
   return <div className="w-10/12 mx-auto">{children}</div>;
};

export { Container };
