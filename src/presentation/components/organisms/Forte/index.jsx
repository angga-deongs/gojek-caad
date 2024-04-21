// --- style
import style from "./style.module.scss";

// --- components
import ForteItem from "presentation/components/molecules/ForteItem";

// --- Forte
const Forte = (props) => {
  const { bg, bgColor, ttl, subttl, list } = props;

  let styleName = style.forte;
  if (bgColor) {
    styleName = style.forte;
    switch (bgColor) {
      case "red":
        styleName += " " + style.red;
        break;
      case "purple":
        styleName += " " + style.purple;
        break;
      default:
        styleName = style.forte;
    }
  }
  return (
    <div className={styleName}>
      {/* forte img */}
      {bgColor && (
        <div className={style.bg}>
          <img src={bg} alt={ttl} className={style.el} />
        </div>
      )}
      {/* forte list */}
      <div className="container">
        <div className={style.head}>
          <h4 className={style.ttl}>{ttl}</h4>
          {subttl && <p className={style.subttl}>{subttl}</p>}
        </div>
        <div className={style.list}>
          {list.map((val, idx) => (
            <ForteItem key={`fi-${idx}`} {...val} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forte;
