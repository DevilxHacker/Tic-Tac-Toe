import { useState } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import isWinner from "../Winner/Winner";

function Grid() {
  const [turn, setTurn] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(false);
  const [draw, setDraw] = useState(0);

  function play(index) {
    if (turn == true) {
      board[index] = "O";
      setTurn(!true);
      setDraw(draw + 1);
    } else {
      board[index] = "X";
      setTurn(true);
    }
    const win = isWinner(board, turn ? "O" : "X");
    if (win) {
      setWinner(win);
    }
    setBoard([...board]);
  }

  function reset() {
    setBoard(Array(9).fill(""));
    setWinner(null);
    setTurn(true);
    setDraw(0);
  }

  return (
    <>
      {winner && (
        <>
          <h1 className="m-3 text-3xl font-bold text-center text-black ">
            Winner is {winner}{" "}
          </h1>
        </>
      )}
      {draw == 5 && (
        <>
          <h1 className="m-3 text-3xl font-bold text-center text-black ">
            Oh! It's a Draw
          </h1>
        </>
      )}

      <div className="grid grid-cols-3 gap-3 w-full max-w-[600px] mx-auto">
        {board.map((value, idx) => {
          return (
            <Card
              gameEnd={winner ? true : false}
              onPlay={play}
              player={value}
              key={idx}
              index={idx}
            />
          );
        })}
      </div>
      {winner && (
        <>
          <Button
            text="Reset"
            buttonType="Button"
            styleType="Fifth"
            onClickHandler={reset}
          />
        </>
      )}
      {draw == 5 && (
        <>
          <Button
            text="Reset"
            buttonType="Button"
            styleType="Fifth"
            onClickHandler={reset}
          />
        </>
      )}
    </>
  );
}
export default Grid;
