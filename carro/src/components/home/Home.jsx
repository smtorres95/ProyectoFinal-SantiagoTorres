import React from 'react'
import './home.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

//Descripción breve del negocio
const Home = () => {
  return (
    <div>
      <div className="home welcome" id="home">
        <div className="home-text">
            <h1><span>Bienvenid@s </span>Pastelería Casera</h1>
            <p>Nos especializamos en pastelería artesanal y tortas decoradas</p>
            <Button bg='tomato' colorScheme='teal' color='black' size='md'>
              <Link to="/menu">Ir al Menu</Link>
            </Button>
        </div>

        <div className="home-img">
            <img src="/assets/cheesecacke2.jpg" alt="cheesecake"/>
        </div>
    </div>
    </div>
  )
}

export default Home