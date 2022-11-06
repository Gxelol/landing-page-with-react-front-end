import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const GridTwoColumns = ({ title, text, srcImg, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container background={background}>
        <Styled.TextContainer>
          <Heading uppercase>{title}</Heading>
          <Text>{text}</Text>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  title: P.node.isRequired,
  text: P.node.isRequired,
  srcImg: P.node.isRequired,
  background: P.bool,
};
