import React from 'react';

const Results = (props)=>{
    const categorias = props.monotributo;
    const salarioEnPesos = props.toPesos;
    const categoriaMonotributo = Object.keys(categorias).filter((cat)=> categorias[cat].ingresos/12 > salarioEnPesos );
    const tarifa = categoriaMonotributo.map((cat)=>categorias[cat].tarifa)
    const prepaga = categoriaMonotributo.map((cat)=>categorias[cat].prepaga)

    return (
        <div>
        <h3>Salario en pesos</h3>
        <h3>$ {salarioEnPesos.toFixed(2)}</h3>
        {salarioEnPesos > (categorias.H.ingresos/12)? <h4>Responsable inscripto</h4> : <h4>Monotributo Categoría {categoriaMonotributo[0]}</h4> }
        <h4>-$ {(tarifa[0]).toFixed(2)}</h4>
        <h4>Prepaga Osde 310</h4>
        <h4>-$ {(prepaga[0]).toFixed(2)}</h4>
        <h2>Total</h2>
        <h1>{(salarioEnPesos - tarifa[0] - prepaga[0]).toFixed(2) }</h1>
        </div>
    )
}

export default Results
