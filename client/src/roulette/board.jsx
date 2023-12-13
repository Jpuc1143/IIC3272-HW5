import React from "react";
import Square from "./square.jsx";
import ZeroSquare from "./zerooSquare.jsx";
import RowsBet from "./rowsBet.jsx";
import ColumnBet from "./columnBet.jsx";
import CustomBets from "./customBets.jsx";

export const Board = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div>
        <ZeroSquare handleBet={props.handleBet} />
        <div className="board" style={{ ...boardStyle }}>
          {props.board.map((square) => (
            <Square
              key={square.id}
              id={square.id}
              color={square.color}
              handleBet={props.handleBet}
            />
          ))}
        </div>
        <ColumnBet handleBet={props.handleBet} />
      </div>
      <div>
        <RowsBet handleBet={props.handleBet} />
      </div>
      <div>
        <CustomBets handleBet={props.handleBet} />
      </div>
    </div>
  );
};

const boardStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(12, 1fr)",
  gridGap: "5px",
  width: "160px",
  height: "100%",
  backgroundColor: "blue",
};
