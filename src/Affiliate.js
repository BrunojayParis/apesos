import React from 'react';
import './Affiliate.css'

const Affiliate = () =>{
    return(
        <div className='affiliate'>
            <div className='payment'>
                <h1>Payoneer</h1>
                <p>Tu cuenta Payoneer es la llave para recibir y hacer pagos internacionales, recibir fondos, gestionar tu negocio digital o acceder a capital de trabajo. Payoneer abre tu empresa al mundo.</p>
                <button>Payoneer</button>
            </div>
            <div className='payment'>
                <h1>Deel</h1>
                <p>Deel es una de las primeras y únicas empresas en unificar los pagos de freelancers, los servicios de employer of record y la gestión de nómina en una plataforma fácil de usar.</p>
                <button>Deel</button>
            </div>
            <div className='payment'>
                <h1>MyCompanyWorks</h1>
                <p>Tu empresa en estados unidos.</p>
                
                <button>myCompanyWorks</button>
            </div>

        </div>

    )
}


export default Affiliate
