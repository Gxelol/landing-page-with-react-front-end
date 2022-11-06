import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { GridTwoColumns } from '.';

describe('<GridTwoColumns />', () => {
  it('should render', () => {
    renderTheme(<GridTwoColumns>Children</GridTwoColumns>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
