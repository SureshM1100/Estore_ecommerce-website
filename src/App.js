import React, { useState } from 'react';
import './App.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './pages/Products';
import Cart from './pages/Cart';
import WishList from './pages/WishList';
// import ContactUs from './pages/ContactUs';

import SearchBar from './components/SearchBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Main from './pages/Main';



function App() {

  const [cartItems, setCartItems] = useState([]);
  const [wishList, setWishList] = useState([]);


  const totalQty = cartItems.reduce((quantity, item) => quantity + item.quantity, 0)
  const totalqty = wishList.reduce((quantity, item) => quantity + item.quantity, 0)

  const handleWishList = (product) => {
    const ProductExist = wishList.find((item) => item.id === product.id);

    if (ProductExist) {
      setWishList(wishList.map((item) => item.id === product.id ?
        { ...ProductExist, quantity: ProductExist.quantity + 1 } : item)
      );
    } else {
      setWishList([...wishList, { ...product, quantity: 1 }]);
    }
  }

  const handleRemoveWishList = (product) => {
    const ProductExist = wishList.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setWishList(wishList.filter((item) => item.id !== product.id));
    }
    else {
      setWishList(wishList.map((item) => item.id === product.id ?
        { ...ProductExist, quantity: ProductExist.quantity - 1 } : item)
      );
    }

  }

  const handleClearWishList = () => {
    setWishList([]);
  }

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);

    if (ProductExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        { ...ProductExist, quantity: ProductExist.quantity + 1 } : item)
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        { ...ProductExist, quantity: ProductExist.quantity - 1 } : item)
      );
    }

  }

  const handleCartClear = () => {
    setCartItems([]);
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Home/>
        <SearchBar
          totalQty={totalQty}
          totalqty={totalqty}
        />
        <Routes>
        <Route exact path='/' element={< Main />}/>
        <Route exact path='/Estore_ecommerce-website' element={< Main />}/>
        <Route exact path='/Estore_Ecommerce-Website' element={< Main />}/>
          <Route exact path='/products' element={<Products
            handleAddProduct={handleAddProduct}
            handleWishList={handleWishList} />} />
          <Route exact path='/cart' element={<Cart
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleCartClear={handleCartClear}
            totalQty={totalQty} />} />
          <Route exact path='/wishlist' element={<WishList
            wishList={wishList}
            handleWishList={handleWishList}
            handleAddProduct={handleAddProduct}
            handleClearWishList={handleClearWishList}
            handleRemoveWishList={handleRemoveWishList} />} />
          {/* <Route exact path='/contactus' element={<ContactUs />} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
