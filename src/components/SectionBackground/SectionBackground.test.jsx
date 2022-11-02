import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { SectionBackground } from '.';

describe('<SectionBackground />', () => {
  it('should render', () => {
    renderTheme(<SectionBackground>Children</SectionBackground>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
