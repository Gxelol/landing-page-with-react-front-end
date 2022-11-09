import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { Base } from '.';
import { mockBase } from './mock';

describe('<Base />', () => {
  it('should render Base', () => {
    const { container } = renderTheme(<Base {...mockBase} />);
    expect(container).toMatchSnapshot();
  });
});
