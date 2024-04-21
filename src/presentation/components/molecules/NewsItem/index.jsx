// --- link
import { Link } from "react-router-dom";

// --- style
import style from "./style.module.scss";

// --- NewsItem
const NewsItem = (props) => {
  const { to, ttl, img, desc } = props;

  return (
    <div className={style.card}>
      <div className={style.box}>
        <Link to={to} className={style.lnk}>
          {ttl}
        </Link>
        <div className={style.img}>
          <img src={img} alt={ttl} className={style.el} />
        </div>
        <div className={style.txt}>
          <h4 className={style.name}>{ttl}</h4>
          <h6 className={style.date}>{desc}</h6>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
