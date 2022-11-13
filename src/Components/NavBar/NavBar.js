import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Header, Logo, Bar, ShopIcons } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { themeAction } from "../../Redux/Actions/Action";

export const NavBar = (props) => {
  const [ToggleNav, setToggleNav] = useState(false);
  const [CheckScroll, setCheckScroll] = useState(false);
  const themetoggle = useSelector((state) => state.theme);
  const dispatchtheme = useDispatch();
  const changeColor = () => {
    if (window.scrollY >= 60) {
      setCheckScroll(true);
    } else {
      setCheckScroll(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <Header className={CheckScroll ? "background" : ""}>
      <div className="container">
        <Logo>
          <Link to="/CozaStore">
            <img
              src={`${
                themetoggle
                  ? "https://omarabualhija.github.io/CozaStore/images/icons/logo-02.png"
                  : "https://omarabualhija.github.io/CozaStore/images/icons/logo-01.png"
              }`}
              alt="logo"
            />
          </Link>
        </Logo>

        <Bar className={!ToggleNav ? "toggle" : ""}>
          <NavLink onClick={() => setToggleNav(!ToggleNav)} to="/CozaStore">
            Home
          </NavLink>
          <NavLink
            onClick={() => setToggleNav(!ToggleNav)}
            to="/CozaStore/Shop"
          >
            Shop
          </NavLink>
          <NavLink
            onClick={() => setToggleNav(!ToggleNav)}
            to="/CozaStore/About"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setToggleNav(!ToggleNav)}
            to="/CozaStore/Contact"
          >
            Contact
          </NavLink>
        </Bar>

        <ShopIcons>
          <div
            onClick={() => dispatchtheme(themeAction())}
            className={themetoggle ? `fas fa-sun` : `far fa-moon`}
          ></div>
          <Link
            to="/CozaStore/CheckOut"
            className="fas fa-shopping-cart"
          ></Link>
          <div className="far fa-heart"></div>
          <div
            onClick={() => setToggleNav(!ToggleNav)}
            className={!ToggleNav ? "fas fa-bars" : "fas fa-times fa-xl"}
          ></div>
        </ShopIcons>
      </div>
    </Header>
  );
};
