// --- templates
import Default from "presentation/components/templates/Default";

// --- components
import HeroBanner from "presentation/components/organisms/HeroBanner";
import Scale from "presentation/components/organisms/Scale";
import Loyalty from "presentation/components/organisms/Loyalty";

// --- data
import dataHeroBanner from "./dataHeroBanner";
import dataPillars from "./dataPillars";
import dataLoyalty from "./dataLoyalty";

// --- Company
const Company = (props) => {
  return (
    <Default>
      <HeroBanner {...dataHeroBanner} />
      <Scale {...dataPillars} />
      <Loyalty {...dataLoyalty} />
    </Default>
  );
};

export default Company;
