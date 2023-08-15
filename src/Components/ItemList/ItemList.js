import React from 'react'
import {Item} from '../Item/Item'



const ItemList = ({data}) => {


    return (
        <div>
        {
            data.map(miSponsors => (
                <Item key={miSponsors.id} data={miSponsors}/>
            ))
        }
        </div>
    )
};

export default ItemList