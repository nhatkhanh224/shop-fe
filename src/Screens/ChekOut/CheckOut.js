import { EmptyMsg } from "../../Components/EmptyMsg/EmptyMsg";
import { CheckOutStyle, CartTotals, TotalProducts, Total } from "./Styled";
import { SELECT } from "../../Components/MUI/SELECT";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_FROM_CART } from "../../Redux/Constant/Constant";
import { useState, useEffect } from "react";
import _ from 'lodash';
export function CheckOut() {
  const dispatch = useDispatch();
  const [checkOutProduct, setCheckOutProduct] = useState([]);

  // const DeletItem = (id) => {
  //   dispatch({ type: REMOVE_FROM_CART, payload: id });
  // };
  useEffect(() => {
    getCheckoutProduct();
    Total();
  }, []);
  const Total = () => {
    const init = checkOutProduct.reduce((accumulator, object) => {
      return accumulator + object.qnt * object.price;
    }, 0);
    return init;
  };
  const getCheckoutProduct = () => {
    const cartFromLS = JSON.parse(localStorage.getItem("carts"));
    let hashTable = {};
    for (let i = 0; i < cartFromLS.length; i++) {
      if (hashTable[cartFromLS[i].id]) {
        hashTable[cartFromLS[i].id].qnt += cartFromLS[i].qnt;
      } else {
        hashTable[cartFromLS[i].id] = cartFromLS[i];
      }
    }
    setCheckOutProduct(Object.values(hashTable));
  };

  const handleMinusQnt = (index) => {
    const itemClone =  _.clone(checkOutProduct);
    itemClone[index].qnt = itemClone[index].qnt - 1 ;
    localStorage.setItem('carts', JSON.stringify(itemClone));
    getCheckoutProduct();
  }

  const handlePlusQnt = (index) => {
    const itemClone =  _.clone(checkOutProduct);
    itemClone[index].qnt = itemClone[index].qnt + 1 ;
    localStorage.setItem('carts', JSON.stringify(itemClone));
    getCheckoutProduct();
  }

  const handleDelete = (index) => {
    const itemClone =  _.clone(checkOutProduct);
    itemClone.splice(index, 1)
    localStorage.setItem('carts', JSON.stringify(itemClone));
    getCheckoutProduct();
  }

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
                  <td>Color</td>
                  <td>Size</td>
                  <td>Qnt</td>
                  <td>Price</td>
                  <td>Total</td>
                </tr>
                {/* end Header tabel*/}

                {/* start  display ceckout proddut */}
                {checkOutProduct.map((e,index) => {
                  return (
                    <tr key={e.id}>
                      <td>
                        <img src={e.img} alt="Product img"></img>
                      </td>
                      <td>{e.title}</td>
                      <td>{e.Color}</td>
                      <td>{e.Size}</td>
                      <td>
                        {e.qnt > 1 && <button className="" style={{ marginRight: "10px" }} onClick={()=>{handleMinusQnt(index)}}>
                          <span style={{ fontSize: "20px"}}>-</span>
                        </button>}
                        <span>{e.qnt}</span>
                        <button className="" style={{ marginLeft: "10px" }} onClick={()=>{handlePlusQnt(index)}}>
                          <span style={{ fontSize: "20px" }}>+</span>
                        </button>
                      </td>
                      <td>{e.price}</td>
                      <td>{parseFloat(e.price) * parseFloat(e.qnt)}</td>
                      <td>
                        <i
                          onClick={() => handleDelete(index)}
                          className="fas fa-trash-alt"
                          style={{cursor: "pointer"}}
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
              <div>{Total()}</div>
            </div>
            {checkOutProduct.length === 0 && <div>
              <div>Shipping</div>
              <div>
                <p>
                  There are no shipping methods available. Please double check
                  your address, or contact us if you need any help.
                </p>
                <span>CALCULATION SHIPPING</span>
                <SELECT
                  label={"country"}
                  options={["USA", "Jordan", "KSA"]}
                  returnVal={(val) => val}
                ></SELECT>
              </div>
            </div>}
          </CartTotals>
        </CheckOutStyle>
      ) : (
        <EmptyMsg />
      )}
    </>
  );
}
