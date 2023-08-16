import React from 'react'
import "./Carousel.css"
import image1 from "./img-01.jpg"
import image2 from "./img-04.jpg"
import image3 from "./img-05.jpg"

const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={image1} className= "img-carousel w-100" alt="img-talentitos1"/>
                </div>
                <div className="carousel-item">
                    <img src={image2} className= "img-carousel w-100" alt="img-talentitos2"/>
                </div>
                <div className="carousel-item">
                    <img src={image3} className= "img-carousel w-100" alt="img-talentitos3"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel