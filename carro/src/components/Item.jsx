import React from 'react'
import { Link } from "react-router-dom"
import '../index.css'

const Item = ({id, name, stock, category, image, price}) => {
  
  return (
    <>
    <div className='card-main1' key={id}>
      <img className="imagesize" src={image} alt="Imagen de producto" />
        <div className="card-body-item">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">Categoria: {category}</p>
          <p className="card-text">Stock: {stock}</p>
          <p className="card-text">Precio: {price}</p>
        </div>
        <div className="card-footer-item">
          <button className="btn-detalles">
          <Link to={`/item/${id}`}>Detalles</Link>
          </button>
        </div>
    </div>
    </>
  )
}

export default Item


{/* 
import {Center, Card, CardBody, Image, Heading, Text, Divider, Stack, CardFooter, Button } from "@chakra-ui/react";
<div key={id}>
    <Center p="1rem">
          <Card className="card-main card-item">
            <CardBody>
              <Image className="imagesize" src={image} />
              <Stack mt="6" spacing="3">
                <Heading size="md">{name}</Heading>

                <Text color="blue.800" fontSize="l">
                  Category: {category}
                </Text>
                <Text color="red.600" fontSize="xl">
                  Stock: {stock}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              <Center className="btn-center">
                <Button variant="solid" colorScheme="red">
                  <Link to={`/item/${id}`}>Detalles</Link>
                </Button>
              </Center>
            </CardFooter>
          </Card>
      </Center>
    </div> */}