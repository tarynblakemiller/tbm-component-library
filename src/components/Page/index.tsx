import React from "react";
import { PageProps } from "./types";

const Page: React.FC<PageProps> = ({ title, children }) => (
  <>
    <h1 className="text-blue-500">{title}</h1>
    {children}
  </>
);

export default Page;
