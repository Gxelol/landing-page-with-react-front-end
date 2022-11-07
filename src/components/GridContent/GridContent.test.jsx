import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { GridContent } from '.';
import mock from './mock';

describe('<GridContent />', () => {
  it('should render with background', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without background', () => {
    const { container } = renderTheme(
      <GridContent {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
