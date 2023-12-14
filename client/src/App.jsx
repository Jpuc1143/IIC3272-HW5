import { EthProvider } from "./contexts/EthContext";
import Game from "./roulette/game";

function App() {
  return (
    <EthProvider>
      <div className="game-container">
        <Game />
      </div>
    </EthProvider>
  );
}

export default App;
