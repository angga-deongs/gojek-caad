// --- templates
import Default from "presentation/components/templates/Default";

// --- components
import HeroBanner from "presentation/components/organisms/HeroBanner";
import Forte from "presentation/components/organisms/Forte";
import Join from "presentation/components/organisms/Join";

// --- data
import dataHeroBanner from "./dataHeroBanner";
import dataJoin from "./dataJoin";
import dataForte from "./dataForte";

// --- Partner
const Partner = (props) => {
  return (
    <Default>
      <HeroBanner {...dataHeroBanner} />
      <Forte {...dataForte} />
      <Join {...dataJoin} />
    </Default>
  );
};

export default Partner;
