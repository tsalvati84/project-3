import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 450, clear: "both", paddingTop: 50, paddingLeft: 50, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
