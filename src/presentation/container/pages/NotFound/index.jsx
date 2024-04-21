// - templates
import { Link } from "react-router-dom";
import Default from "presentation/components/templates/Default";

const NotFound = () => {
  return (
    <Default>
      <div className="not-found">
        <div className="container">
          <div className="not-found__inner">
            <div className="not-found__illustration">
              <img src="https://site-norns.gojek.com/uploads/7cfa4ccce877359f329ac827786c1f2a_5ab19d97db.webp" alt="Oops! Page is unavailable :(" />
            </div>
            <div className="not-found__text">
              <h2 className="not-found__title">Oops! Page is unavailable :(</h2>
              <p className="not-found__description">But don't be sad #ThereIsAlwaysAWay for you!</p>
              <div className="not-found__btn">
                <Link to="/">Back to Homepage</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Default>
  );
};

export default NotFound;
