import { GridContent } from '../../components/GridContent';
import * as Styled from './styles';

export const PageNotFound = () => {
  return (
    <Styled.Container>
      <GridContent
        title="Page 404"
        html="<p>Page not found or do not exists. </p><a href='/'>Return</a>"
      />
    </Styled.Container>
  );
};
