import { css, styled } from "styled-components";
import { ScalingStyled } from "../../Global/Animation";

export const CounterStyled = styled.div`
  background-color: #eee;
  padding: 1.5625rem;
  display: flex;
  align-items: center;
`;

export const ButtonStyled = styled.button`
  padding: 0.625rem 2.25rem;
  border: none;
  font-size: 1.25rem;
  text-align: center;
  margin: 0.625rem;
  background-color: ${({ type }) =>
    type === "decrement" ? "#222222be" : "#22222252"};
  ${({ count }) =>
    count <= 0
      ? { opacity: 0.6, cursor: "not-allowed" }
      : { cursor: "pointer" }};
  &:hover {
    background-color: orangered;
  }
`;
export const ButtonStyledclone = styled(ButtonStyled)`
  color: red;
`;

export const RedButtonStyled = styled(ButtonStyled)`
  background-color: orangered;
  &.count {
    color: white;
  }
`;

export const InputStyled = styled("input")`
  width: 2.25rem;
  ${({ value }) => (value > 10 ? { backgroundColor: "red" } : "")}
`;

export const AnimatedDiv = styled("div")`
  animation: ${ScalingStyled} infinite 2s;
`;

export const PStyled = css`
  color: "red";
`;
