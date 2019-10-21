import React from "react";
import "./Product.css";

export default function Product(props) {
        return(
            <div className="product-component">
                <img className="product-image" alt="product-img" src={props.product.imageURL}/>
                <div>{props.product.product}</div>
                <div>{props.product.price}</div>
            </div>
        )
    
};