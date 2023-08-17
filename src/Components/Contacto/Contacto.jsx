import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';
import './Contacto.css'
import contacto from './guixols.jpg'

const Contacto = () => {
    
        const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();
            emailjs.sendForm('service_5brhadr', 'template_wyxz3ly', form.current, '-syjWzwCaU1fPLsxD')
                .then((result) => {
                    Swal.fire({
                        title: "Gracias!",
                        text: "Su consulta se envió correctamente!",
                        icon: "success",
                    });
                    form.current.reset();
                },(error) => {
                    Swal.fire({
                        title: "Ups!",
                        text: "Faltan campos por completar",
                        icon: "error",
                    });
                });
        };

    return (
        <div>
            <h1 className='tituloContacto'>Contacto</h1>
            <section className='container-fluid'>
                <div className="row">
                    <aside className="col-sm-12 col-md-12 col-lg-6 col-xl-6 alcon">
                        <img src={contacto} alt="img-contacto" className='img-contacto' />
                        <div className="ubicacion">
                                <p><FontAwesomeIcon icon={faPhone} /> (+34) 692 224 731 (Hector Nuñez)</p>
                                <p><FontAwesomeIcon icon={faLocationDot} /> Sant Feliu de Guixols, Girona, España.</p>
                                <br/>
                            </div>
                    </aside>
                    <aside className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="arcon">
                            <h2><u>Contactanos</u></h2>
                            <p>Completá el siguiente formulario.</p>
                            <p>¡Te responderemos lo antes posible!</p>
                        </div>
                        <form ref={form} onSubmit={sendEmail} className='field'>
                            <label>Nombre:</label>
                            <input type="text" name="user_name" required placeholder="Nombre" />
                            <label>Apellido:</label>
                            <input type="text" name="user_surname" required placeholder="Apellido" />
                            <label>Email:</label>
                            <input type="email" name="user_email" required placeholder="suemail@talentitos.com" />
                            <label name="user_tel">Movil:</label>
                            <input type="text" name="user_tel" id="user_tel" required placeholder="+34657892761"/>
                            <label>Mensaje:</label>
                            <textarea name="message" cols="50"rows="5" required placeholder="Dejanos su mensaje.." />
                            <br />
                            <br />
                            <input type="submit" value="Enviar" className='botonSend'/>
                            <br />
                        </form>
                    </aside>
                </div>
            </section>
        </div>
    )
}

export default Contacto