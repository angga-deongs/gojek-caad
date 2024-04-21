// --- style
import style from "./style.module.scss";

// --- link
import { Link } from "react-router-dom";

// --- components
import NewsItem from "presentation/components/molecules/NewsItem";

// --- News
const News = (props) => {
  const { ttl, desc, list } = props;
  return (
    <div className={style.news}>
      <div className="container">
        <div className={style.head}>
          <h1 className={style.ttl}>{ttl}</h1>
          <p className={style.desc}>{desc}</p>
        </div>
        <div className={style.list}>
          {list.map((val, idx) => (
            <NewsItem key={`ni-${idx}`} {...val} />
          ))}
        </div>
        <div className={style.action}>
          <Link to="/news" className={style.lnk}>
            <i className="fi fi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
