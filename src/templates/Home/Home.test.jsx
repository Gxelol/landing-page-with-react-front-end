import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/renderTheme.js';
import { theme } from '../../styles/theme';
import Home from '.';

test('renders learn react link', () => {
  renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {
    name: /Hello/i,
  }).parentElement;
  expect(headingContainer).toHaveStyle({
    background: theme.colors.secondaryBg,
  });
  expect(headingContainer).toMatchSnapshot();
});
