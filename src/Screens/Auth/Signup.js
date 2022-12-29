import React, { useEffect, useState} from "react";
import apis from "../../apis";
import { Auth } from "./Styled.js";
import {minlength, vallidEmail} from './validate.js';
import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";

export function Signup() {
  const navigate = useNavigate();
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
              
            />
          </div> 
          <div class="form-group mt-2">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              aria-describedby="emailHelp"
              placeholder="Enter address"
              
            />
            
          </div> 
          <div class="form-group mt-2">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              className="form-control"
              id="phone"
              name="phone"
              aria-describedby="emailHelp"
              placeholder="Enter phone"
              
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
              
            />
            
          </div>
          <button
            type="submit"
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
