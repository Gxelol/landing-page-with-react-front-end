import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { Text } from '.';

describe('<Text />', () => {
  it('should render text', () => {
    renderTheme(<Text>Children</Text>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Text>Children</Text>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div
        class="c0"
      >
        Children
      </div>
    `);
  });
});
