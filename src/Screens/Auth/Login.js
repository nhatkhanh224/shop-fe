import React, { useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import { useCookies } from "react-cookie";
import apis from "../../apis";
import { Auth } from "./Styled.js";

export function Login() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async () => {
    apis
      .post("/login", {
        email: account.email,
        password: account.password,
      })
      .then((res) => {
        if (res.data) {
          const maxAge = 60 * 60 * 1000;
          setCookie('user_id', res.data, maxAge);
          window.location = "/CozaStore"
        } else {
          return false
        }
      });
  };

  
  return (
    <>
      <Auth className="container">
        <form>
          <h4>Login</h4>  
          <div class="form-group mt-2 ">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => {
                setAccount({ ...account, email: e.target.value });
              }}
            />
          </div>
          <div class="form-group mt-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter Password"
              onChange={(e) => {
                setAccount({ ...account, password: e.target.value });
              }}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary mt-2"
            onClick={handleLogin}
          >
            Login
          </button>
          <div className="form-bottom">
            <span>Forgot password?</span>
            <a href="./forgotpass">Click Here!</a>
          </div>
        </form>
      </Auth>
    </>
  );
}
