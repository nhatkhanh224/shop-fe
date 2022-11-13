import React, { useEffect } from "react";
import { Slide } from "../../Components/Slider/Slide";
import { CategoryCard } from "../../Components/categoryCard/CategoryCard";
import { Prodacts } from "../../Components/Prodacts/Prodacts";
import { listProductAction } from "../../Redux/Actions/Action";
export function Home() {
  return (
    <>
      <Slide></Slide>
      <CategoryCard></CategoryCard>
      <Prodacts></Prodacts>
    </>
  );
}
