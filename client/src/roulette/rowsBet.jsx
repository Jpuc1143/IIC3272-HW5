import BetTypes from "../BetTypes.json"

const RowsBet = ({ handleBet }) => {
  return (
    <div
      style={{
        marginTop: "55px",
        display: "flex",
        flexDirection: "column",
        width: "50px",
        backgroundColor: "blue",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          backgroundColor: "yellow",
          width: "50px",
          color: "black",
          fontSize: "24px",
          textAlign: "center",
          cursor: "pointer",
          height: "30%",
        }}
        onClick={() => handleBet(BetTypes.r1)}
      >
        R1
      </div>
      <div
        style={{
          backgroundColor: "yellow",
          width: "50px",
          color: "black",
          fontSize: "24px",
          textAlign: "center",
          cursor: "pointer",
          height: "30%",
        }}
        onClick={() => handleBet(BetTypes.r2)}
      >
        R2
      </div>
      <div
        style={{
          backgroundColor: "yellow",
          width: "50px",
          color: "black",
          fontSize: "24px",
          textAlign: "center",
          cursor: "pointer",
          height: "30%",
        }}
        onClick={() => handleBet(BetTypes.r3)}
      >
        R3
      </div>
    </div>
  );
};
export default RowsBet;
