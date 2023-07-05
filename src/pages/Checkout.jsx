import React, { useState } from "react";
import CommonSection from "./../components/UI/common-section/CommonSection";
import { Col, Row, Container } from "reactstrap";
import Helmet from "./../components/helmet/Helmet";
import { useSelector } from "react-redux";
import "../styles/checkout.css"

const Checkout = () => {
    const totalCartAmount = useSelector(state => state.cart.totalAmount)
    const shippingCost = 30;
    const totalAmount = totalCartAmount + shippingCost;

    //from info

    const[name , setName] = useState();
    const[email , setEmail] = useState();
    const[phoneNumber , setPhoneNumber] = useState();
    const[city , setCity] = useState();
    const[postalCode , setPostalCode] = useState();

    const userInfo = [];

    const handleSubmit = (e) => {
      e.preventDefault();

      userInfo.push({
        name ,
        email ,
        phoneNumber ,
        city ,
        postalCode 
      })

      console.log(userInfo);
    }

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />

      <section>
        <Container>
          <Row>
            <Col lg="8" md="6" className="order-md-first order-last">
              <h6 className="mb-5">Shipping Address</h6>
              <form onSubmit={handleSubmit} className="checkout-form">
                <div className="formGroup">
                  <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
                </div>
                <div className="formGroup">
                  <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                </div>
                <div className="formGroup">
                  <input onChange={(e) => setPhoneNumber(e.target.value)} type="text" placeholder="Phone Number" />
                </div>
                <div className="formGroup">
                  <input onChange={(e) => setPostalCode(e.target.value)} type="text" placeholder="Postal code" />
                </div>
                <div className="formGroup">
                  <input onChange={(e) => setCity(e.target.value)} type="text" placeholder="City" />
                </div>

                <button className="addToCard-btn mt-3">Payment</button>
              </form>
            </Col>

            <Col lg="4" md="6" className="order-md-last order-first">
                <div className="checkout-bill">
                    <h6 className="d-flex align-items-center justify-content-between">Subtotal : <span>${totalCartAmount}</span></h6>
                    <h6 className="d-flex align-items-center justify-content-between mb-4">Subtotal : <span>${shippingCost}</span></h6>
                    <div>
                        <h5>Total : <span>${totalAmount}</span></h5>
                    </div>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
