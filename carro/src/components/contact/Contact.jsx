import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div>
        <div className="contact section" id="contact">
        <div className="main-contact">
            
            <div className="contact-content">
                <h4>Partner</h4>
                <li><a href="">Food Panda</a></li>
                <li><a href="">CupMania</a></li>
                <li><a href="#menu">Food Fun</a></li>
                <li><a href="#contact">BT Services</a></li>
            </div>
            <div className="contact-content">
                <h4>Contacto</h4>
                <li><a href="#home">Contactanos</a></li>
                <li><a href="#about">Redes</a></li>
                <li><a href="#menu">Conocimientos</a></li>
                <li><a href="#contact">Faq</a></li>
            </div>
            <div className="contact-content">
                <h4>Seguinos</h4>
                <li><a href="#home">Facebook</a></li>
                <li><a href="#about">Instagram</a></li>
                <li><a href="#menu">Pinterest</a></li>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact