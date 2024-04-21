// --- style
import style from "./style.module.scss";

// --- Components
import Button from "presentation/components/atoms/Button";

// --- Loyalty
const Loyalty = (props) => {
  const { ttl, img, desc, action } = props;
  return (
    <div className={style.loyalty}>
      <div className="container">
        <div className={style.inner}>
          <div className={style.img}>
            <img src={img} alt={ttl} className={style.el} />
          </div>
          <div className={style.txt}>
            <h4 className={style.ttl}>{ttl}</h4>
            {desc && <p className={style.desc}>{desc}</p>}
            <Button to={action.to} text={action.txt} variant="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loyalty;
