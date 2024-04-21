// --- templates
import Default from "presentation/components/templates/Default";

// --- components
import HeroBanner from "presentation/components/organisms/HeroBanner";
import Forte from "presentation/components/organisms/Forte";
import Join from "presentation/components/organisms/Join";

// --- data
import dataHeroBanner from "./dataHeroBanner";
import dataDrives from "./dataDrives";
import dataJoin from "./dataJoin";

// --- Careers
const Careers = (props) => {
  return (
    <Default>
      <HeroBanner {...dataHeroBanner} />
      <Forte {...dataDrives} />
      <Join {...dataJoin} />
    </Default>
  );
};

export default Careers;
