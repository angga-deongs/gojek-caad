// --- style
import style from "./style.module.scss";

// --- TopicsItem
const TopicsItem = (props) => {
  const { to, ttl, img } = props;

  return (
    <div className={style.card}>
      <div className={style.box}>
        <a href={to} className={style.lnk}>
          {ttl}
        </a>
        <div className={style.img}>
          <img src={img} alt={ttl} className={style.el} />
        </div>
        <h6 className={style.name}>{ttl}</h6>
      </div>
    </div>
  );
};

export default TopicsItem;
