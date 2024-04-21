// --- style
import style from "./style.module.scss";

// --- Link
import { Link } from "react-router-dom";

// --- Button
const Button = (props) => {
  const { to, text, type, icon } = props;

  // --- set variant
  let styleName = style.btn;
  // switch (variant) {
  //   case "primary":
  //     styleName += " " + style.primary;
  //     break;
  //   case "secondary":
  //     styleName += " " + style.secondary;
  //     break;
  //   default:
  //     styleName = style.btn;
  // }

  return (
    <>
      {to && (
        <Link to={to} className={styleName}>
          {text}
          {icon && <i className={`fi-${icon}`}></i>}
        </Link>
      )}
      {!to && (
        <button type={type} className={styleName}>
          {text}
          {icon && <i className={`fi-${icon}`}></i>}
        </button>
      )}
    </>
  );
};

export default Button;
