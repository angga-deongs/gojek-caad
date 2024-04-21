// --- style
import style from "./style.module.scss";

// --- HeroBanner
const HeroBanner = (props) => {
  const { type, src, ttl, desc } = props;
  return (
    <div className={style.heroBanner}>
      {type === "video" ? (
        <div className={style.video}>
          <iframe
            width="560"
            height="315"
            src={src}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      ) : (
        <div className={style.img}>
          <img className={style.el} src={src} alt={ttl} />
        </div>
      )}
      <div className="container">
        <div className={style.txt}>
          <h1 className={style.ttl}>{ttl}</h1>
          {desc ? <p className={style.desc}>{desc}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
