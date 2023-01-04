import React, { useEffect, useState} from "react";
import apis from "../../apis";
import { Auth } from "./Styled.js";
import {minlength, vallidEmail} from './validate.js';
import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export function Signup() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [data,setData] = useState({
    name:'',
    address:'',
    phone:'',
    email:'',
    password:'',
  })
  const handleSignup = async () => {
    apis
      .post("/signup",data)
      .then((res) => {
        console.log(res);
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
          <h4>Sign Up</h4> 
          <div class="form-group mt-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="emailHelp"
              placeholder="Enter name"
              onChange={(e)=>{
                setData({
                  ...data,
                  name: e.target.value
                })
              }}
            />
          </div> 
          <div class="form-group mt-2">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              placeholder="Enter address"
              onChange={(e)=>{
                setData({
                  ...data,
                  address: e.target.value
                })
              }}
            />
            
          </div> 
          <div class="form-group mt-2">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              aria-describedby="emailHelp"
              placeholder="Enter phone"
              onChange={(e)=>{
                setData({
                  ...data,
                  phone: e.target.value
                })
              }}
            />
            
          </div> 
          <div class="form-group mt-2">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e)=>{
                setData({
                  ...data,
                  email: e.target.value
                })
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
              onChange={(e)=>{
                setData({
                  ...data,
                  password: e.target.value
                })
              }}
            />
            
          </div>
          <button
            onClick={handleSignup}
            type="button"
            className="btn btn-primary mt-4"
          >
            Create User
          </button>
          <div className="form-bottom">
            <span>Have an account?</span>
            <a href="#" onClick={()=>{
              navigate('/CozaStore/Login')
            }}>Click Here!</a>
          </div>
        </form>
      </Auth>
    </>
  );
}
