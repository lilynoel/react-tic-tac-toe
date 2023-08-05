const Cell = ({ symbol, coordinate, updateBoard }) => {
  return (
    <div onClick={() => updateBoard(coordinate)} className="cell">
      {symbol}
    </div>
  );
};

export default Cell;
