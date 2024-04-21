// --- style
import style from "./style.module.scss";

// --- components
import Button from "presentation/components/atoms/Button";

// --- JoinItem
const JoinItem = (props) => {
  const { ttl, img, desc, action } = props;
  return (
    <div className={style.card}>
      <div className={style.box}>
        <div className={style.img}>
          <img src={img} alt="Gojek Logo" className={style.el} />
        </div>
        <h5 className={style.name}>{ttl}</h5>
        <p className={style.desc}>{desc}</p>
        <Button to={action.to} text={action.txt} />
      </div>
    </div>
  );
};

export default JoinItem;
