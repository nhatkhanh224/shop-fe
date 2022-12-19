import React, { useEffect } from "react";
import { Slide } from "../../Components/Slider/Slide";
import { CategoryCard } from "../../Components/categoryCard/CategoryCard";
import { Prodacts } from "../../Components/Prodacts/Prodacts";
import { listProductAction } from "../../Redux/Actions/Action";
import { Recommend } from "../../Components/Recommend/Recommend";
export function Home() {
  return (
    <>
      <Slide></Slide>
      <CategoryCard></CategoryCard>
      <Recommend></Recommend>
      <Prodacts></Prodacts>
    </>
  );
}
