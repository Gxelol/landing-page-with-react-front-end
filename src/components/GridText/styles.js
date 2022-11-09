import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';
import { Container as Text } from '../Text/styles';

export const Container = styled.section`
  ${({ theme }) => css`
    ${Text} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`;

export const GridContainer = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    gap: ${theme.spacings.large};
    overflow: hidden;
    width: 100%;

    @media ${theme.media.lteSmall} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
  ${Heading} {
    position: relative;
    left: 5rem
  }

  ${Heading}::before {
    counter-increment: grid-counter;
    content: counter(grid-counter);
    position: absolute;
    font-size: 7rem;
    top: -3rem;
    left: -5rem;
    transform: rotate(5deg);
  }
  `}
`;
