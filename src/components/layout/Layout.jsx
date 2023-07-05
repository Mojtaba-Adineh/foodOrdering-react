import React from 'react';
import Header from '../header/Header';
import Routers from '../../routes/Routers';
import Footer from '../footer/footer';
import Carts from '../UI/cart/Carts';
import { useSelector } from 'react-redux';

const Layout = () => {
    const showCart = useSelector(state => state.cartUi.showCart)

    return (
        <div>
            <Header/>

            {showCart && <Carts/>}

            <div>
                <Routers/>
            </div>
            <Footer/>
        </div>
    )
};

export default Layout;