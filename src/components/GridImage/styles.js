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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    gap: ${theme.spacings.large}
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    transition: all 300ms ease-in-out;
  `}

  &:hover {
    transform: scale(1.2) rotate(10deg);
  }
`;
