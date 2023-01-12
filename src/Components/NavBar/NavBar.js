import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Topbar, Header, Logo, Bar, ShopIcons } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { themeAction } from "../../Redux/Actions/Action";
import { color } from "@mui/system";
import Modal from "react-bootstrap/Modal";
import { useCookies } from "react-cookie";
import apis from "../../apis";
import "./navbar.css"
import {useNavigate} from 'react-router-dom'

export const NavBar = (props) => {
  const navigate = useNavigate();
  const [ToggleNav, setToggleNav] = useState(false);
  const [CheckScroll, setCheckScroll] = useState(false);
  const themetoggle = useSelector((state) => state.theme);
  const [show, setShow] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

  const dispatchtheme = useDispatch();
  const changeColor = () => {
    if (window.scrollY >= 60) {
      setCheckScroll(true);
    } else {
      setCheckScroll(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [userData, setUserData] = useState({});
  const user_id = cookies.user_id;
  console.log(user_id);
  const getUserData = () => {
    apis
      .get(`/getAccount/${user_id}`)
      .then((res) => {
        setUserData(res.data)
      });
  }
  const handleLogout = () => {
    removeCookie('user_id',{path:'/CozaStore'});
    removeCookie('user_id',{path:'/'});
  }
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Topbar className="">
        <div className="flex-sb-m h-full container top-bar">
          <div className="left-top-bar">
            Free shipping for standard order over $100
          </div>
          <div className="right-top-bar">
            <a href="#" className="">
              Help & FAQs
            </a>
            <a href="/CozaStore/MyAccount" className="">
              My Account
            </a>
            <a href="#" className="">
              EN
            </a>
            <a href="#" className="">
              USD
            </a>
          </div>
        </div>
      </Topbar>
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
            {/* <NavLink
              onClick={() => setToggleNav(!ToggleNav)}
              to="/CozaStore/MyAccount"
            >
              MyAccount
            </NavLink> */}
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
            <Link
              style={{ color: "#3A3B3C" }}
              to="#"
              className="fas fa-search"
              onClick={handleShow}
            ></Link>
            <div
              onClick={() => dispatchtheme(themeAction())}
              className={themetoggle ? `fas fa-sun` : `far fa-moon`}
            ></div>
            <Link
              style={{ color: "#3A3B3C" }}
              to="/CozaStore/CheckOut"
              className="fas fa-shopping-cart"
            ></Link>
            <div className="far fa-heart"></div>
            <div className="my-account">
              <span
                style={{ color: "#3A3B3C" }}
                className="fas fa-user myAccount"
              ></span>
              <div className="position-absolute account-option">
                <ul
                  style={{
                    border: "1px solid black",
                    padding: "5px",
                    fontSize: "17px",
                    width: "190px",
                    backgroundColor:"white"
                  }}
                >
                  {!user_id && <><li>
                    <Link to="/CozaStore/Login">Login</Link>
                  </li>
                  <li>
                    <Link to="/CozaStore/Signup">Register</Link>
                  </li></>}
                  {user_id && <><li>
                    <Link to="/CozaStore/MyAccount">My Account</Link>
                  </li>
                  <li>
                    <Link to="/CozaStore/History">My History Payment</Link>
                  </li>
                  <li>
                    <a onClick={handleLogout} href="/CozaStore">Logout</a>
                  </li>
                  </>}
                </ul>
              </div>
            </div>
            <div
              onClick={() => setToggleNav(!ToggleNav)}
              className={!ToggleNav ? "fas fa-bars" : "fas fa-times fa-xl"}
            ></div>
          </ShopIcons>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #666",
              }}
            >
              <input
                placeholder="Search....!"
                style={{ border: "none", width: "100%", height: "40px" }}
              ></input>
            </div>
          </Modal.Body>
        </Modal>
      </Header>
    </>
  );
};
