import React from 'react';
//import './Tarjeta.css'

const Tarjetas =(props)=>{

    return(
        <div className='tarjeta'>
            <h2>dolar blue</h2>
            <p>compra: {props.dolar}</p>
        </div>
    )

}

export default Tarjetas;