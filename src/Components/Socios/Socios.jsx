import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import './Socios.css'
import image7 from './img-socios.jpg'
const Socios = () => {

    const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();
            emailjs.sendForm('service_9tfn5ps', 'template_wzfdepp', form.current, '-syjWzwCaU1fPLsxD')
            .then((result) => {
                Swal.fire({
                    title: "Gracias!",
                    text: "Su inscripción se envió correctamente!",
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
        <>
            <h1 className="tituloSocios">Socios</h1>
                <section className="container-fluid">
                    <div className="row">
                        <aside className="col-sm-12 col-md-12 col-lg-6 col-xl-6 alSocios">
                            <img className="imgSocios" src={image7} alt="img-socios" />
                        </aside>
                        <aside className="col-sm-12 col-md-12 col-lg-6 col-xl-6 arSocios">
                            <h3><u>Datos del socio</u></h3>
                            <form ref={form} onSubmit={sendEmail} className='field'>
                                <label>Nombre:</label>
                                <input type="text" name="user_name" required placeholder="Nombre" />
                                <label>Apellido:</label>
                                <input type="text" name="user_surname" required placeholder="Apellido" />
                                <label>Fecha de nacimiento:</label>
                                <input type="date" name="user_fecha" required placeholder="ej:29/01/1998" />
                                <label>Email:</label>
                                <input type="email" name="user_email" required placeholder="suemail@talentitos.com" />
                                <label name="user_tel">Teléfono:</label>
                                <input type="number" name="user_tel" id="user_tel" required placeholder="ej:+34657892761"/>
                                <label>Valor de inscripción (Transferencia Bancaria) o (Bizum):</label>
                                <select name="user_dinero" className="dinero">
                                    <option value="10€">10€</option>
                                </select>
                                <br />
                                <br />
                                <input type="submit" value="Hacerme Socio" className='botonSendSocios'/>
                            </form>
                            <br />
                            <div className="form-group form-check">
                                <label className="form-check-label"> </label>
                                <input className="form-check-input" type="checkbox" name="remember" required/>Con esta inscripción, acepto las normas del régimen interno de Talentitos Barcelona haciendo efectivo el importe de los derechos de inscripción como socio/a con todos los derechos y deberes según las normas vigentes.
                                <div className="valid-feedback">Valido.</div>
                                <div className="invalid-feedback">Marque esta casilla de verificación para continuar.</div>
                            </div>
                            <br />
                            <p>Cada socio que aporte dinero sera designado exclusivamente para los chicos que integran nuestro proyecto. En beneficio para los socios dispondrán de ventajas en todos los eventos de Talentitos, y además de muchos sorteos que se designaran por nuestra pagina de instagram (TalentitosBarcelona).</p>
                            <br />
                            <p>Para realizar la transferencia bancaria, puede realizar el pago al siguiente número de cuenta: ES65 2100 4929 1222 0018 2431 (Caixabank) o por +34 600 202 955 (Bizum).</p>
                            <br />
                        </aside>
                    </div>
                </section>
        </>
    )
}

export default Socios;