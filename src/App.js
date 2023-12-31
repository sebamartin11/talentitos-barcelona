import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//Components
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import Home from './Components/Home/Home';
import Jugadores from './Components/Jugadores/Jugadores'
import Social from './Components/Social/Social'
import Nosotros from './Components/Nosotros/Nosotros'
import Servicios from './Components/Servicios/Servicios'
import Socios from './Components/Socios/Socios'
import Contacto from './Components/Contacto/Contacto'
import Footer from './Components/Footer/Footer';
import Error404 from './Components/Error404/Error404';
import GlobalState from './Context/GlobalContext';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ButtonToTop from './Components/ButtonToTop/ButtonToTop';

function App() {
  return (
    <GlobalState>
        <Router>
          <div className="body-css">
            <header className="App-header">
              <Navbar/>
              <Carousel/>
              <ButtonToTop/>
            </header>  
            <main>
              <Routes>
                
                <Route path='/' element={<Home/>}/>
                <Route path='/jugadores' element={<Jugadores/>}/>
                <Route path='/itemDetail/:id' element={<ItemDetailContainer/>}/>
                <Route path='/social' element={<Social/>}/>
                <Route path='/nosotros' element={<Nosotros/>}/>
                <Route path='/servicios' element={<Servicios/>}/>
                <Route path='/socios' element={<Socios/>}/>
                <Route path='/contacto' element={<Contacto/>}/>
                <Route path='*' element={<Error404/>}/>
              </Routes>
            </main>  
            <footer>
              <Footer/>
            </footer>
          </div>
        </Router>

    </GlobalState>
  );
}

export default App;
