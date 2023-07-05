/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/product-card.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../redux-store/shopping-cart/cartSlice";

const ProdactCard = ({ item }) => {
  const { title, id, image01, price } = item;
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      image01,
      price
    }))
  }

  return (
    <div className="product-item">
      <div className="product-img">
        <Link to={`/foods/${id}`}><img className="w-50" src={image01} alt="product-image" /></Link>
      </div>

      <div className="product-content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product-price">${price}</span>
          <button onClick={handleAddToCart} className="addToCard-btn">
            Add
            <i className="ri-shopping-cart-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProdactCard;
