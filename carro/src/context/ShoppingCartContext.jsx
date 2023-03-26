//import {createContext, useState} from 'react'
import {createContext, useState} from 'react'
import React from 'react'

const ShoppingCartContextProvider = ({children}) => {

  const [cart, setCart]= useState([]);
  return (
    
    <CartContext.Provider value={{cart, setCart}}>
      {children}
      </CartContext.Provider>

  )
}
export const CartContext = createContext(null);
export default ShoppingCartContextProvider