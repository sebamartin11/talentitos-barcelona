import React from 'react'
import './Home.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'

// img
import image100 from '../../Assets/img-umbro.jpg'
import image101 from '../../Assets/img-indumentaria.jpg'
import image102 from '../../Assets/img-footer.png'
import image103 from '../../Assets/img-m2a.jpg'
import image104 from '../../Assets/img-tablita.jpg'
import image105 from '../../Assets/img-abogado.jpg'
import image106 from '../../Assets/img-improvingsystem.jpg'
// array de Sponsors
const miSponsors = [
    {
        id: 100,
        titulo: "Umbro",
        img: image100,
    },
    {
        id: 101,
        titulo: "M2A",
        img: image103,
    },
    {
        id: 102,
        titulo: "La Tablita",
        img: image104,
    },
    {
        id: 103,
        titulo: "Rodriguez Frías",
        img: image105,
    },
    {
        id: 104,
        titulo: "Improving System",
        img: image106,
    },
    ];

const Home = () => {

    const [data, setData] = useState ({});

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(miSponsors);
            }, 2000);
        });
        
        getData.then(respuesta => setData(respuesta));
    }, [])
    
    return (
        <div>
            <h1 className="tituloHome">Home</h1>
            <section className="container-fluid">
                    <div className="row">
                        <aside className="col-sm-12 col-md-12 col-lg-6 col-xl-6 alHome">
                            <img className="imgHome" src={image102} alt="img-home" />
                        </aside>
                        <aside className="col-sm-12 col-md-12 col-lg-6 col-xl-6 arHome ">
                            <h3><u>Sobre Talentitos Barcelona</u></h3>
                            <p>Este proyecto ofrecerá mejores oportunidades y formación futbolística para jugadores de la ciudad y sus alrededores.</p>
                            <br />
                            <h4><u>El deporte como prioridad</u></h4>
                            <p>Focalizamos todos nuestros esfuerzos y recursos (tanto humanos como económicos) en nuestros jóvenes del fútbol base.</p>
                            <br />
                            <h4><u>Formación de calidad</u></h4>
                            <p>Nuestra estructura deportiva está diseñada para seguir una metodología de trabajo lineal en sus diferentes etapas, lo que se traduce en una mejor formación para nuestros futbolistas.</p>
                            <br />
                            <h4><u>Diversidad e integración</u></h4>
                            <p>Damos cabida a todos los jóvenes que deseen practicar el fútbol: sin distinción de género, procedencia o condición social.</p>
                            <br />
                        </aside>
                    </div>
                </section>
            <br />
            <h2 className="titulo2Home">Indumentaria Talentitos</h2>
            <div className="homeDiv">
                <img className="imgIndumentaria" src={image101} alt="img-indumentaria" />
            </div>
            <h3 className="titulo3Home">Sponsors Talentitos</h3>
            <div className="divSponsors">
                <ItemList value={data} data ={miSponsors} />
            </div>
        </div>
    )
}

export default Home