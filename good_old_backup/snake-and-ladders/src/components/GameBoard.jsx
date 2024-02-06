const GameBoard = () => {
  // Create an array of numbers from 1 to 100
  const boardNumbers = Array.from({ length: 100 }, (_, index) => index + 1);

  return (
    <div className="grid grid-cols-10 gap-1 w-64 mx-auto">
      {boardNumbers.map((number) => (
        <div
          key={number}
          className={`h-12 flex items-center justify-center text-white font-semibold ${
            number % 4 === 0
              ? "bg-yellow-400"
              : number % 4 === 1
              ? "bg-blue-400"
              : number % 4 === 2
              ? "bg-green-400"
              : "bg-red-400"
          }`}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
