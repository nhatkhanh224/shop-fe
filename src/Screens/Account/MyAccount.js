import React, { useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import { useCookies } from "react-cookie";
import {Myaccount} from './Styled.js'
import apis from "../../apis";
export function MyAccount() {
  const [cookies] = useCookies(['cookie-name']);
  const [userData, setUserData] = useState({});
  const user_id = cookies.user_id;
  const getUserData = () => {
    apis
      .get(`/getAccount/${user_id}`)
      .then((res) => {
        setUserData(res.data)
      });
  }
  useEffect(() => {
    getUserData();
  }, []);
 
  return (
    <>
      <Myaccount>
        <div className="container">
          <form>
          <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter name"
                value={userData.name}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={userData.email}
              />
            </div>
            <div class="form-group mt-2">
              <label for="exampleInputPassword1">Address</label>
              <input
                type="text"
                class="form-control"
                placeholder="85-đường Ngô Quyền-thành phố Đà Nẵng"
                value={userData.address}
              />
            </div>
            <div class="form-group mt-2 mb-2">
              <label for="exampleInputPassword1">Phone</label>
              <input
                type="text"
                class="form-control"
                placeholder="+84123456789"
                value={userData.phone}
              />
            </div>
            <button
              type="button"
              class="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </Myaccount>
    </>
  );
}
