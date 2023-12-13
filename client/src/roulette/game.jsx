import React, { useState } from "react";
import { Board } from "./board.jsx";
import useEth from "../contexts/EthContext/useEth.js";
import BidTypes from "../BidTypes.json";

const Game = () => {
  // define the cells of the board of a roulette game
  const board = [
    { id: 1, color: "red" },
    { id: 2, color: "black" },
    { id: 3, color: "red" },
    { id: 4, color: "black" },
    { id: 5, color: "red" },
    { id: 6, color: "black" },
    { id: 7, color: "red" },
    { id: 8, color: "black" },
    { id: 9, color: "red" },
    { id: 10, color: "black" },
    { id: 11, color: "black" },
    { id: 12, color: "red" },
    { id: 13, color: "black" },
    { id: 14, color: "red" },
    { id: 15, color: "black" },
    { id: 16, color: "red" },
    { id: 17, color: "black" },
    { id: 18, color: "red" },
    { id: 19, color: "red" },
    { id: 20, color: "black" },
    { id: 21, color: "red" },
    { id: 22, color: "black" },
    { id: 23, color: "red" },
    { id: 24, color: "black" },
    { id: 25, color: "red" },
    { id: 26, color: "black" },
    { id: 27, color: "red" },
    { id: 28, color: "black" },
    { id: 29, color: "black" },
    { id: 30, color: "red" },
    { id: 31, color: "black" },
    { id: 32, color: "red" },
    { id: 33, color: "black" },
    { id: 34, color: "red" },
    { id: 35, color: "black" },
    { id: 36, color: "red" },
  ];

  const {
    state: { contract, accounts },
  } = useEth();
  const [bets, setBets] = useState({});

  // define the function to handle the bet
  const handleBet = (betType) => {
    if (Object.hasOwn(bets, betType)) {
      delete bets[betType];
    } else {
      // Show modal asking for bet amount
      const amount = 0.001;
      setBets((bets) => {
        bets[betType] = amount;
        return bets;
      });
    }
  };

  return (
    <div className="game">
      <Board board={board} handleBet={handleBet} />
    </div>
  );
};

export default Game;
