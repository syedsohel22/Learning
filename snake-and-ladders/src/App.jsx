import "./App.css";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Snakes and Ladders Game</h1>
      <GameBoard />
    </div>
  );
}

export default App;
