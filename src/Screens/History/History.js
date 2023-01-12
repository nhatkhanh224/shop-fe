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
import Modal from "react-bootstrap/Modal";
import "./history.css";
export function History() {
  const dispatch = useDispatch();
  const [cookies] = useCookies(["cookie-name"]);
  const [history, setHistory] = useState([]);
  console.log("history", history);
  const [userData, setUserData] = useState({});
  const user_id = cookies.user_id;
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setActiveRating(0);
    setRating(0);
  };
  const handleShow = (product_id) => {
    setActiveRating(product_id);
    setShow(true);
  };
  const [activeRating, setActiveRating] = useState(0);
  const [rating, setRating] = useState(0);
  console.log(rating);
  const getHistory = async () => {
    await apis.get(`/getHistory/${user_id}`).then((res) => {
      setHistory(res.data);
    });
  };
  useEffect(() => {
    getHistory();
  }, []);

  const handleRating = async () => {
    try {
      if (rating > 0) {
        apis
          .post("/rating", {
            user_id,
            product_id: activeRating,
            rating,
          })
          .then((res) => {
            alert("Rating Success !");
            setRating(0);
            setActiveRating(0);
            setShow(false);
            getHistory();
          });
      } else {
        alert("Please rating !!!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rating for this product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="rating">
            <label>
              <input
                type="radio"
                name="stars"
                value="1"
                onChange={(e) => {
                  setRating(e.target.value);
                }}
              />
              <span class="icon">★</span>
            </label>
            <label>
              <input
                type="radio"
                name="stars"
                value="2"
                onChange={(e) => {
                  setRating(e.target.value);
                }}
              />
              <span class="icon">★</span>
              <span class="icon">★</span>
            </label>
            <label>
              <input
                type="radio"
                name="stars"
                value="3"
                onChange={(e) => {
                  setRating(e.target.value);
                }}
              />
              <span class="icon">★</span>
              <span class="icon">★</span>
              <span class="icon">★</span>
            </label>
            <label>
              <input
                type="radio"
                name="stars"
                value="4"
                onChange={(e) => {
                  setRating(e.target.value);
                }}
              />
              <span class="icon">★</span>
              <span class="icon">★</span>
              <span class="icon">★</span>
              <span class="icon">★</span>
            </label>
            <label>
              <input
                type="radio"
                name="stars"
                value="5"
                onChange={(e) => {
                  setRating(e.target.value);
                }}
              />
              <span class="icon">★</span>
              <span class="icon">★</span>
              <span class="icon">★</span>
              <span class="icon">★</span>
              <span class="icon">★</span>
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" value="Close" onClick={handleClose} />
          <Button variant="primary" value="Rating" onClick={handleRating} />
        </Modal.Footer>
      </Modal>
      <div className="container">
        {history && history.length != 0 ? (
          history.map((item, index) => {
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
                          <span>
                            {item.size} - {item.color}
                          </span>
                        </div>
                        <div>
                          <span>x {item.quantity}</span>
                        </div>
                        <div>
                          {item.rating[0] &&
                            new Array(item.rating[0].rating)
                              .fill(null)
                              .map(() => <i class="fas fa-star icon-rating" />)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span>{item.price * item.quantity} đ</span>
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
                    {!item.rating[0] && (
                      <Button
                        value="Rating"
                        onClick={() => {
                          handleShow(item.product_id);
                        }}
                      />
                    )}
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
