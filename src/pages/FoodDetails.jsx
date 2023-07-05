import React, { useState } from "react";
import { useParams } from "react-router-dom";

import products from "./../assets/fake-data/products";
import Helmet from "./../components/helmet/Helmet";
import CommonSection from "./../components/UI/common-section/CommonSection";

import "../styles/food-details.css";
import productImg01 from "../assets/images/product_01.jpg";
import { Col, Container, Row } from "reactstrap";
import ProdactCard from "./../components/UI/product-card/ProdactCard";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { cartActions } from "../redux-store/shopping-cart/cartSlice";

const FoodDetails = () => {
  const [tab, setTab] = useState("desc");

  const { id } = useParams();
  const currentProduct = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(currentProduct.image01);
  const { title, category, price, desc, image01, image02, image03 } =
    currentProduct;

  const relatedProducts = products.filter((item) => item.category === category);

  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [reviewText, setReviewText] = useState("");

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        title,
        id,
        price,
        image01,
      })
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentProduct]);

  useEffect(() => {
    setPreviewImg(image01);
  }, [currentProduct, image01]);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Helmet title="product details">
      <CommonSection className="commonSection" title={title} />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="6" className="d-flex align-items-center">
              <div className="product-detail-content">
                <h2 className="product-title mb-3">{title}</h2>
                <p className="product-price">
                  Price: <span>{price}$</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>

                <button onClick={addItem} className="addToCard-btn">
                  Add{" "}
                  <span>
                    <i className="ri-shopping-cart-line"></i>
                  </span>
                </button>
              </div>
            </Col>

            <Col lg="4" md="4" sm="4" xs="4">
              <div className="product-mainImg">
                <img src={previewImg} alt="" className="w-75" />
              </div>
            </Col>

            <Col lg="2" md="2" sm="2" xs="2">
              <div className="product-images">
                <div className="img-item mb-2">
                  <img
                    onClick={() => setPreviewImg(image01)}
                    src={image01}
                    className="w-50"
                    alt=""
                  />
                </div>

                <div className="img-item mb-2">
                  <img
                    onClick={() => setPreviewImg(image02)}
                    src={image02}
                    className="w-50"
                    alt=""
                  />
                </div>

                <div className="img-item">
                  <img
                    onClick={() => setPreviewImg(image03)}
                    src={image03}
                    className="w-50"
                    alt=""
                  />
                </div>
              </div>
            </Col>

            <Col className="pt-5 mb-5" lg="12" md="12">
              <div className="tabs d-flex align-items-center gap-4 pt-5">
                <h6
                  className={tab === "desc" && "tab-active"}
                  onClick={() => setTab("desc")}
                >
                  Desciption
                </h6>
                <h6
                  className={tab === "rev" && "tab-active"}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>
              {tab === "desc" && (
                <div className="tab-content">
                  <p>{desc}</p>
                </div>
              )}
            </Col>

            {tab === "rev" && (
              <div className="tab-form mb-5">
                <div className="d-flex mb-5 gap-5">
                  <div className="review">
                    <p className="user-name mb-0">John Doe</p>
                    <p className="user-email">johnDoe@gmail.com</p>
                    <p className="user-feedback">Great Product!</p>
                  </div>
                  <div className="review">
                    <p className="user-name mb-0">Reimond Redington</p>
                    <p className="user-email">ReyRed@gmail.com</p>
                    <p className="user-feedback">They are so fast in shipping!</p>
                  </div>
                  <div className="review">
                    <p className="user-name mb-0">Maria Carter</p>
                    <p className="user-email">MariatheC@gmail.com</p>
                    <p className="user-feedback">Great taste of chese!</p>
                  </div>
                </div>

                <form className="form" onSubmit={handleSubmit}>
                  <div className="formGroup">
                    <input
                      onChange={(e) => setUserName(e.target.value)}
                      type="text"
                      placeholder="Enter Your Name..."
                      required
                    />
                  </div>
                  <div className="formGroup">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Enter Your Email..."
                      required
                    />
                  </div>
                  <div className="formGroup">
                    <textarea
                      onChange={(e) => setReviewText(e.target.value)}
                      rows={5}
                      type="text"
                      placeholder="Write your Review..."
                      required
                    />
                  </div>
                  <button className="addToCard-btn" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            )}

            <Col lg="12" className="my-5">
              <h5 className="relatedProducts-title mb-3">
                You might also Like!
              </h5>
            </Col>

            {relatedProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="9" key={item.id} className="product-col mb-4">
                <ProdactCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
