// --- style
import style from "./style.module.scss";

// --- components
import ServicesItem from "presentation/components/molecules/ServicesItem";

// --- Services
const Services = (props) => {
  return (
    <div className={style.services}>
      <div className="container">
        <div className={style.list}>
          {props.list.map((val, idx) => (
            <ServicesItem key={`si-${idx}`} {...val} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
