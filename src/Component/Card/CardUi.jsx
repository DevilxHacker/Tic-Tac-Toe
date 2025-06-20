function CardUi({ onPlay, player, index, gameEnd, symbol }) {
  return (
    <div
      className="flex items-center justify-center w-20 h-20 text-xl text-white bg-yellow-400 rounded-lg shadow-md sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 basis-1/3 justify-self-center"
      onClick={() => !gameEnd && player == "" && onPlay(index)}
    >
      {symbol}
    </div>
  );
}
export default CardUi;
