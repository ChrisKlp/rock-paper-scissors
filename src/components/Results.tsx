import styled, { css, keyframes } from 'styled-components';
import media from '../global/mediaQueries';
import Button from './Button';
import Option from './Option';

const showIn = keyframes`
  0% { 
    opacity: 0;
    transform: rotateX(-1000deg) scale(0);
  }
`;

const winner = keyframes`
  100% {
    width: 220%;
    height: 220%;
  }
`;

const scaleIn = keyframes`
  0% {
    transform: scale(0);
  }
`;

const slideLeft = keyframes`
0% {
  transform: translateX(11rem);
}
`;

const slideRight = keyframes`
0% {
  transform: translateX(-11rem);
}
`;

const Wrapper = styled.div`
  margin: 9.9rem auto 5.2rem;
  display: grid;
  grid-template:
    'player1 player2' auto
    'result result' auto / 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 6.2rem 5rem;

  @media (${media.md}) {
    margin: 7.2rem auto 0;
    gap: 3rem 10rem;
  }

  @media (${media.lg}) {
    grid-template: 'player1 result player2' auto / auto auto auto;
    gap: 5.5rem;
  }
`;

const Group = styled.div`
  display: grid;
  place-items: center;
  gap: 1.7rem;

  &:nth-child(1) {
    grid-area: player1;
  }
  &:nth-child(2) {
    grid-area: player2;
  }

  @media (${media.md}) {
    gap: 6.3rem;
  }

  @media (${media.lg}) {
    &:nth-child(1) {
      animation: ${slideLeft} 1s 2s both cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    &:nth-child(2) {
      animation: ${slideRight} 1s 2s both cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }
`;

const ResultContainer = styled.div`
  grid-area: result;
  animation: ${scaleIn} 1s 2s both cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const StyledOption = styled(Option)`
  width: 13rem;
  height: 13rem;
  pointer-events: none;

  @media (${media.md}) {
    width: 20rem;
    height: 20rem;
  }

  @media (${media.lg}) {
    width: 29.2rem;
    height: 29.2rem;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  line-height: 3.2rem;
  text-align: center;
  letter-spacing: 0.1875rem;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.196706);

  @media (${media.md}) {
    font-size: 2.4rem;
    line-height: 3.2rem;
    letter-spacing: 0.3rem;
  }
`;

const Box = styled.div<{ highlight: boolean }>`
  position: relative;

  ${Wrapper} > ${Group}:nth-child(2) > & {
    & > ${StyledOption} {
      animation: ${showIn} 2s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }

  &::before {
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    top: 48.5%;
    background: radial-gradient(
      hsla(0, 0%, 100%, 0.09) 0,
      hsla(0, 0%, 100%, 0.09) 40%,
      hsla(0, 0%, 100%, 0.06) 0,
      hsla(0, 0%, 100%, 0.06) 54%,
      hsla(0, 0%, 100%, 0.03) 0,
      hsla(0, 0%, 100%, 0.03) 100%
    );
    border-radius: 50%;
    transform: translate(-50%, -50%);
    content: '';
    transition: width 1s, height 1s;
    z-index: -1;
  }

  ${({ highlight }) =>
    highlight &&
    css`
      &::before {
        animation: ${winner} 1s 2s both cubic-bezier(0.075, 0.82, 0.165, 1);
      }
    `};

  @media (${media.md}) {
    order: 1;
  }
`;

const Spot = styled.div`
  position: absolute;
  width: 84.6%;
  height: 84.6%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  z-index: -1;
`;

const Result = styled.h1`
  margin-bottom: 1.6rem;
  font-weight: 700;
  font-size: 5.6rem;
  line-height: 6.7rem;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.196706);
`;

const PlayButton = styled(Button)``;

type ResultsProps = {
  className?: string;
  player1: number;
  player2: number;
  result: string;
  endGame: () => void;
};

const Results: React.FC<ResultsProps> = ({
  className,
  player1,
  player2,
  result,
  endGame,
}) => {
  return (
    <Wrapper className={className}>
      <Group>
        <Box highlight={result === 'You Win'}>
          <StyledOption id={player1} />
        </Box>
        <Title>You Picked</Title>
      </Group>
      <Group>
        <Box highlight={result === 'You Lose'}>
          <Spot />
          <StyledOption id={player2} />
        </Box>
        <Title>The house Picked</Title>
      </Group>
      <ResultContainer>
        <Result>{result}</Result>
        <PlayButton secondary={true} onClick={endGame}>
          Play Again
        </PlayButton>
      </ResultContainer>
    </Wrapper>
  );
};

export default Results;
