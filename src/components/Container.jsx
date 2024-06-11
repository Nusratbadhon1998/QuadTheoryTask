import React from "react";

function Container({ children }) {
  return <div className="max-w-full md:max-w-6xl lg:max-w-5xl mx-auto ">{children}</div>;
}

export default Container;
