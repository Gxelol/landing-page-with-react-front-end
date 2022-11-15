import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.small};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
    `,
  big: (theme) => css`
    font-size: ${theme.fonts.sizes.big};
    `,
  huge: (theme) => css`
    font-size: ${theme.fonts.sizes.huge};
    ${mediaFont(theme)}
    `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.fonts.sizes.big};
  }
`;

const titleCase = (uppercase) => css`
text-transform: ${uppercase ? 'uppercase' : 'none'}
`;

export const Title = styled.h1`
  ${({ theme, darkColor, size, uppercase }) => css`
    color: ${darkColor ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
  `}
`;
