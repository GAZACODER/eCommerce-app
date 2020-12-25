import React from "react";
import "./style.css";

const Typography = ({ className, content }) => {
  return (
    <>
      <div className={className}>{content}</div>
    </>
  );
};

export default Typography;
