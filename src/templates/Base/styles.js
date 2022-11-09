import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding-top: 3rem;

    @media ${theme.media.lteSmall} {
      padding-top: 0;
    }
  `}
`;
