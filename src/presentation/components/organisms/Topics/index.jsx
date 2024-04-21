// --- style
import style from "./style.module.scss";

// --- components
import TopicsItem from "presentation/components/molecules/TopicsItem";

// --- Topics
const Topics = (props) => {
  const { ttl, list } = props;

  return (
    <div className={style.topics}>
      <div className="container">
        <h2 className={style.ttl}>{ttl}</h2>
        <div className={style.list}>
          {list.map((val, idx) => (
            <TopicsItem key={`ti-${idx}`} {...val} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;
