import React from 'react'
import CartWidget from '../CartWidget'
import './navbar.css'
import { Link } from "react-router-dom";

const NavBar = ({id}) => {
  return (
    <>
    <div className='navbar' key={id}>
      <div className="logo">
        <img src="/assets/logo.jpg" alt="Logo" />
      </div>
        <ul className="menu-nav">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>Acerca de</Link></li>
          <li><Link to={"/menu/:menu"}>Menu</Link></li>
          <li className="categorias">
            <a href="#">Categorías</a>
            <ul className="submenu">
              <li><Link to={`/category/${"Pasteles"}`}>
                      Pasteles
                    </Link></li>
              <li><Link to={`/category/${"Muffins"}`}>
                      Muffins
                    </Link></li>
              <li><Link to={`/category/${"Festivos"}`}>
                      Festivos
                    </Link></li>
              <li><Link to={`/category/${"Personalizados"}`}>
                      Personalizados
                    </Link></li>
            </ul>
          </li>
          <li><Link to={"/contact"}>Contacto</Link></li>
          <div className='cart-nav'>
                <CartWidget />
            </div>
        </ul>
    </div>
   </>
    )
}

export default NavBar