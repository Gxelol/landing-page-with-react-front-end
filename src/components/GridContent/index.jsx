import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { Text } from '../Text';
import * as Styled from './styles';

export const GridContent = ({ title, html, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading uppercase light={background} as="h2">
          {title}
        </Heading>
        <Styled.HtmlContainer>
          <Text>{html}</Text>
        </Styled.HtmlContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.node.isRequired,
  html: P.node.isRequired,
  background: P.bool,
};
