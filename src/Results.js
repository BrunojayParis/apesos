import React from 'react';

const Results = (props)=>{
    const categorias = props.monotributo;
    const salarioEnDolares = props.toDolar;
    const valorDolar = props.dolar;
    const categoriaMonotributo = Object.keys(categorias).filter((cat)=> categorias[cat].ingresos/12 > salarioEnDolares*valorDolar);
    const tarifa = categoriaMonotributo.map((cat)=>categorias[cat].tarifa)
    const prepaga = categoriaMonotributo.map((cat)=>categorias[cat].prepaga)

    return (
        <div>
        <h3>Salario en dolares</h3>
        <h3>U$D {salarioEnDolares.toFixed(2)}</h3>
        <h4>Monotributo Categoría {categoriaMonotributo[0]}</h4>
        <h4>+U$D {(tarifa[0]/valorDolar).toFixed(2)}</h4>
        <h4>Prepaga Osde 310</h4>
        <h4>+U$D {(prepaga[0]/valorDolar).toFixed(2)}</h4>
        <h2>Total</h2>
        <h1>{(salarioEnDolares + (tarifa[0]/valorDolar) + (prepaga[0]/valorDolar)).toFixed(2) }</h1>
        </div>
    )
}

export default Results
