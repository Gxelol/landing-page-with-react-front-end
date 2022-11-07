import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const GridText = ({ title, description, background, grid }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading size="huge" uppercase light={background}>
          {title}
        </Heading>
        <Text>{description}</Text>
        <Styled.GridContainer>
          {grid.map((el) => (
            <Styled.GridElement key={el.title}>
              <Heading size="medium" light={background}>
                {el.title}
              </Heading>
              <Text>{el.description}</Text>
            </Styled.GridElement>
          ))}
        </Styled.GridContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  background: P.bool,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
};
