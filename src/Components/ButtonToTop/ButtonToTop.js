import React, { useState, useEffect } from 'react';
import './ButtonToTop.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';

const ButtonToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`button-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} className="subir" />
        </div>
    );
};

export default ButtonToTop;