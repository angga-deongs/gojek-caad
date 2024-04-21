// --- templates
import Default from "presentation/components/templates/Default";

// --- components
import News from "presentation/components/organisms/News";

// --- data
import dataBlog from "./dataBlog";

// --- Blog
const Blog = (props) => {
  return (
    <Default>
      <News {...dataBlog} />
    </Default>
  );
};

export default Blog;
