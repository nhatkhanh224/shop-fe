import { EmptyMsg } from "../../Components/EmptyMsg/EmptyMsg";
import { CheckOutStyle, CartTotals, TotalProducts, Total } from "./Styled";
import { SELECT } from "../../Components/MUI/SELECT";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_FROM_CART } from "../../Redux/Constant/Constant";
import { useState, useEffect } from "react";
import _ from "lodash";
import { useCookies } from "react-cookie";
import apis from "../../apis";
// import { Button } from "@mui/material";
import { Button } from "../../Components/btn/Button";
export function CheckOut() {
  const dispatch = useDispatch();
  const [cookies] = useCookies(["cookie-name"]);
  const [checkOutProduct, setCheckOutProduct] = useState([]);
  const user_id = cookies.user_id;

  // const DeletItem = (id) => {
  //   dispatch({ type: REMOVE_FROM_CART, payload: id });
  // };
  useEffect(() => {
    getCheckoutProduct();
    Total();
  }, []);
  const Total = () => {
    const init = checkOutProduct.reduce((accumulator, object) => {
      return accumulator + object.quantity * object.price;
    }, 0);
    return init;
  };
  const getCheckoutProduct = () => {
    if (user_id) {
      apis.get(`/cart/${user_id}`).then((res) => {
        setCheckOutProduct(res.data);
      });
    } else {
      const cartFromLS = JSON.parse(localStorage.getItem("carts")) || [];
      let hashTable = {};
      for (let i = 0; i < cartFromLS.length; i++) {
        if (hashTable[cartFromLS[i].id]) {
          hashTable[cartFromLS[i].id].qnt += cartFromLS[i].qnt;
        } else {
          hashTable[cartFromLS[i].id] = cartFromLS[i];
        }
      }
      setCheckOutProduct(Object.values(hashTable));
    }
  };

  const handleMinusQnt = async (index, product_id) => {
    if (user_id) {
      await apis
        .post(`/cart/minusQuantity`, {
          user_id,
          product_id,
        })
        .then((res) => {
          getCheckoutProduct();
        });
    } else {
      const itemClone = _.clone(checkOutProduct);
      itemClone[index].quantity = itemClone[index].quantity - 1;
      localStorage.setItem("carts", JSON.stringify(itemClone));
      getCheckoutProduct();
    }
  };

  const handlePlusQnt = async (index, product_id) => {
    if (user_id) {
      await apis
        .post(`/cart/plusQuantity`, {
          user_id,
          product_id,
        })
        .then((res) => {
          getCheckoutProduct();
        });
    } else {
      const itemClone = _.clone(checkOutProduct);
      itemClone[index].quantity = itemClone[index].quantity + 1;
      localStorage.setItem("carts", JSON.stringify(itemClone));
      getCheckoutProduct();
    }
  };

  const handleDelete = (index) => {
    const itemClone = _.clone(checkOutProduct);
    itemClone.splice(index, 1);
    localStorage.setItem("carts", JSON.stringify(itemClone));
    getCheckoutProduct();
  };

  return (
    <>
      {checkOutProduct.length !== 0 ? (
        <CheckOutStyle className="container">
          <TotalProducts>
            <table>
              <tbody>
                {/* start Header tabel*/}
                <tr>
                  <td>PRODUCT</td>
                  <td> </td>
                  <td>Size</td>
                  <td>Quantity</td>
                  <td>Price</td>
                  <td>Total</td>
                </tr>
                {/* end Header tabel*/}

                {/* start  display ceckout proddut */}
                {checkOutProduct.map((e, index) => {
                  return (
                    <tr key={e.id}>
                      <td>
                        <img src={`http://localhost:3000/${e.thumbnail}`} alt="Product img"></img>
                      </td>
                      <td>{e.title}</td>
                      <td>{e.size}</td>
                      <td>
                        {e.quantity > 1 && (
                          <button
                            className=""
                            style={{ marginRight: "10px" }}
                            onClick={() => {
                              handleMinusQnt(index, e.id);
                            }}
                          >
                            <span style={{ fontSize: "20px" }}>-</span>
                          </button>
                        )}
                        <span>{e.quantity}</span>
                        <button
                          className=""
                          style={{ marginLeft: "10px" }}
                          onClick={() => {
                            handlePlusQnt(index, e.id);
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>+</span>
                        </button>
                      </td>
                      <td>{e.price}</td>
                      <td>{parseFloat(e.price) * parseFloat(e.quantity)} đ</td>
                      <td>
                        <i
                          onClick={() => handleDelete(index)}
                          className="fas fa-trash-alt"
                          style={{ cursor: "pointer" }}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TotalProducts>
          <CartTotals>
            <h4>CART TOTAL</h4>
            <div>
              <div>SubTotal</div>
              <div>{Total()} đ</div>
            </div>
           {checkOutProduct.length === 0 && (
              <div>
                <div>Shipping</div>
                <div>
                  <p>
                    There are no shipping methods available. Please double check
                    your address, or contact us if you need any help.
                  </p>
                  <span>CALCULATION SHIPPING</span>
                  <SELECT
                    label={"city"}
                    options={["DaNang", "HCM", "HaNoi"]}
                    returnVal={(val) => val}
                  ></SELECT>
                </div>
                <div>Total: {Total()} đ</div>
              </div>
            )}
            <Button
              value="CheckOut"
            ></Button>
          </CartTotals>
        </CheckOutStyle>
      ) : (
        <EmptyMsg />
      )}
    </>
  );
}
