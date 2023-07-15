import React from "react";
import "./style.css";

export const H1 = ({ children }) => {
  return <h1 className="typography-h1">{children}</h1>;
};

export const H2 = ({ children }) => {
  return <h2 className="typography-h2">{children}</h2>;
};
export const H3 = ({ children }) => {
  return <h3 className="typography-h3">{children}</h3>;
};

export const H4 = ({ children }) => {
  return <h4 className="typography-h4">{children}</h4>;
};

export const H5 = ({ children }) => {
  return <h5 className="typography-h5">{children}</h5>;
};

export const H6 = ({ children }) => {
  return <h6 className="typography-h6">{children}</h6>;
};

export const P = ({ children }) => {
  return <p className="typography-p">{children}</p>;
};

export const Span = ({ children }) => {
  return <span className="typography-span">{children}</span>;
};
