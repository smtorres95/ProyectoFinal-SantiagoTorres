import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {cart, setCart} = useContext(CartContext);
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <>
      <div className="cart">
        <Button size="lg" variant="outline" colorScheme="black">
         <Link to={"/cart"}>
         <span className="material-symbols-outlined">shopping_cart{quantity}</span>
          
         </Link> 
        </Button>
      </div>
    </>
  );
};

export default CartWidget;