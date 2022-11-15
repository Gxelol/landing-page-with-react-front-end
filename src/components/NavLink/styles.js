import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    text-transform: uppercase;

    @media ${theme.media.lteSmall} {
      flex-flow: column wrap;
      align-content: center;
    }
  `}
`;
