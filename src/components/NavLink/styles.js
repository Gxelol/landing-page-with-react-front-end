import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;

    @media ${theme.media.lteSmall} {
      flex-flow: column wrap;
      align-content: center;
    }
  `}
`;
