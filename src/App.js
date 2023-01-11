import './App.css';
import { useState, useEffect } from 'react';
import Results from './Results';
import Tarjetas from './Tarjeta';
import monotributo from './monotributo.json';

function App() {

  const[dolar, setDolar] = useState(0);
  //const[isLoading, setIsLoading] = useState(true);
  const[pesos, setPesos] = useState(0)
  const[resultado, setResultado] = useState(0)
  useEffect(()=>{
    fetch("https://api.bluelytics.com.ar/v2/latest")
    .then((response) => response.json())  
    .then((dolares) => {
      setDolar(dolares.blue.value_sell)

    })
  },[])//ver manejo de errores.

  const handleCalcular=(e)=>{
    e.preventDefault()
    setResultado(pesos / dolar)
  }

  return (
    <div className="App">
      <h1>cobra en dolares</h1>
      <Tarjetas dolar = {dolar}/>
      <form className="Form" action="">
        <label htmlFor="">Salario neto en pesos</label>
        <input
          type="text" 
          value={pesos}
          onChange={(e) => setPesos(e.target.value)}
        />
        <button onClick={handleCalcular}>Calcular</button>
      </form>
      <Results dolar = {dolar} toDolar = {resultado} monotributo = {monotributo}/>      
      
    </div>
  );
}

export default App;
