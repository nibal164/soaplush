import React from "react";
import "./ProductBox.css";

type ProductBoxProps = {
  img: any;
  name: string;
  description: string;
  ingredients: string;
  price: number;
};

function ProductBox(props: ProductBoxProps) {
  return (
    <div className="container">
      <div className="card-content">
        <div className="card-content-description">
          <img src={props.img} alt={props.name} className="logo" />
          <div>
            <p>
              <b>{props.name}</b>
            </p>
            <p>{props.price} $</p>
          </div>
        </div>

        {/* for description */}
        <div className="card-content-description-specification">
          <h1>
            <b>Description</b>
          </h1>
          <p className="paragraph">{props.description}</p>
          <h1>
            <b>Ingredients</b>
          </h1>
          <p className="paragraph">{props.ingredients}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
