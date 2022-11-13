import React, { useState } from "react";
import { Counter } from "./styled";

export const Count = ({ containerClass, btnClass, value }) => {
  const [num, setNum] = useState(1);

  const increase = () => {
    const newValue = num + 1;
    setNum(newValue);
    value(newValue);
  };

  const decrease = () => {
    const newValue = num > 1 ? num - 1 : 1;
    setNum(newValue);
    value(newValue);
  };

  return (
    <Counter className={containerClass}>
      <button onClick={decrease}>-</button>
      <div>{num}</div>
      <button className={btnClass} onClick={increase}>
        +
      </button>
    </Counter>
  );
};
