import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { Text } from '../Text';
import * as Styled from './styles';

export const GridImage = ({
  title,
  description,
  srcImg,
  altText,
  background = false,
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Text>{description}</Text>
        <Styled.GridContainer>
          <Styled.GridElement key={`${srcImg}${altText}`}>
            <Styled.Image src={srcImg} alt={altText} />
          </Styled.GridElement>
        </Styled.GridContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  altText: P.string.isRequired,
  srcImg: P.string.isRequired,
};
