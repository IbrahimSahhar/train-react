import React, { useState } from "react";
import Container from "../components/Container";
import Work1 from "../images/work-01.jpg";
import Work2 from "../images/work-02.jpg";
import Work3 from "../images/work-03.jpg";
import Work4 from "../images/work-04.jpg";
import Work5 from "../images/work-05.jpg";
import Work6 from "../images/work-06.jpg";
import Work7 from "../images/work-07.jpg";
import Work8 from "../images/work-08.jpg";

const About = () => {
  const images = [Work1, Work2, Work3, Work4, Work5, Work6, Work7, Work8];

  const [step, setStep] = useState(0);

  const handelNext = () => {
    if (step < 7) {
      setStep(step + 1);
    }
  };
  const handelPrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <Container>
      <div>{step + 1} from 8 </div>
      <div className="image">
        <img src={images[step]} alt="work" />
        <button onClick={() => handelNext()}>next</button>
        <button onClick={() => handelPrev()}>prev</button>
      </div>
    </Container>
  );
};

export default About;
