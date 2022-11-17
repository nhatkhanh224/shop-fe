import React, { useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import { useCookies } from "react-cookie";
import apis from "../../apis";
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
          navigate('/CozaStore');
        } else {
          return false
        }
      });
  };
  return (
    <>
      <div className="container">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => {
                setAccount({ ...account, email: e.target.value });
              }}
            />
          </div>
          <div class="form-group mt-2">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => {
                setAccount({ ...account, password: e.target.value });
              }}
            />
          </div>
          <button
            type="button"
            class="btn btn-primary mt-2"
            onClick={handleLogin}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
