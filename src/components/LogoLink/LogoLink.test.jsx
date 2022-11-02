import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Hello World" />);
    screen.getByRole('heading', { name: 'Hello World' }).tobe;
    expect(screen.getByRole('link', { name: 'Hello World' })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('to match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Hello World" srcImg="image.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
