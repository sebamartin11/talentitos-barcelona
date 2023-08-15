import './Jugadores.css';
import useFirebase from '../../Hooks/useFirebase';
import { Link } from 'react-router-dom';

const Jugadores = () => {
    const { jugadores } = useFirebase();

    return (
        <div>
            <h1 className="tituloJugadores">Jugadores Talentitos</h1>
            {jugadores.map((jugador, index) => (
                <section className="sectionJugadores" key={index}>
                    <div className="cardJugadores">
                        <div className="divImg">
                            <img src={jugador.img} className="jugadores" alt={jugador.nombre} />
                        </div>
                        <br />
                        <div className="card-body">
                            <h5 className="card-title">{jugador.nombre}</h5>
                            <h5 className="card-title">{jugador.apellido}</h5>
                            <br />
                            <p className="card-text">Edad: {jugador.edad}</p>
                            <p className="card-text">Posición: {jugador.posicion}</p>
                            <p className="card-text">Nacionalidad: {jugador.pais}</p>
                            <Link className="btn jugador btn-primary" to={`/itemDetail/${jugador.id}`}>Ver Jugador</Link>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Jugadores;
