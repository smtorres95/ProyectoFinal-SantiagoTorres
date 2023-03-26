import { useState, useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import '../index.css'
import { Link } from "react-router-dom";
import SendOrder from "./SendOrder";
import {
  Button,
  Center,
  Heading,
  Text,
} from "@chakra-ui/react";

//Este componente muestra los productos seleccionados y sus totales $
const Cart = () => {
  const {cart, setCart} = useContext(CartContext);

  const [contador, setContador] = useState(0);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const handleDelete = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };
  const showDeleteAlert = (item) => {
    Swal.fire({
      title: `¿Eliminar del carrito?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(item.id);
        Swal.fire({
          title: 'Eliminado',
          text: `ha sido eliminado del carrito`,
          icon: 'success'
        });
      }
    });
  };

  const sumar = () => {
    setContador (contador + 1);
  }
  return (
    <>
    <div>
      <Center bg="tomato" h="100px" color="black">
        <Heading className="head-carro" as="h2" size="2xl">
          Carrito     =    <Text as="b">Precio total: $ {totalPrice}</Text>
        </Heading>
      </Center>
      </div>
      <div className="volver-menu">
        <button className="btn-volver">
          <Link to="/menu">
          Volver al Menu
          </Link>
        </button>
      </div>
    
      <div className="carrito-container">
      {cart.map((item) => {
        return ( 
        <div className="carrito-div">
          <section key={item.id} className="main-catalogue-carro">
            <div className="carta-carro">
              <div className="img-cart">
                <img src={item.image}/>
              </div>
              <div>
                <h3 className='heading-cart'>{item.name}</h3>
              </div>
              <div className="detalles-items">
                <p className="detalle-item-carro">Cantidad: {item.quantity}</p>
                <p className="detalle-item-carro">Precio: $ {item.price}</p>
              </div>
              <div className="div-eliminar">
                <button className="btn btn-eliminar" 
                  onClick={() =>showDeleteAlert(item)}>
                  Eliminar</button>
              </div>
              <div className="total-items">
                <p className="detalle-item-carro">
                  Total por unidades: ${item.price * item.quantity}
                </p>
              </div>
               
            </div>        
          </section>
        </div>
        
        );
      })}
      </div>
      <div>
      <SendOrder />
      </div>
    </>
  );
};

export default Cart;