import Icon from "../Icon/Icon";
import CardUi from "./CardUi";

function Card({ onPlay, player, index, gameEnd }) {
  let icon = <Icon />;
  if (player == "X") {
    icon = <Icon name={"cross"} />;
  } else if (player == "O") {
    icon = <Icon name={"circle"} />;
  }
  return (
    <CardUi
      gameEnd={gameEnd}
      onPlay={onPlay}
      player={player}
      key={index}
      index={index}
      symbol={icon}
    />
  );
}
export default Card;
