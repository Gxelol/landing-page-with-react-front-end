import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    z-index: 6;
    opacity: 0.8;
  `}
`;
