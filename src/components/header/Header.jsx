import React, { useEffect, useRef, useState } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";


import { useSelector , useDispatch } from "react-redux";
import { cartUiActions } from './../../redux-store/shopping-cart/cartUISlice';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const headerRef = useRef(null);
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const dispatch = useDispatch();

  const navLinks = [
    {
      display: "Home",
      path: "/home",
    },
    {
      display: "Foods",
      path: "/foods",
    },
    {
      display: "Cart",
      path: "/cart",
    },
    {
      display: "Contact",
      path: "/footer",
    },
  ];

  useEffect(() => {
    document.addEventListener("scroll" , () => {
      if(document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100){
        headerRef.current.classList.add("header-shrink")
      }else{
        headerRef.current.classList.remove("header-shrink")
      }

      return ()=> window.removeEventListener("scroll");
    })
  },[])

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav-wraper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>

          {/* menu */}

          <div
            className={toggleMenu ? "toggle-menu navigation" : "navigation"}
            onClick={() => setToggleMenu(false)}
          >
            <div className="menu d-flex align-items-center gap-5">
              {navLinks.map((item, index) => (
                <NavLink
                  className={(navClass) =>
                    navClass.isActive ? "nav-active navLink" : "navLink"
                  }
                  to={item.path}
                  key={index}
                  onClick={() => setToggleMenu(false)}
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* nav right icons */}

          <div className="nav-right d-flex align-items-md-center gap-4">
            <span onClick={() => dispatch(cartUiActions.toggle())} className="cart-icon">
              <i className="ri-shopping-basket-line"></i>
              <span className="cart-badge">{totalQuantity}</span>
            </span>

            <span className="user">
              <Link className="link" to={"/login"}>
                <i className="ri-user-line"></i>
              </Link>
            </span>

            <span
              onClick={() => setToggleMenu(!toggleMenu)}
              className="mobile-menu"
            >
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
