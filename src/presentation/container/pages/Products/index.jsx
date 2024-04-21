// --- templates
import Default from "presentation/components/templates/Default";

// --- components
import HeroBanner from "presentation/components/organisms/HeroBanner";
import Services from "presentation/components/organisms/Services";
import Loyalty from "presentation/components/organisms/Loyalty";
import Forte from "presentation/components/organisms/Forte";

// --- data
import dataHeroBanner from "./dataHeroBanner";
import dataServices from "./dataServices";
import dataLoyalty from "./dataLoyalty";
import dataFoodAndShopping from "./dataFoodAndShopping";
import dataBusiness from "./dataBusiness";

// --- Products
const Products = (props) => {
  return (
    <Default>
      <HeroBanner {...dataHeroBanner} />
      <Services {...dataServices} />
      <Loyalty {...dataLoyalty} />
      <Forte {...dataFoodAndShopping} />
      <Forte {...dataBusiness} />
    </Default>
  );
};

export default Products;
