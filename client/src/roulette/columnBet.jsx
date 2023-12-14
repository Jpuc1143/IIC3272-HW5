import React from "react";
import BetTypes from "../BetTypes.json"

const ColumnBet = ({ handleBet }) => {
  return (
    <div
      style={{
        paddingTop: "5px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "5px",
        width: "160px",
        backgroundColor: "blue",
      }}
    >
      <div
        style={{
          backgroundColor: "yellow",
          width: "50px",
          height: "50px",
          color: "black",
          fontSize: "24px",
          textAlign: "center",
          lineHeight: "50px",
          cursor: "pointer",
        }}
        onClick={() => handleBet(BetTypes.c1)}
      >
        C1
      </div>
      <div
        style={{
          backgroundColor: "yellow",
          width: "50px",
          height: "50px",
          color: "black",
          fontSize: "24px",
          textAlign: "center",
          lineHeight: "50px",
          cursor: "pointer",
        }}
        onClick={() => handleBet(BetTypes.c2)}
      >
        C2
      </div>
      <div
        style={{
          backgroundColor: "yellow",
          width: "50px",
          height: "50px",
          color: "black",
          fontSize: "24px",
          textAlign: "center",
          lineHeight: "50px",
          cursor: "pointer",
        }}
        onClick={() => handleBet(BetTypes.c3)}
      >
        C3
      </div>
    </div>
  );
};

export default ColumnBet;
