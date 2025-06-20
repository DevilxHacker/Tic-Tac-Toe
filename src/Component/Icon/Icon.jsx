import { FaPencilAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaRegCircle } from "react-icons/fa6";

function Icon({ name }) {
  if (name == "circle") {
    return <FaRegCircle />;
  } else if (name == "cross") {
    return <ImCross />;
  } else {
    return <FaPencilAlt />;
  }
}

export default Icon;
