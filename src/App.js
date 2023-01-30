import './App.css';
import { useState, useEffect } from 'react';
import Results from './Results';
import Tarjetas from './Tarjeta';
import monotributo from './monotributo.json';
import Affiliate from './Affiliate';

function App() {

  const[dolar, setDolar] = useState(0);
  //const[isLoading, setIsLoading] = useState(true);
  const[salario, setSalario] = useState(0)
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
    setResultado(salario * dolar)
  }

  return (
    <div className="App">
      <h1>Cuanto cobro?</h1>
      <Tarjetas dolar = {dolar}/>
      <form className="Form" action="">
        <label htmlFor="">Salario en dolares</label>
        <input
          type="text" 
          value={salario}
          onChange={(e) => setSalario(e.target.value)}
        />
        <button onClick={handleCalcular}>Calcular</button>
      </form>
      <Results dolar = {dolar} toPesos = {resultado} monotributo = {monotributo}/>      
      <Affiliate/>
    </div>
  );
}

export default App;
