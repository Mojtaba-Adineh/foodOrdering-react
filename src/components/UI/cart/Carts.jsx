import React from "react";
import { ListGroup } from "reactstrap";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

import "../../../styles/shopping-cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../redux-store/shopping-cart/cartUISlice";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProdaucts = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  return (
    <div
      className="cart-container"
    >
      <ListGroup className="cart">
        <div className="cart-close-btn">
          <span
            onClick={() => dispatch(cartUiActions.toggle())}
            className="ri-close-fill"
          ></span>
        </div>

        <div className="cart-listItem-container">
          {cartProdaucts.length <= 0 ? <h6 className="text-center mt-5">There is no Products added to the cart!</h6> 
          : cartProdaucts.map((item , index) => (
            <CartItem item={item} key={index}/>
          )) }
        </div>

        <div className="cart-bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal: <span>{totalAmount}$</span>
          </h6>
          <button>
            <Link className="link" to={"/checkout"}>
              Checkout
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
