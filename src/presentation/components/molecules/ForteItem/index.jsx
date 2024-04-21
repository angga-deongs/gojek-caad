// -- components
import Button from "presentation/components/atoms/Button";

// --- style
import style from "./style.module.scss";

// --- ForteItem
const ForteItem = (props) => {
  const { bg, logo, ttl, desc, action } = props;

  let styleBox = style.box;
  if (bg) {
    styleBox = styleBox += " " + style.white;
  } else {
    styleBox = style.box;
  }
  return (
    <div className={style.card}>
      <div className={styleBox}>
        {logo ? (
          <div className={style.logo}>
            <img src={logo} alt={ttl} className={style.el} />
          </div>
        ) : (
          <h3 className={style.name}>{ttl}</h3>
        )}
        <p className={style.desc}>{desc}</p>
        <Button href={action.to} text={action.txt} />
      </div>
    </div>
  );
};

export default ForteItem;
