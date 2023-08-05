import React, { useState } from "react";
import "./style.js";
import {
  ButtonStyled,
  CounterStyled,
  InputStyled,
  RedButtonStyled,
} from "./style.js";

const Counter = ({ id, count, step, decrement, increment }) => {
  const [value, setValue] = useState(1);
  return (
    <>
      <CounterStyled>
        <ButtonStyled onClick={() => increment(id, step)}>
          increment
        </ButtonStyled>

        <RedButtonStyled className="count">{count}</RedButtonStyled>

        <ButtonStyled
          type="decrement"
          count={count}
          onClick={() => decrement(id, step)}
        >
          decrement
        </ButtonStyled>

        <InputStyled value={value} />
        <RedButtonStyled onClick={() => setValue(value + 1)}>
          click me
        </RedButtonStyled>
      </CounterStyled>
    </>
  );
};

export default Counter;
