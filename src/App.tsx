import { useEffect, useState } from "react";
import "./App.css";
import { HangImage } from "./components/HangImage";
import { letters } from "./helpers/letters";
import { getRandomWord } from "./helpers/getRandomWord";

function App() {
  // Palabra
  const [word] = useState(getRandomWord);
  // useState nos sirve para decir que hay un cambio.
  const [hiddenWord, setHiddenWord] = useState("_ ".repeat(word.length));
  const [ lose, setLose] = useState(false);
  const [ won, setWon] = useState(false);
  // Estamos creando una variable de estado
  const [attempts, setAttempts] = useState(0);

  // Es una acción que se va a ejecutar cuando nosotros digamos.
  useEffect( () => {
    if (attempts >= 9) {
      setLose(true);
    }
    // Se activara cuando hayan cambios de esta variable attempts
  }, [attempts]); // hooks

  // Es una acción que se va a ejecutar cuando nosotros digamos.
  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(' ').join('');
    if (word === currentHiddenWord) {
      setWon( true );
    }
  }, [hiddenWord]);

  // Creacion de una funcion con flecha
  const checkLetter = (letter: string) => {
    if (lose) return;
    if (won) return;

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
      
      {/* Mensaje de si perdio */}
      {
        (lose) ? <h2>Perdio {word}</h2> : ''
      }

      {/* Mensaje de si gano */}
      {
        (won) ? <h2>Felicidades tu ganaste</h2> : ''
      }

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
