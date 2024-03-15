import React from "react";
import "./styles.css";

const ContentButton = ({ title, type, color="" }) => {
  return (
    <button
      className={`content-btn ${color === "primary" ? "primary-btn" : "secondary-btn"}`}
      type={type}
    >
      {title}
    </button>
  );
};

export default ContentButton;
