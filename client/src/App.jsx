import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Game from "./roulette/game";

import Ruleta from "./roulette/roulette"; 

function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          <Intro />
          <hr />
          <Setup />
          <hr />
          <Demo />
          <hr />
          <Footer />
        </div>
      </div>
      <div className="game-container">
        <Game />
        <div className="ruleta-container">
          <Ruleta />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
