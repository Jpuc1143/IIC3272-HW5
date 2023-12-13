import React from "react";

const Square = (props) => {
  return (
    <div
      className="square"
      style={{
        backgroundColor: props.color,
        width: "50px",
        height: "50px",
        color: "white",
        fontSize: "24px",
        textAlign: "center",
        lineHeight: "50px",
        cursor: "pointer",
      }}
      onClick={() => props.handleBet(props.id)}
    >
      {props.id}
    </div>
  );
};

export default Square;
