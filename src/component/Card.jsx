import React from "react";

export default function Card({title, img, rating}) {
  return (
    <div className="">
        <h1>{title}</h1>
        <p>{rating}</p>
        <img src={img} alt="" />
    </div>
  );
}
