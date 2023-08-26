import React, { useRef } from "react";
import Container from "../components/Container";

const About = () => {
  // uncontrolled component
  const name = useRef();
  return (
    <Container>
      <form>
        <input
          ref={name}
          onChange={() => {
            console.log(name.current.value);
          }}
        />
      </form>
    </Container>
  );
};

export default About;
