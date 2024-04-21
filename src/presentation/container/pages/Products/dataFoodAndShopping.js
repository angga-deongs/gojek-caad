// --- assets
import foodandshopping from "core/assets/img/bg/bg-food-and-shopping.svg";
import gofood from "core/assets/img/logo/gofood.svg";
import gomart from "core/assets/img/logo/gomart.svg";
import gomed from "core/assets/img/logo/gomed.svg";
import goshop from "core/assets/img/logo/goshop.svg";

const dataFoodAndShopping = {
  bg: foodandshopping,
  bgColor: "red",
  ttl: "Food & Shopping",
  subttl: "Fill your cart with food, groceries, medicines, electronics and more. Without stepping out.",
  list: [
    {
      bg: "white",
      logo: gofood,
      ttl: "gofood",
      desc: "Hungry? Order in.",
      action: {
        modifier: "arrow",
        to: "#",
        txt: "Know more",
      },
    },
    {
      bg: "white",
      logo: gomart,
      ttl: "gomart",
      desc: "Groceries delivered from stores nearby.",
      action: {
        modifier: "arrow",
        to: "#",
        txt: "Know more",
      },
    },
    {
      bg: "white",
      logo: gomed,
      ttl: "gomed",
      desc: "Chat with doctors, order in medicines.",
      action: {
        modifier: "arrow",
        to: "#",
        txt: "Know more",
      },
    },
    {
      bg: "white",
      logo: goshop,
      ttl: "goshop",
      desc: "Buy anything from anywhere",
      action: {
        modifier: "arrow",
        to: "#",
        txt: "Know more",
      },
    },
  ],
};

export default dataFoodAndShopping;
