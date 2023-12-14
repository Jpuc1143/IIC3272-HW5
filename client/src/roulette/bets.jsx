// show current bets as a table
const Bets = ({ bets }) => {
  console.log(bets);
  if (!bets) return null;
  return (
    <table>
      <thead>
        <tr>
          <th>Bet Type</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(bets).map((betType) => (
          <tr key={betType}>
            <td>{betType}</td>
            <td>{bets[betType]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Bets;
