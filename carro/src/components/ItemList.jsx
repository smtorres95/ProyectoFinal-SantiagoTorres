import React from 'react'
import Item from './Item'
import { Container } from "@chakra-ui/react";
import '../index.css'

//Este componente detalla la información de cada producto
const ItemList = ({prods}) => {
  return (
    <div>
        <div className='main-catalogue1'>
            {prods?.map((prod)=> (
                <Item
                key={prod.id}
                id={prod.id}
                name={prod.name}
                description={prod.description}
                price={prod.price}
                stock={prod.stock}
                category={prod.category}
                image={prod.image}
                />
            ))}

        </div>
    </div>
  )
}

export default ItemList