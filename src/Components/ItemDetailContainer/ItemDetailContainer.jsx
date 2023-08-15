import React from "react";
import ItemDetail from '../ItemDetail/ItemDetail'



export const ItemDetailContainer = (data) => {


    return (
        <div>
            <ItemDetail data = {data}/>
        </div>
    );
};

export default ItemDetailContainer