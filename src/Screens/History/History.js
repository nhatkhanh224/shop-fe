import { EmptyMsg } from "../../Components/EmptyMsg/EmptyMsg";
import { ProductCard } from "./Styled";
import { SELECT } from "../../Components/MUI/SELECT";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_FROM_CART } from "../../Redux/Constant/Constant";
import { useState, useEffect } from "react";
import _ from "lodash";
import { useCookies } from "react-cookie";
import apis from "../../apis";
// import { Button } from "@mui/material";
import { Button } from "../../Components/btn/Button";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export function History() {
  const dispatch = useDispatch();
  const [cookies] = useCookies(["cookie-name"]);
  const [history, setHistory] = useState([]);
  const [userData, setUserData] = useState({});
  const user_id = cookies.user_id;
  // const getUserData = () => {
  //   apis.get(`/getAccount/${user_id}`).then((res) => {
  //     setUserData(res.data);
  //   });
  // };
  const getHistory = async () => {
    await apis.get(`/getHistory/${user_id}`).then((res) => {
      setHistory(res.data);
    });
  };
  // const DeletItem = (id) => {
  //   dispatch({ type: REMOVE_FROM_CART, payload: id });
  // };
  useEffect(() => {
    getHistory();
  }, []);

  return (
    <>
      <div className="container">
        {history && history.length != 0 ? (
          history.map((item,index) => {
            return (
              <ProductCard>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      src={`http://localhost:3000/${item.thumbnail}`}
                      style={{ width: "80px" }}
                    />
                    <div style={{ marginLeft: "20px" }}>
                      <div>
                        <span>
                          <Link
                            to={`/CozaStore/ProductDetails/${item.product_id}`}
                            key={item.product_id}
                          >
                            {item.name}
                          </Link>
                        </span>
                      </div>
                      <div>
                        <div>
                          <span>{item.size} - {item.color}</span>
                        </div>
                        <div>
                          <span>x {item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span>{item.price*item.quantity} đ</span>
                  </div>
                </div>
                <hr />
                <div className="d-flex justify-content-end">
                  <div style={{ marginRight: "5px" }}>
                    <Link
                      to={`/CozaStore/ProductDetails/${item.product_id}`}
                      key={item.product_id}
                    >
                      <Button value="Buy Again" />
                    </Link>
                  </div>
                  <div>
                    <Button value="Rating" />
                  </div>
                </div>
              </ProductCard>
            );
          })
        ) : (
          <EmptyMsg />
        )}
      </div>
    </>
  );
}
