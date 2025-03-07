import { useState } from "react";
import "./App.css";
import { HangImage } from "./components/HangImage";
import { letters } from "./helpers/letters";

function App() {
  // Estamos creando una variable de estado
  const [ attempts, setAttempts] = useState(0);

  // Creacion de una funcion con flecha
  const checkLetter = (letter: string) => {
    console.log(letter);
    setAttempts( Math.min(attempts + 1, 9));
  }


  return (
    <div className="App">
      {/* Imágenes */}
      <HangImage imageNumber = { attempts }/>

      {/* Palabra oculta */}
      <h3>_ _ _ _ _ _ _ _ </h3>

      {/* Contador de intentos */}
      <h3>Intentos: {attempts}</h3>

      {/* Botones de letras */}
      {letters.map((letter) => (
        // Necesitamos poner un parámetros key para que reac sepa que letra es.
        <button 
        onClick={() => checkLetter(letter)}
        key={letter}>{letter}
        </button>
      ))}
    </div>
  );
}

export default App;
