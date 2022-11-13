import React from "react";
import { Rate } from "./styled";
export function Rating({ rating: { rate, count } }) {
  return (
    <Rate>
      <span>
        <i
          className={
            rate >= 1
              ? "fa fa-star"
              : rate >= 0.5
              ? "fas fa-star-half-alt"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rate >= 2
              ? "fa fa-star"
              : rate >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rate >= 3
              ? "fa fa-star"
              : rate >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rate >= 4
              ? "fa fa-star"
              : rate >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rate >= 5
              ? "fa fa-star"
              : rate >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>{`${count} reviews`}</span>
    </Rate>
  );
}
