// --- templates
import Default from "presentation/components/templates/Default";

// --- components
import HeroBanner from "presentation/components/organisms/HeroBanner";
import Scale from "presentation/components/organisms/Scale";
import Loyalty from "presentation/components/organisms/Loyalty";
import Join from "presentation/components/organisms/Join";

// --- data
import dataHeroBanner from "./dataHeroBanner";
import dataScale from "./dataScale";
import dataLoyalty from "./dataLoyalty";
import dataJoin from "./dataJoin";

// --- Home
const Home = (props) => {
  return (
    <Default>
      <HeroBanner {...dataHeroBanner} />
      <Scale {...dataScale} />
      <Loyalty {...dataLoyalty} />
      <Join {...dataJoin} />
    </Default>
  );
};

export default Home;
