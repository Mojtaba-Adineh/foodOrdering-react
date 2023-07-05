import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer  id="footer" className="footer">
      <Container>
        <Row className="border-bottom border-dark pb-5">
          <Col lg="3" md="6" sm="6">
            <div className="footer-logo text-start">
              <img src={logo} alt="logo"/>
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                mollitia eveniet minima illo.
              </p>
            </div>
          </Col>
          <Col className="d-flex flex-column " lg="3" md="6" sm="6">
            <h5 className="footer-title">Delivery Time</h5>
            <ListGroup>
              <ListGroupItem className="border-0 delivery-time-item">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className="border-0     delivery-time-item">
                <span>Friday - Saturday</span>
                <p>Off Day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="6" sm="6">
            <h5 className="footer-title">Contact</h5>
            <ListGroup>
              <ListGroupItem className="border-0 ps-0 delivery-time-item">
                <span>Phone: 09944966928</span>
              </ListGroupItem>

              <ListGroupItem className="border-0 ps-0 delivery-time-item">
                <span>Email: Codewithmoji@gmail.com</span>
              </ListGroupItem>

              <ListGroupItem className="border-0 ps-0 delivery-time-item">
                <p>Location: Iran , Tehran , Valiasr square </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="6" sm="6" className="mt-md-4">
            <h5 className="footer-title">Newsletter</h5>
            <p>Subscribe our Newletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your Email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright-text">
              Copyright -2023 , wbsite made by Mojtaba Adineh. All Rights
              Reserved
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social-links d-flex align-items-center  gap-4">
              <p className="m-0">Follow:</p>
              <span>
                <Link className="link" to={"https://instagram/mojtaba-adn"}>
                  <i className="ri-instagram-line"></i>
                </Link>
              </span>
              <span>
                <Link className="link" to={"https://t.me/mojiwxa"}>
                  <i className="ri-telegram-line"></i>
                </Link>
              </span>
              <span>
                <Link
                  className="link"
                  to={"https://github.com/Mojtaba-Adineh"}
                >
                  <i className="ri-github-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
