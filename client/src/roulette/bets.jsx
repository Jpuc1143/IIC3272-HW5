// show current bets as a table
const Bets = ({ bets }) => {
  const betRows = bets.map((bet, index) => (
    <tr key={index}>
      <td>{bet.number}</td>
      <td>{bet.amount}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Bet</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>{betRows}</tbody>
    </table>
  );
};

export default Bets;
