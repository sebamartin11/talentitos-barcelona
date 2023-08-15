import { useEffect, useState } from 'react'
import { db } from '../Firebase/Firebase.js'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
import { GlobalProvider } from "../Context/GlobalContext";

const useFirebase = () => {
    const [jugadores, setJugadores] = useState([])
    const [jugador, setJugador] = useState(null);

    const {setLoading} = GlobalProvider()

    useEffect(() => {
        
        getJugadors()
        return () => {
            
        }
    }, []);
    
    

    const getJugadors = async () => {
        try{
            const jugadorCol = collection(db, "jugadores")
            await getDocs(jugadorCol).then((snapshot) => {
                if(snapshot.size === 0){
                    console.log("Base de datos esta vacia")
                }
                setJugadores(snapshot.docs.map((doc) => {
                    return {
                        id:doc.id,
                        ...doc.data(),
                    };
                })
                );
            })
        } catch (error){}
    };

    const getJugador = async (id) => {
        setLoading(true)
        try {
            const document = doc(db, "jugadores", id);
            const response = await getDoc(document);
            setJugador({ id: response.id, ...response.data() });
            setLoading(false)
        } catch (error) {
        console.log(error);
        }
    };

    return {jugadores,
            jugador,
            getJugadors,
            getJugador
        };
}


export default useFirebase;