import P from 'prop-types';
import * as Styled from './styles';
import { Text } from '../Text';
import { SectionContainer } from '../SectionContainer';

export const Footer = ({ html }) => {
  return (
    <SectionContainer>
      <Styled.Container>
        <Text>{html}</Text>
      </Styled.Container>
    </SectionContainer>
  );
};

Footer.propTypes = {
  html: P.string.isRequired,
};
