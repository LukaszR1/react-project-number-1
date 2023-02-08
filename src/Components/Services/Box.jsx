import React from "react";

export default function Box({ isNew, title }) {
  return isNew ? (
    <div className="box1 box">
      <div className="dot"></div>
      {title}
      <p>(nowość)</p>
    </div>
  ) : (
    <div className="box">{title}</div>
  );
}
