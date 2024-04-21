// --- assets
import goride from "core/assets/img/logo/goride.svg";
import gocar from "core/assets/img/logo/gocar.svg";
import gosend from "core/assets/img/logo/gosend.svg";
import gobox from "core/assets/img/logo/gobox.svg";

const dataDrives = {
  ttl: "What drives you?",
  list: [
    {
      logo: goride,
      ttl: "goride",
      desc: "Ride your customers on safe and steady two-wheelers.",
      action: {
        modifier: "primary",
        to: "#",
        txt: "Know more",
      },
    },
    {
      logo: gocar,
      ttl: "gocar",
      desc: "Drive the four-wheeler for comfortable trips.",
      action: {
        modifier: "primary",
        to: "#",
        txt: "Know more",
      },
    },
    {
      logo: gosend,
      ttl: "gosend",
      desc: "Deliver packages safely and quickly.",
      action: {
        modifier: "primary",
        to: "#",
        txt: "Know more",
      },
    },
    {
      logo: gobox,
      ttl: "gobox",
      desc: "Help customers move heavy items.",
      action: {
        modifier: "primary",
        to: "#",
        txt: "Know more",
      },
    },
  ],
};

export default dataDrives;
