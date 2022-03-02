import React from "react";
import classes from "./Banner.module.scss";

const Banner = (props) => {
  const { image, buttonText, text, url, type } = props;

  const bgColor = type === "1" ? "#FFF6FB" : "#EEEFFB";
  return (
    <div className={classes.banner} style={{ backgroundColor: bgColor }}>
      <h2>{text}</h2>
      <span>{buttonText}</span>
      <img src={image} alt="image" />
    </div>
  );
};

export default Banner;
