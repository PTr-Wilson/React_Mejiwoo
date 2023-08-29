import React from "react";
import "./ItemSeller.css";

export default function ItemSeller(props) {
  console.log("prop", props);
  const { title, imageUrl, price } = props;
  return (
    <div className="image-item">
      <div className="image">
        <img src={imageUrl} alt="" />
      </div>
      <h3 className="image-title">{title}</h3>

      <h4>{price}</h4>
    </div>
  );
}
