// --- style
import style from "./style.module.scss";

// --- Components
import Button from "presentation/components/atoms/Button";
import ScaleItem from "presentation/components/molecules/ScaleItem";

// --- Scale
const Scale = (props) => {
  const { ttl, action, list } = props;
  return (
    <div className={style.scale}>
      <div className="container">
        <div className={style.head}>
          <h2 className={style.ttl}>{ttl}</h2>
          {action && <Button to={action.to} text={action.txt} />}
        </div>
        <div className={style.list}>
          {list.map((val, idx) => (
            <ScaleItem key={`s-${idx}`} {...val} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scale;
