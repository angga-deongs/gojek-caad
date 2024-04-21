// --- core
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// --- components
import Header from "presentation/components/organisms/Header";
import Footer from "presentation/components/organisms/Footer";

// --- Default
const Default = (props) => {
  const { children } = props;
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </>
  );
};
export default Default;
