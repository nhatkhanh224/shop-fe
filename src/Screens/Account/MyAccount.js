import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Myaccount } from "./Styled.js";
import apis from "../../apis";
export function MyAccount() {
  const navigate = useNavigate();
  const [cookies] = useCookies(["cookie-name"]);
  const [userData, setUserData] = useState({});
  const user_id = cookies.user_id;
  const getUserData = () => {
    apis.get(`/getAccount/${user_id}`).then((res) => {
      setUserData(res.data);
    });
  };
  useEffect(() => {
    getUserData();
  }, []);

  const handleUpdateAccount = async() => {
    try {
      if (user_id) {
        await apis
          .post(`/updateAccount`, {
            userData,
          })
          .then((res) => {
            alert('Update Success');
          });
      }
    } catch (error) {
      alert('Update Failed');
    }
  };

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
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    name: e.target.value,
                  });
                }}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                disabled
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={userData.email}
                // onChange={(e) => {
                //   setUserData({
                //     ...userData,
                //     email: e.target.value,
                //   });
                // }}
              />
            </div>
            <div class="form-group mt-2">
              <label for="exampleInputPassword1">Address</label>
              <input
                type="text"
                class="form-control"
                placeholder="85-đường Ngô Quyền-thành phố Đà Nẵng"
                value={userData.address}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    address: e.target.value,
                  });
                }}
              />
            </div>
            <div class="form-group mt-2 mb-2">
              <label for="exampleInputPassword1">Phone</label>
              <input
                type="text"
                class="form-control"
                placeholder="+84123456789"
                value={userData.phone}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    phone: e.target.value,
                  });
                }}
              />
            </div>
            <button
              type="button"
              class="btn btn-primary"
              onClick={handleUpdateAccount}
            >
              Submit
            </button>
          </form>
        </div>
      </Myaccount>
    </>
  );
}
