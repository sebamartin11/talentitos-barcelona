import React from 'react';
import Logotipo from "./img-03.jpg";
import "./Logo.css";
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div>
            <Link to='/'><img src={Logotipo} className ="logotalentitos" alt='logotalentitos'/></Link>
        </div>
    )
}

export default Logo