import { useState } from "react";
import "./App.css";
import { HangImage } from "./components/HangImage";
import { letters } from "./helpers/letters";

function App() {
  // Palabra
  const [word] = useState("COMPUTADORA");
  // useState nos sirve para decir que hay un cambio.
  const [hiddenWord, setHiddenWord] = useState("_ ".repeat(word.length));

  // Estamos creando una variable de estado
  const [attempts, setAttempts] = useState(0);

  // Creacion de una funcion con flecha
  const checkLetter = (letter: string) => {
    if (!word.includes(letter)) {
      setAttempts(Math.min(attempts + 1, 9));
      return;
    }
    
    // retorna un arreglo y quita todos los espacios.
    const hiddenWordArray = hiddenWord.split(' ');

    for (let i = 0; i < word.length; i++) {
      // Si la letra es igual a la que me esta dando entonces lo
      // remplaza.
      if (word[i] === letter) {
        // Remplaza el valor de esa posición por la letra.
        hiddenWordArray[i] = letter;
      }
    }

    setHiddenWord(hiddenWordArray.join(' '));
    
  };

  return (
    <div className="App">
      {/* Imágenes */}
      <HangImage imageNumber={attempts} />

      {/* Palabra oculta */}
      <h3>{hiddenWord}</h3>

      {/* Contador de intentos */}
      <h3>Intentos: {attempts}</h3>

      {/* Botones de letras */}
      {letters.map((letter) => (
        // Necesitamos poner un parámetros key para que reac sepa que letra es.
        <button onClick={() => checkLetter(letter)} key={letter}>
          {letter}
        </button>
      ))}
    </div>
  );
}

export default App;
