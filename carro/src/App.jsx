import React from 'react'
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Home from './components/home/Home'
import About from './components/about/About'
import Footer from './components/Footer'
import Contact from './components/contact/Contact'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from "./components/Cart";
import ShoppingCartContext from "./context/ShoppingCartContext";

const App = () => {

  return (
    <div>
    <ShoppingCartContext>
      <BrowserRouter>
        <NavBar />        
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/menu" element={<ItemListContainer/>}/>
            <Route exact path="/menu/:menu" element={<ItemListContainer />}/>
            <Route exact path="/category/:category" element={<ItemListContainer />}/>
            <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </ShoppingCartContext>
    </div>
  )
}
export default App



{/* <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/" element={<About />}/>
          <ItemListContainer />
        </Routes> */}
