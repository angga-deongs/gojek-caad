// --- assets
import business from "core/assets/img/bg/bg-business.svg";
import gobiz from "core/assets/img/logo/gobiz.svg";
import midtrans from "core/assets/img/logo/midtrans.svg";
import moka from "core/assets/img/logo/moka.svg";
import selly from "core/assets/img/logo/selly.svg";

const dataBusiness = {
  bg: business,
  bgColor: "purple",
  ttl: "Business",
  subttl: "Manage your restaurants, run ads, create promos, and do more.",
  list: [
    {
      bg: "white",
      logo: gobiz,
      ttl: "gobiz",
      desc: "A Gojek app to run and grow your business.",
      action: {
        modifier: "arrow",
        to: "#",
        txt: "Know more",
      },
    },
    {
      bg: "white",
      logo: midtrans,
      ttl: "midtrans",
      desc: "Accept payments and make payouts easily",
      action: {
        modifier: "arrow",
        to: "#",
        txt: "Know more",
      },
    },
    {
      bg: "white",
      logo: moka,
      ttl: "moka",
      desc: "Cloud based POS that made selling easy",
      action: {
        modifier: "arrow",
        to: "#",
        txt: "Know more",
      },
    },
    {
      bg: "white",
      logo: selly,
      ttl: "selly",
      desc: "Keyboard for online sellers",
      action: {
        modifier: "arrow",
        to: "#",
        txt: "Know more",
      },
    },
  ],
};

export default dataBusiness;
