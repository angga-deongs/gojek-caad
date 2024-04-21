// --- templates
import Default from "presentation/components/templates/Default";

// --- components
import Banner from "presentation/components/organisms/Banner";
import Topics from "presentation/components/organisms/Topics";

// --- data
import dataBanner from "./dataBanner";
import dataTopics from "./dataTopics";

// --- Help
const Help = (props) => {
  return (
    <Default>
      <Banner {...dataBanner} />
      <Topics {...dataTopics} />
    </Default>
  );
};

export default Help;
