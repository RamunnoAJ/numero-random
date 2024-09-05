import { useState } from "react";
import NumberAnimation from "./components/NumberAnimation";
import "./App.css";

function App() {
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const fetchRandomNumber = async () => {
    try {
      const response = await fetch("http://localhost:3000/random", {
        method: "POST",
      });
      const data = await response.json();
      setRandomNumber(data.value);
    } catch (error) {
      console.error("Error fetching random number:", error);
    }
  };

  return (
    <div className="App">
      <button
        onClick={fetchRandomNumber}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Generar número aleatorio
      </button>
      {randomNumber !== null && <NumberAnimation targetNumber={randomNumber} />}
    </div>
  );
}

export default App;
