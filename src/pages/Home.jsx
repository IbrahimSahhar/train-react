import React, { useDeferredValue, useMemo } from "react";
import { ContainerStyled } from "../Global/Components";
import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const myTotal = useDeferredValue(count);
  const [counter, setCounter] = useState(0);

  const calculate = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 10000; i++) {
      total += i / myTotal;
      for (let j = 1000; j > 1; j--) {
        total -= i / myTotal;
      }
    }

    return total;
  }, [myTotal]);

  // const calculate = () => {
  //   let total = 0;
  //   for (let i = 0; i < 10000; i++) {
  //     total += i / myTotal;
  //     for (let j = 1000; j > 1; j--) {
  //       total -= i / myTotal;
  //     }
  //   }

  //   return total;
  // };

  return (
    <ContainerStyled>
      <form>
        <input
          type="number"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
      </form>
      <p>{calculate}</p>

      <div>
        {counter}
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          increment
        </button>
      </div>
    </ContainerStyled>
  );
};

export default Home;
