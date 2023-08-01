import React, { useRef } from "react";

export const RefComponent = () => {
  const input = useRef();

  return (
    <div>
      <input ref={input} />
      <br />
      <button
        onClick={() => {
          console.log(input);
          input.current.focus();
        }}
      >
        focus
      </button>
    </div>
  );
};
