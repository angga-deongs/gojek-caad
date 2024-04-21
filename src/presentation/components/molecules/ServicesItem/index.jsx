// --- style
import style from "./style.module.scss";

// --- ServicesItem
const ServicesItem = (props) => {
  const { bgColor, products, ttl, desc } = props;

  let styleName = style.card;
  switch (bgColor) {
    case "green":
      styleName += " " + style.green;
      break;
    case "blue":
      styleName += " " + style.blue;
      break;
    case "red":
      styleName += " " + style.red;
      break;
    case "purple":
      styleName += " " + style.purple;
      break;
    default:
      styleName = style.card;
  }
  return (
    <div className={styleName}>
      <div className={style.box}>
        <div className={style.products}>
          {products.map((val, idx) => (
            <div className={style.logo} key={`si-${idx}`}>
              <img src={val.logo} alt="gojek" className={style.el} />
            </div>
          ))}
        </div>
        <div className={style.txt}>
          <h5 className={style.ttl}>{ttl}</h5>
          <p className={style.desc}>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;
