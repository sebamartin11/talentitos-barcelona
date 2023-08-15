import React from 'react'
import './Social.css'
import image6 from './img-social.jpg'

const Social = () => {
    return (
        <>
            <h1 className="tituloSocial">Social</h1>
                <section className="container-fluid">
                    <div className="row">
                        <aside className="col-sm-12 col-md-12 col-lg-12 col-xl-6 arSocial">
                            <h2>¿En qué consiste nuestra sección social?</h2>
                            <br />
                            <p>La Sección Social Talentitos Barcelona nace para dar respuesta a las iniciativas con fines sociales que el centro de formación que viene desarrollando y que cada vez son mayores.</p>
                            <br />
                            <p>Nos parece necesario dentro de la estructura de Talentitos Barcelona dar interes a esta sección, lo que nos permitirá establecer sinergias y apoyos entre las iniciativas que llevemos a cabo, de forma que conseguiremos llegar a más jugadores y en mejores condiciones.</p>
                            <br />
                            <p>El objetivo principal de la Sección Social Talentitos Barcelona es desarrollar iniciativas con fines sociales que nos permitan, impulsar la práctica deportiva en colectivos en riesgo de exclusión social, fomentar el desarrollo del deporte de alto rendimiento, promover los valores positivos del deporte, y dar a conocer el deporte del fútbol a diferentes jugadores y en diferentes entornos.</p>
                        </aside>
                        <aside className="col-sm-12 col-md-12 col-lg-12 col-xl-6 alSocial">
                            <img className="imgSocial" src={image6} alt="img-social" />
                        </aside>
                    </div>
                </section>
        </>
    )
}

export default Social