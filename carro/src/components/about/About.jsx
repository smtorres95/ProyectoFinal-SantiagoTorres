import React from 'react'
import './about.css'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

//Acerca de la compañía
const About = () => {
  return (
    <div>
      <div className="about" id="about">
        <div className="about-img">
            <img src="/assets/logo.jpg" alt="logo" />
        </div>
        <div className="about-text">
            <h2>Desde 2012  superando expectativas </h2>
            <p> Comenzamos el recorrido enfocadas en la pastelería, así nuestra experiencia año tras año
            se eleva para continuar buscando sabores elevados logrando una consitencia en el Servicio
            que desumbra a cada cliente </p>
            <Button bg='tomato' colorScheme='teal' color='black' size='md'><Link to="/menu">Ir al Menu</Link></Button>
        </div>
      </div>
      
    </div>
  )
}

export default About