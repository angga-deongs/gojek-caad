// --- style
import style from "./style.module.scss";

// --- components
import JoinItem from "presentation/components/molecules/JoinItem";

// --- Join
const Join = (props) => {
  const { ttl, list } = props;
  return (
    <div className={style.join}>
      <div className="container">
        <h2 className={style.ttl}>{ttl}</h2>
        <div className={style.list}>
          {list.map((val, idx) => (
            <JoinItem key={`ji-${idx}`} {...val} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Join;
