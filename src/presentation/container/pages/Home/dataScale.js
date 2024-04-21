// --- assets
import appDownload from "core/assets/img/dummy/app-download.png";
import driverPartners from "core/assets/img/dummy/driver-partners.png";
import gofoodMerchants from "core/assets/img/dummy/gofood-merchants.png";
import jumpInDownload from "core/assets/img/dummy/jump-in-downloads.png";

const dataScale = {
  ttl: "We scale like a dream",
  action: {
    modifier: "primary",
    to: "#",
    type: "submit",
    txt: "Scale with us",
  },
  list: [
    {
      bgColor: "green",
      img: appDownload,
      name: "190 million+",
      desc: "app downloads since 2015",
    },
    {
      bgColor: "purple",
      img: driverPartners,
      name: "2 million+",
      desc: "driver partners",
    },
    {
      bgColor: "orange",
      img: gofoodMerchants,
      name: "900,000+",
      desc: "GoFood merchants",
    },
    {
      bgColor: "blue",
      img: jumpInDownload,
      name: "2.448x",
      desc: "jump in downloads from 2015 to 2020",
    },
  ],
};

export default dataScale;
