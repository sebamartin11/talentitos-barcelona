import React from 'react';
import "./Footer.css";
import Logo2 from '../../Assets/img-00.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="grupo-1">
                <div className="box">
                <Link to={"/"}><img className="logoTalentitos" src={Logo2} alt="logotalentitos"/></Link>
                </div>
                <div className="box">
                    <div>
                        <h3><u>Sobre nosotros</u></h3>
                        <p>Somos formadores e intermediarios de Fútbol.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="redes">
                        <h3><u>Redes Sociales</u></h3>
                        <Link to={"https://www.facebook.com/hector.c.nunez"} className="redes"><FontAwesomeIcon icon = {faFacebook}/></Link>
                        <Link to={"https://www.instagram.com/talentos_barcelona"} className="redes"><FontAwesomeIcon icon = {faInstagram}/></Link>
                        <Link to={"https://wa.me/+34692224731"} className="redes"><FontAwesomeIcon icon = {faWhatsapp}/></Link>

                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <div className="box">  
                    <p>Copyright 2023 © Talentitos Barcelona - Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer