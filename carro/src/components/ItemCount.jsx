import { useContext, useState } from "react";
import {
  Text,
  ButtonGroup,
  IconButton,
  Tooltip,
  Center,
  Button,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { CartContext } from "../context/ShoppingCartContext";

const ItemCount = ({ stock, id, price, name }) => {
  const {cart, setCart} = useContext(CartContext);
  const [count, setCount] = useState(1);

  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + count };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: count, price, name }];
      }
    });
  };
  const showAddToCartToast = () => {
    addToCart();
    Swal.fire({
      toast: true,
      icon: 'success',
      title: 'Agregado al carrito',
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
  };
  
  return (
    <>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Center>
          <Button
            onClick={() => showAddToCartToast()}
            variant="solid"
            colorScheme="blue">
            Add to cart: {count}
          </Button>
        </Center>
      </ButtonGroup>
    </>
  );
};
export default ItemCount;