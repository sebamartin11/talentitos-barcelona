import React from 'react'
import "./Servicios.css"
import image4 from "./img-servicios1.jpg"

const Servicios = () => {
    return (
        <div>
            <h1 className='tituloServicios'>Servicios</h1>
            <section className="container-fluid">
                <div className="row">
                    <aside className="col-sm-12 col-md-12 col-lg-6 col-xl-6 arser">
                        <h2 className="tituloServicios2"><u>Nuestros Servicios</u></h2>
                        <br />
                        <p className="parrafoServicios">Contamos con residencia situada en Sant Feliu de Guixols, Girona, España para que nuestros jugadores compartan momentos unicos e inolvidables. La ubicacion es inigualable ya que queda a unas 3 calles de la playa, a 3 calles del gimnasio y tambien a 6 calles del campo donde podran tener un alojamiento adecuado y con cercanias para sus necesidades personales.</p>
                        <br />
                        <p className="parrafoServicios">En Talentitos Barcelona nos encargamos de gestionar y preparar a jugadores que tengan la ambición de cumplir su sueño de jugar en territorio Español o Italiano.</p>
                        <br />
                        <p className="parrafoServicios">Contamos con un sistema de entrenamiento donde le cumplimos las necesidades basicas que precisa un jugador de futbol, como el gimnasio y los entrenamientos en campo necesarios para la preparación a futuras pruebas sean en España o Italia.</p>
                        <br />
                        <p className="parrafoServicios">Hector Nuñez fundador de Talentitos Barcelona estara a dispocisión por cualquier necesidad que tengan nuestros jugadores y asi responder de manera inmediata sus inquietudes asegurando el compromiso maximo con cada uno de ellos.</p>
                    </aside>
                    <aside className="col-sm-12 col-md-12 col-lg-6 col-xl-6 alser">
                        <img className="imgServicios" src={image4} alt="img-servicios" />
                    </aside>
                </div>
            </section>
        </div>
    )
}

export default Servicios