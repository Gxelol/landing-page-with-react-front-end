import styled, { css } from 'styled-components';

import { Container as Text } from '../Text/styles';
import { Container as Section } from '../SectionContainer/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.primaryColor};

    a {
      color: inherit;
      text-decoration: none;
    }

    & ${Text} {
      font-size: ${theme.fonts.sizes.small};
    }

    & ${Section} {
      padding-top: 0;
      padding-bottom: 0;
    }
  `}
`;
