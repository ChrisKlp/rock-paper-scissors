import styled from 'styled-components';
import Option from './Option';
import background from '../assets/bg-pentagon.svg';
import media from '../global/mediaQueries';
import { data } from '../global/data';

const Element = styled(Option)``;

const Container = styled.div`
  margin: 9.5rem auto 12.6rem;
  display: grid;
  grid-template:
    'scissors scissors scissors' 1fr
    'spock . paper ' 1fr
    'lizard . rock' 1fr / 1fr 3.3rem 1fr;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 22.7rem;
  width: 31.1rem;
  height: 30.5rem;
  z-index: 0;

  & > ${Element}:nth-child(1) {
    grid-area: scissors;
    justify-self: center;
  }

  & > ${Element}:nth-child(2) {
    grid-area: paper;
    justify-self: end;
    top: -1.8rem;

    @media (${media.md}) {
      top: -2.6rem;
    }
  }

  & > ${Element}:nth-child(3) {
    grid-area: rock;
  }

  & > ${Element}:nth-child(4) {
    grid-area: lizard;
    justify-self: end;
  }

  & > ${Element}:nth-child(5) {
    grid-area: spock;
    top: -1.8rem;

    @media (${media.md}) {
      top: -2.6rem;
    }
  }

  @media (${media.md}) {
    margin: 4.8rem auto 0;
    width: 47.2rem;
    height: 46.3rem;
    background-size: 34.5rem;
    grid-template-columns: 1fr 5.2rem 1fr;
  }
`;

type OptionsProps = {
  className?: string;
  startGame: (option: any) => void;
};

const Options: React.FC<OptionsProps> = ({ className, startGame }) => {
  return (
    <Container className={className}>
      {data.map((item, index) => (
        <Element key={item.name} id={index} startGame={startGame} />
      ))}
    </Container>
  );
};

export default Options;
