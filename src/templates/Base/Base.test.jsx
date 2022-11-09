import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { Base } from '.';

describe('<Base />', () => {
  it('should render', () => {
    renderTheme(<Base>Children</Base>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
