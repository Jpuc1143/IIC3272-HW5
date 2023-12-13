const CustomBets = ({ handleBet }) => {
  return (
    <div
      style={{
        marginTop: "55px",
        display: "flex",
        flexDirection: "column",
        width: "100px",
        backgroundColor: "blue",
        height: "100%",
        justifyContent: "space-between",
        padding: "5px",
      }}
    >
      <div
        style={{
          backgroundColor: "yellow",
          color: "black",
          fontSize: "24px",
          textAlign: "center",
          cursor: "pointer",
          height: "16%",
        }}
        onClick={() => handleBet("1-18")}
      >
        1 to 18
      </div>
      <div
        style={{
          backgroundColor: "yellow",
          color: "black",
          fontSize: "24px",
          textAlign: "center",
          cursor: "pointer",
          height: "16%",
        }}
        onClick={() => handleBet("even")}
      >
        Even
      </div>
      <div
        style={{
          backgroundColor: "Red",
          color: "white",
          fontSize: "24px",
          textAlign: "center",
          cursor: "pointer",
          height: "16%",
        }}
        onClick={() => handleBet("red")}
      >
        Red
      </div>
      <div
        style={{
          backgroundColor: "Black",
          color: "white",
          fontSize: "24px",
          textAlign: "center",
          cursor: "pointer",
          height: "16%",
        }}
        onClick={() => handleBet("black")}
      >
        Black
      </div>
      <div
        style={{
          backgroundColor: "yellow",
          color: "black",
          fontSize: "24px",
          textAlign: "center",
          cursor: "pointer",
          height: "16%",
        }}
        onClick={() => handleBet("odd")}
      >
        Odd
      </div>
      <div
        style={{
          backgroundColor: "yellow",
          color: "black",
          fontSize: "24px",
          textAlign: "center",
          cursor: "pointer",
          height: "16%",
        }}
        onClick={() => handleBet("19-36")}
      >
        19 to 36
      </div>
    </div>
  );
};
export default CustomBets;
