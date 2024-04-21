// --- assets
import employees from "core/assets/img/icons/employees.svg";
import partners from "core/assets/img/icons/driver-partners.svg";
import merchants from "core/assets/img/icons/merchants.svg";

const dataJoin = {
  ttl: "Join the ride",
  list: [
    {
      img: employees,
      ttl: "Employees",
      desc: "Behind Southeast Asia’s only hyper-growth startup are some billion-dollar brains, doing what they do best.",
      action: {
        modifier: "primary",
        to: "#",
        txt: "Join as employee",
      },
    },
    {
      img: partners,
      ttl: "Driver Partners",
      desc: "We’re home to 2 million+ driver partners, who enjoy a bundle of health and financial benefits.",
      action: {
        modifier: "primary",
        to: "#",
        txt: "Join as a driver partner",
      },
    },
    {
      img: merchants,
      ttl: "Merchants",
      desc: "We empower 500,000+ merchants with cutting-edge technologies that help them multiply reach and sales.",
      action: {
        modifier: "primary",
        to: "#",
        txt: "Join as a merchant",
      },
    },
  ],
};

export default dataJoin;
