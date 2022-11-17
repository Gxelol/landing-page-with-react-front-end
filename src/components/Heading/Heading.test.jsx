import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Heading } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading> children </Heading>);
    const heading = screen.getByRole('heading', { name: 'children' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.huge,
      'text-transform': 'none',
    });
  });

  it('should match snapshot', () => {
    renderTheme(<Heading> children </Heading>);
    const { container } = screen.getByRole('heading', { name: 'children' });
    expect(container).toMatchSnapshot();
  });

  it('should render with whiteColor', () => {
    renderTheme(<Heading darkColor={false}> children </Heading>);
    const heading = screen.getByRole('heading', { name: 'children' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(
      <Heading size="small"> children </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'children' });
    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.small,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium"> children </Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'children' })).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big"> children </Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'children' })).toHaveStyle({
      'font-size': theme.fonts.sizes.big,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge"> children </Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'children' })).toHaveStyle({
      'font-size': theme.fonts.sizes.huge,
    });
  });

  it('should render correct font-size when the screen is less than 76.8rem', () => {
    renderTheme(<Heading size="huge"> children </Heading>);
    screen.getByRole('heading', { name: 'children' });

    expect(screen.getByRole('heading', { name: 'children' })).toHaveStyleRule(
      'font-size',
      theme.fonts.sizes.big,
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should render with uppercase', () => {
    renderTheme(<Heading uppercase> children </Heading>);
    const heading = screen.getByRole('heading', { name: 'children' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6"> children </Heading>);
    const h6 = container.firstChild;

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
