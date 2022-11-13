import React, {useState,useEffect} from "react";
import { Card } from "./styled.js";
import { Link } from "react-router-dom";
import apis from '../../apis';
export function CategoryCard() {
  const [categories,setCategories] = useState([]);
  const getCategories = () => {
    apis.get('/category')
    .then(res => {
      setCategories(res.data)
    })
  }
  useEffect(() => {
    getCategories();
    return () => {};
  }, []);
  return (
    <Card>
      <div className="container">
      {categories.map((item)=>{
        return <Link to="/CozaStore/Shop">
          <img
            src="https://omarabualhija.github.io/CozaStore/images/banner-01.jpg"
            alt="banner-01"
          ></img>
          <div>
            <h4 className="mt-5">{item.name}</h4>
          </div>
          <div>Shope Now</div>
        </Link>
      })}
      </div>
    </Card>
  );
}
