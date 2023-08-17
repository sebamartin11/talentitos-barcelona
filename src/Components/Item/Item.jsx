import React from "react";
import '../Item/Item.css'

export const Item = ({data}) => {



    return (
    <div className="divSponsors">
        <section className="sectionCards">
            <div className="card col-sm-12 col-md-12 col-lg-12 col-xl-12" >
                <img src={data.img} className="sponsors card-img-top" alt={data.titulo} />
                <div className="card-body2">
                    <h5 className="card-title">{data.titulo}</h5>
                </div>
            </div>
        </section>
    </div>
    );
};

export default Item;