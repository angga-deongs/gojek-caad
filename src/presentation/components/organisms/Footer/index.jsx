// --- link
import { Link } from "react-router-dom";

// --- style
import style from "./style.module.scss";

// --- assets
import gojekLogo from "core/assets/img/logo/gojek.svg";

// --- data
const dataFooter = {
  list: [
    {
      ttl: "Company",
      list: [
        {
          to: "/about",
          txt: "About",
        },
        {
          to: "/products",
          txt: "Products",
        },
        {
          to: "/blog",
          txt: "Blog",
        },
      ],
    },
    {
      ttl: "Join with us",
      list: [
        {
          to: "#",
          txt: "Driver Partners",
        },
        {
          to: "#",
          txt: "Merchant Partners",
        },
      ],
    },
    {
      ttl: "Careers",
      list: [
        {
          to: "#",
          txt: "Student",
        },
        {
          to: "#",
          txt: "Professional",
        },
      ],
    },
    {
      ttl: "Get in touch",
      list: [
        {
          to: "#",
          txt: "Help Center",
        },
        {
          to: "#",
          txt: "Our Location",
        },
      ],
    },
    {
      socmed: true,
      list: [
        {
          ttl: "Connect with Us",
          list: [
            {
              to: "#",
              icon: "fi fi-facebook",
            },
            {
              to: "#",
              icon: "fi fi-twitter",
            },
            {
              to: "#",
              icon: "fi fi-instagram",
            },
            {
              to: "#",
              icon: "fi fi-youtube",
            },
          ],
        },
        {
          ttl: "Download the app",
          list: [
            {
              to: "#",
              icon: "fi fi-googleplay",
            },
            {
              to: "#",
              icon: "fi fi-apple",
            },
          ],
        },
      ],
    },
  ],
  copyright: "© 2023 Gojek | Gojek is a trademark of PT GoTo Gojek Tokopedia Tbk. Registered in the Directorate General of Intellectual Property of the Republic of Indonesia.",
};

// --- Footer
const Footer = (props) => {
  return (
    <div className={style.footer}>
      <div className="container">
        <Link to="/" className={style.logo}>
          <img src={gojekLogo} alt="gojek" className={style.el} />
        </Link>
        <div className={style.inner}>
          {dataFooter.list.map((val, idx) => (
            <div className={style.section} key={`fs-${idx}`}>
              {!val.socmed ? (
                <>
                  <h6 className={style.ttl}>{val.ttl}</h6>
                  <ul className={style.list}>
                    {val.list.map((item, idx) => (
                      <li className={style.item} key={`fi-${idx}`}>
                        <Link to={item.to} className={style.lnk}>
                          {item.txt}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  {val.list.map((socmed, idx) => (
                    <div className={style.socmed} key={`s-${idx}`}>
                      <h6 className={style.ttl}>{socmed.ttl}</h6>
                      <ul className={style.socmedList}>
                        {socmed.list.map((socmedItem, idx) => (
                          <li className={style.socmedItem} key={`fi-${idx}`}>
                            <a href={socmedItem.to} className={style.socmedLnk} target="_blank" rel="noreferrer">
                              <i className={socmedItem.icon}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>
        <p className={style.copyright}>{dataFooter.copyright}</p>
      </div>
    </div>
  );
};

export default Footer;
