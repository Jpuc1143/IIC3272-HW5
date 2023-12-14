import React, { useState, useEffect, useRef } from "react";
import { Board } from "./board.jsx";
import Bets from "./bets.jsx";
import Ruleta from "./roulette.jsx";
import useEth from "../contexts/EthContext/useEth.js";
import BetTypes from "../BetTypes.json";

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

  const [bets, setBets] = useState({});
  // define the function to handle the bet
  // const handleBet = (num) => {
  //   // create an alert and ask for an amount to bet
  //   const amount = prompt("How much do you want to bet?");
  //   setBet([...bet, { betType: num, amount: amount }]);
  // };

  const {
    state: { contract, accounts },
  } = useEth();
  const [subscribed, setSubscribed] = useState(false);
  const donateInputRef = useRef();

  // define the function to handle the bet
  const handleBet = (betType) => {
    if (Object.hasOwn(bets, betType)) {
      setBets((bets) => {
        delete bets[betType];
        return { ...bets };
      });
    } else {
      const amount = prompt("How much do you want to bet?");
      const amountAsInt = parseInt(amount);
      if (!Number.isNaN(amountAsInt)) {
        setBets((bets) => ({ ...bets, [betType]: amountAsInt }));
      }
    }
  };

  const submitBets = async () => {
    console.log(contract);
    let totalBet = 0;
    const structuredBets = Object.entries(bets).map(([betType, amount]) => {
      totalBet += amount;
      return { betType: parseInt(betType), amount: amount };
    });
    await contract.methods
      .bet(structuredBets)
      .send({ from: accounts[0], value: totalBet });
    setBets({});
  };

  const donate = async () => {
    await contract.methods
      .deposit()
      .send({
        from: accounts[0],
        value: parseInt(donateInputRef.current.value),
      });
  };

  useEffect(() => {
    if (!subscribed && contract !== null) {
      setSubscribed(true);
      contract.events.Result().on("data", (event) => {
        setRotation((prevRotation) => prevRotation + 720);
        const data = event.returnValues;
        console.log(data);
        if (data._payout > 0) {
          alert(`The number was ${data._result}. You won ${data._payout}!`);
        } else {
          alert(`The number was ${data._result}. You won nothing...`);
        }
      });
    }
  }, [contract]);

  const [rotation, setRotation] = useState(0);

  return (
    <div className="game">
      <h1>Roulette Game</h1>
      <input ref={donateInputRef} type="text" />
      <button onClick={donate}>Donate</button>
      <Bets bets={bets} />
      <Ruleta rotation={rotation} />
      <Board board={board} handleBet={handleBet} />
      <button onClick={submitBets}>Confirmar apuesta y enviar</button>
    </div>
  );
};

export default Game;
