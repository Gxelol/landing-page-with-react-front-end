import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer html={`<h1>Hello</h1>`} />);
    expect(screen.getByRole('heading', { name: 'Hello' })).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        text-align: center;
      }

      .c1 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
      }

      .c2 {
        font-size: 2.4rem;
      }

      .c0 {
        max-width: 120rem;
        margin: 0 auto;
        padding: 3.2rem;
        width: 100%;
      }

      <div>
        <section
          class="c0"
        >
          <footer
            class="c1"
          >
            <div
              class="c2"
            >
              <h1>
                Hello
              </h1>
            </div>
          </footer>
        </section>
      </div>
    `);
  });
});
