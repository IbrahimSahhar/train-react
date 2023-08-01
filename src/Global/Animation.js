import { keyframes } from "styled-components";

export const RotateStyled = keyframes`
  from{
    transform: rotate(0)

}to{
  transform: rotate(360deg)

}
`;

export const ScalingStyled = keyframes`
  0%{
    transform: scale(1)

}50%{
  transform: scale(0)

}100%{
    transform: scale(1)

}
`;
