// --- style
import style from "./style.module.scss";

// --- ScaleItem
const ScaleItem = (props) => {
  const { bgColor, modifier, img, ttl, name, desc } = props;

  // --- set background color
  let styleName = style.card;
  switch (bgColor) {
    case "red":
      styleName += " " + style.red;
      break;
    case "blue":
      styleName += " " + style.blue;
      break;
    case "green":
      styleName += " " + style.green;
      break;
    case "purple":
      styleName += " " + style.purple;
      break;
    case "orange":
      styleName += " " + style.orange;
      break;
    default:
      styleName = style.card;
  }

  // --- set reverse
  if (modifier) {
    styleName += " " + style.reverse;
  }

  return (
    <div className={styleName}>
      <div className={style.box}>
        <div className={style.img}>
          <img src={img} alt={ttl} className={style.el} />
        </div>
        <div className={style.txt}>
          <h4 className={style.name}>{name}</h4>
          <p className={style.desc}>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ScaleItem;
