import "../ItemDetail/ItemDetail.css"
import { useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import useFirebase from '../../Hooks/useFirebase'
import Layout from "../../Layout/Layout";


const ItemDetail = () => {

    const {id} = useParams()
    
    const {jugador, getJugador} = useFirebase()
    
    const navigate = useNavigate()
    
    useEffect(() => {
        getJugador(id)

        return () => {
            
        }
    }, [getJugador, id])


    return (
        <div>
            {jugador ? (
                <>
                    <h1 className="tituloDetalle">Detalle del Jugador</h1>
                    <br />
                    <div className='containerDetail'>
                        <div className='contentDetail'>
                            <h3>Nombre y Apellido: {jugador.nombre} {jugador.apellido}</h3>
                            <br />
                            <div className="divImage">
                                <img className="detailImage" src={jugador.img} alt={jugador.nombre} />
                            </div>
                            <br />
                            <p>Edad: {jugador.edad}</p>
                            <p>Posición: {jugador.posicion}</p>
                            <p>Pie habil: {jugador.pie}</p>
                            <p>Altura: {jugador.altura}</p>
                            <p>Nacionalidad: {jugador.pais}</p>
                            <p>Clubes: {jugador.clubes}</p>
                            <button className='btn btn-primary' onClick={() => navigate(-1)}>Volver</button>
                            <br />
                        </div>
                    </div>
                </>
            ):<Layout/>}
        </div>
    )
}

export default ItemDetail