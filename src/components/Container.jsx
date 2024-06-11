import React from "react";

function Container({ children }) {
  return <div className="max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto ">{children}</div>;
}

export default Container;