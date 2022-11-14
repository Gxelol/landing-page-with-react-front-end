import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    a {
      text-decoration: none;
      cursor: pointer;
      text-transform: uppercase;
    }
  `}
`;
