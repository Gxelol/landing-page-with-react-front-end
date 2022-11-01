import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { Dummy } from '.';

describe('<Dummy />', () => {
  it('should render', () => {
    renderTheme(<Dummy>Children</Dummy>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
