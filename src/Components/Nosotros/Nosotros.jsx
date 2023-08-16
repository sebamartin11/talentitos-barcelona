import React from 'react'
import './Nosotros.css'
import image5 from './img-nosotros.jpg'
const Nosotros = () => {
    return (
        <>
            <h1 className="tituloNosotros">Nosotros</h1>
                <section className="container-fluid">
                    <div className="row">
                        <aside className="col-sm-12 col-md-12 col-lg-6 col-xl-6 alNosotros">
                            <img className="imgNosotros" src={image5} alt="img-nosotros" />
                        </aside>
                        <aside className="col-sm-12 col-md-12 col-lg-6 col-xl-6 arNosotros">
                            <h2>Quienes Somos?</h2>
                            <br />
                            <p> Talentitos Barcelona comenzó con este proyecto en el año 2008 en Argentina, Buenos Aires. Con la ayuda de nuestros amigos, Gilson De Oliveira y Xavi Guzman ex portero del FC Barcelona decidimos mudarnos a España y continuar con este proyecto en territorio Español. Por lo tanto Desde el año 2010 estamos situados en Sant Feliu de Guixols, Girona, España.</p>
                            <br />
                            <p> Talentitos Barcelona se enfoca en brindar oportunidades a jugadores que anhelan ser profesionales, con el objetivo principal de que cada chico cumpla su sueño de jugar al fútbol en el suelo europeo. Nos dedicamos a darle apoyo y logistica a cada jugador, consiguiendo pruebas tanto en el territorio Español e Italiano.</p>
                            <br />
                            <p>Realizamos entrenamientos grupales en campo y de fuerza en gimnasio para que cada jugador obtenga su mejor rendimiento y logre enfocarse al 100% de cara a futuras pruebas.</p>
                            <br />
                            <p>Contamos, con un equipo de trabajo para comprometernos con el seguimiento personalizado de nuestros jugadores. En Talentitos Barcelona somos conscientes de la importancia que tiene el aporte de cada jugador desde su lugar. Valoramos el compromiso, la responsabilidad, la calidad en la atención, el deseo de superación personal y la capacidad para trabajar en equipo de quienes formamos parte de este grupo. Tenemos un claro y único objetivo que es el de lograr con profundidad lo que nuestros jugadores necesitan y superar sus expectativas, generando una experiencia única.</p>
                        </aside>
                    </div>
                </section>
        </>
    )
}

export default Nosotros