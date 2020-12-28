import React from "react";
import "./style.css";

const Typography = ({ classN, content }) => {
  return (
    <>
      <div className={`${classN}`}>{content}</div>
    </>
  );
};

export default Typography;
