import React, { useEffect, useState } from "react";
import Helmet from "./../components/helmet/Helmet";
import Category from "../components/UI/category/Category";
import ProdactCard from "../components/UI/product-card/ProdactCard";
import FilterButton from "./../components/UI/filter-button/FilterButton";
import TestimonialsSlider from "../components/UI/slider/TestimonialsSlider";

import { Col, Container, Row , ListGroup , ListGroupItem } from "reactstrap";
import { Link , NavLink } from "react-router-dom";

import "../styles/hero-section.css";
import "../styles/home.css";

import heroImg from "../assets/images/hero.png";
import serviceImg01 from "../assets/images/service-01.png";
import serviceImg02 from "../assets/images/service-02.png";
import serviceImg03 from "../assets/images/service-03.png";
import categoryImgHamburger from "../assets/images/hamburger.png";
import categoryImgPizza from "../assets/images/pizza.png";
import categoryImgBread from "../assets/images/bread.png";
import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png"

import products from "../assets/fake-data/products";

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza , setHotPizza] = useState([]);

  const featureItems = [
    {
      title: "Quick Delivery",
      imgUrl: serviceImg01,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laborum.",
    },
    {
      title: "Super Dine in",
      imgUrl: serviceImg02,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laborum.",
    },
    {
      title: "Easy Pick up",
      imgUrl: serviceImg03,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laborum.",
    },
  ];

  useEffect(() => {
    switch (category) {
      case "ALL":
        setAllProducts(products);
        break;
      case "Burger":
        {
          const burgers = products.filter((item) => item.category === "Burger");
          setAllProducts(burgers);
        }
        break;
      case "Pizza":
        {
          const pizzas = products.filter((item) => item.category === "Pizza");
          setAllProducts(pizzas);
        }
        break;
      case "Bread":
        {
          const breads = products.filter((item) => item.category === "Bread");
          setAllProducts(breads);
        }
        break;
      default:
        setAllProducts(products);
    }
  }, [category]);

  useEffect(() => {
    const pizzas = products.filter((item) => item.category === "Pizza");
    const slicedPizza = pizzas.slice(0,4);
    setHotPizza(slicedPizza);
  },[])

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row className="hero-content-row">
            <Col lg="6" md="12">
              <div className="hero-content">
                <h5 className="mb-4">Easy way to make an order</h5>
                <h1 className="mb-3 hero-title">
                  <span>HUNGRY?</span>
                  Just wait <br /> food at
                  <span> your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci eligendi, at enim itaque libero molestias a dolorem
                  incidunt delectus maxime eius, consectetur magni! Sequi,
                  fugiat autem vel nisi voluptate corrupti!
                </p>

                <div className="hero-btns d-flex align-items-center justify-align-content-center gap-5 mt-4">
                  <button className="order-btn">
                    <Link to={"/foods"}>
                      Order now
                      <i className="ri-arrow-right-s-line"></i>
                    </Link>
                  </button>
                  <button className="all-foods-btn">
                    <Link className="link" to={"/foods"}>
                      See All Foods
                    </Link>
                  </button>
                </div>

                <div className="hero-footer d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping-icon">
                      <i className="ri-roadster-fill"></i>
                    </span>
                    No shipping charge!
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping-icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    100% secure
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="12" className="mt-md-5">
              <div className="hero-img-container">
                <img src={heroImg} alt="hero-image" className="hero-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature-subtitle">what we Serve</h5>
              <h2 className="feature-title">just sit back in home</h2>
              <h2 className="feature-title">
                we will <span>take care</span>
              </h2>
            </Col>

            {featureItems.map((item, index) => (
              <Col className="mt-5" lg="4" md="4" key={index}>
                <div className="feature-item text-center px-lg-5 py-lg-3 mx-md-2 ">
                  <img
                    className="w-25 mb-3"
                    src={item.imgUrl}
                    alt="feature image"
                  />
                  <h5 className="mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="pb-sm-0 pb-lg-5">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food-category d-flex align-items-center justify-content-center gap-4 flex-wrap">
                <FilterButton
                  title={"All"}
                  setCategory={setCategory}
                  category={category}
                />
                <FilterButton
                  title={"Burger"}
                  imgUrl={categoryImgHamburger}
                  setCategory={setCategory}
                  category={category}
                />
                <FilterButton
                  title={"Pizza"}
                  imgUrl={categoryImgPizza}
                  setCategory={setCategory}
                  category={category}
                />
                <FilterButton
                  title={"Bread"}
                  imgUrl={categoryImgBread}
                  setCategory={setCategory}
                  category={category}
                />
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col className="mt-5" key={item.id} xxl="3" xl="4" lg="4" md="6" sm="12">
                <ProdactCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="pt-md-0 pt-lg-5">
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg="6" md="12">
              <img src={whyImg} alt="why Tasty Tread" className="w-100" />
            </Col>

            <Col lg="6" md="12" className="ps-5">
              <div className="why-tasty-tread">
                <h2 className="mb-4">Why <span>Tasty Tread?</span></h2>
                <p className="tasty-tread-title">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Alias quod illum error veritatis, dignissimos eius. Quod
                  perferendis pariatur quas, beatae itaque, cupiditate nobis
                  inventore corporis praesentium, dignissimos facilis odio! Est.
                </p>

                <ListGroup className="mt-5">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="chooseUs-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Fresh and tasty foods
                    </p>
                    <p className="chooseUs-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quisquam.</p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="chooseUs-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Quality support
                    </p>
                    <p className="chooseUs-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, corrupti blanditiis!.</p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="chooseUs-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Order from any Location
                    </p>
                    <p className="chooseUs-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, tempora.</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>

             {hotPizza.map(item => (
              <Col className="mb-4" xxl="3" xl="4" lg="4" md="6" sm="12" key={item.id}>
                <ProdactCard item={item}/>
              </Col>
             ))}
          </Row>
        </Container>
      </section>

      <section>
      <Container>
          <Row>
            <Col lg="6" md="12" className="order-2 order-md-1">
              <div className="testimonials mt-5">
                <h5 className="testimonials-subtitle mb-4">Testimonials</h5>
                <h2 className="testimonials-title mb-4">What out <span>customers</span> are saying</h2>
                <p className="testimonials-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione esse alias. Incidunt perspiciatis dolorum a temporibus tempora in soluta, molestiae ratione beatae quasi sequi.</p>

                <TestimonialsSlider/>
              </div>
            </Col>

            <Col lg="6" md="12" className="order-1 order-md-2">
              <img src={networkImg} alt="testimonial-image" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
