// --- style
import style from "./style.module.scss";

// --- Banner
const Banner = (props) => {
  const { ttl, img } = props;
  return (
    <div className={style.banner}>
      <div className="container">
        <h1 className={style.ttl}>{ttl}</h1>
        <div className={style.bg}>
          <img src={img} alt={ttl} className={style.el + " " + style.el1} />
          <img src={img} alt={ttl} className={style.el + " " + style.el2} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
