import { styled } from "styled-components";

export const ContainerStyled = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;

  /* Media Query */
  /* large */

  @media (min-width: 75rem) {
    & {
      width: 80% !important;
    }
  }

  /* Medium */

  @media (min-width: 62rem) {
    & {
      width: 60.625rem;
    }
  }

  /* Small */

  @media (min-width: 48rem) {
    & {
      width: 46.875rem;
    }
  }
`;
