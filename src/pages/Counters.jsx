import React, { useEffect, useState } from "react";
import Counter from "../components/Counter";
import Container from "../components/Container";

const Counters = () => {
  const countersData = [
    { id: 1, count: 0, step: 1 },
    { id: 2, count: 0, step: 2 },
    { id: 3, count: 0, step: 4 },
    { id: 4, count: 0, step: 8 },
  ];
  const [counters, setCounters] = useState(countersData);
  const [total, setTotal] = useState(0);

  const onIncrement = (id, step = 1) => {
    setCounters((prev) =>
      prev.map((counter) =>
        counter.id === id
          ? { ...counter, count: counter.count + step }
          : counter
      )
    );
  };

  const onDecrement = (id, step = 1) => {
    setCounters((prev) =>
      prev.map((counter) =>
        counter.id === id && counter.count >= step
          ? { ...counter, count: counter.count - step }
          : counter
      )
    );
  };

  useEffect(() => {
    setTotal(() =>
      counters.reduce(
        (accumulator, currentValue) => accumulator + currentValue.count,
        0
      )
    );
  }, [counters]);

  return (
    <div>
      <Container>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            {...counter}
            increment={onIncrement}
            decrement={onDecrement}
          />
        ))}
        <div className="total">{total}</div>
      </Container>
    </div>
  );
};

export default Counters;
