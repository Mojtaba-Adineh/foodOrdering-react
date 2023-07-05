import React from "react";
import { ListGroupItem } from "reactstrap";
import "../../../styles/cart-item.css";

import productImg from "../../../assets/images/product_01.jpg";
import { useDispatch } from "react-redux";
import { cartActions } from './../../../redux-store/shopping-cart/cartSlice';

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const {title , id , image01 , price , quantity , totalPrice} = item;

  const increamentItem = () => {
    dispatch(cartActions.addItem({
      title,
      id,
      price,
      image01
    }))
  }

  const decrementItem = () => {
    dispatch(cartActions.decrementItem(id))
  }

  const removeItem = () => {
    dispatch(cartActions.removeItem(id))
  }

  return (
    <ListGroupItem className="border-0">
      <div className="cart-item d-flex  gap-2">
        <img src={image01} alt="product-image" />

        <div className="cart-item-info d-flex align-items-center justify-content-between w-100 gap-4">
          <div>
            <h6 className="cart-item-title">{title}</h6>
            <p className="cart-item-price d-flex align-items-center justify-content-center gap-5">
              {quantity}x <span>${totalPrice}</span>
            </p>

            <div className="increase-decrease-btns d-flex align-items-center justify-content-between gap-2">
              <span onClick={decrementItem} className="decrease-btn">
                <i className="ri-subtract-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span onClick={increamentItem} className="increase-btn">
                <i className="ri-add-line"></i>
              </span>
            </div>
          </div>

          <span onClick={removeItem} className="delete-btn">
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
