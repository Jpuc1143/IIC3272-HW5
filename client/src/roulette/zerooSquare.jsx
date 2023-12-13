const ZeroSquare = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "blue",
        marginBottom: "5px",
        justifyContent: "space-between",
      }}
    >
      <div
        className="square"
        style={{
          backgroundColor: "green",
          width: "75px",
          height: "50px",
          color: "white",
          fontSize: "24px",
          textAlign: "center",
          lineHeight: "50px",
          cursor: "pointer",
        }}
        onClick={() => props.handleBet(0)}
      >
        0
      </div>
      <div
        className="square"
        style={{
          backgroundColor: "green",
          width: "75px",
          height: "50px",
          color: "white",
          fontSize: "24px",
          textAlign: "center",
          lineHeight: "50px",
          cursor: "pointer",
        }}
        onClick={() => props.handleBet(0)}
      >
        00
      </div>
    </div>
  );
};

export default ZeroSquare;
