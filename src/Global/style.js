import { styled } from "styled-components";
import { keyframes } from "styled-components";

export const spinnerAnimation = keyframes`
  0%{
    opacity: 1;
    transform:  scale(1);

}50%{
    opacity: 0.4;
    transform:  scale(0.8);

}100%{
    opacity: 1;
    transform:  scale(1);
}
`;
export const Spinner = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #123456;
  text-align: center;
  line-height: 300px;
  font-size: 30px;
  color: white;
  font-weight: bold;
  animation: ${spinnerAnimation} 1s infinite linear;
`;
