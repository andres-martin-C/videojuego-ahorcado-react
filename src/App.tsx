import "./App.css";
import { letters } from "./helpers/letters";

function App() {
  return (
    <div className="App">
      {/* Imágenes */}
      <h3>Imagen del juego</h3>

      {/* Palabra oculta */}
      <h3>_ _ _ _ _ _ _ _ </h3>

      {/* Contador de intentos */}
      <h3>Intentos: 0</h3>

      {/* Botones de letras */}
      {letters.map((letter) => (
        // Necesitamos poner un parámetros key para que reac sepa que letra es.
        <button key={letter}>{letter}</button>
      ))}
    </div>
  );
}

export default App;
