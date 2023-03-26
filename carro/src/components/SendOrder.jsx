import {
    Container,
    Heading,
    Stack,
    Input,
    Button,
    Text,
    Center,
    FormControl,
    FormLabel,
  } from "@chakra-ui/react";
  import { collection, getFirestore, addDoc } from "firebase/firestore";
  import { useState } from "react";
  import '../index.css'
  
  //Sección de formulario para efectuar la compra, devuelve un Order ID
  const SendOrder = () => {
    const [orderId, setOrderId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const db = getFirestore();
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name === "" || email === "") {
        alert("No pueden existir campos vacios");
      } else {
        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
      }
      setEmail(" ");
    };
    const order = {
      name,
      email,
    };
    const ordersCollection = collection(db, "orden");
    return (
      <div>
        <div className="form-cart">
        <Center>
          <Heading>Enviar ordenes</Heading>
        </Center>
        <Container>
          <FormControl>
            <form onSubmit={handleSubmit}>
              <FormLabel>Nombre</FormLabel>
              <Input size="lg" bg="white" onChange={(e) => setName(e.target.value)} />
              <FormLabel>EMAIL</FormLabel>
              <Input size="lg" bg="white" onChange={(e) => setEmail(e.target.value)} />
              <Button colorScheme="blue" type="submit" m={5}>Enviar Información</Button>
            </form>
          </FormControl>
        </Container>
        <Center>
          <Text as="b" m={3} fontSize="xl">Orden ID:{" "}</Text>
          <Text as="mark" fontSize="2xl">{orderId}</Text>
        </Center>
        </div>
      </div>
    );
  };
export default SendOrder;