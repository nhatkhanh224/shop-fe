import { Route, Routes } from "react-router";
import { ProductDetails } from "../Screens/ProductDetails/ProductDetails";
import { Home } from "../Screens/Home/Home";
import { About } from "../Screens/About/About";
import { Contact } from "../Screens/Contact/Contact";
import { ProductScreen } from "../Screens/Product/ProductScreen";
import { CheckOut } from "../Screens/ChekOut/CheckOut";
export const AllRouters = () => {
  return (
    <Routes>
      <Route path="/CozaStore/" element={<Home />}></Route>
      <Route path="/CozaStore/Contact" element={<Contact />}></Route>
      <Route path="CozaStore/About" element={<About />}></Route>
      <Route
        path="/CozaStore/Shop"
        element={<ProductScreen></ProductScreen>}
      ></Route>
      <Route
        path="/CozaStore/ProductDetails/:id"
        element={<ProductDetails />}
      ></Route>
      <Route path="/CozaStore/CheckOut" element={<CheckOut />}></Route>
    </Routes>
  );
};
