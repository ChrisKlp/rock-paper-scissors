import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import media from '../global/mediaQueries';
import Button from './Button';
import Options from './Options';
import Results from './Results';
import Rules from './Rules';
import { data } from '../global/data';

const fadeOut = keyframes`
100% {
  opacity: 0;
  visibility: hidden;
}
`;

const fadeIn = keyframes`
0% {
  opacity: 0;
  visibility: hidden;
}
`;

const StyledOptions = styled(Options)<{ animation: string }>`
  animation: ${({ animation }) =>
      animation === 'options-fade-out'
        ? fadeOut
        : animation === 'options-fade-in'
        ? fadeIn
        : null}
    0.3s ease-out;
`;
const StyledResults = styled(Results)<{ animation: string }>`
  animation: ${({ animation }) =>
      animation === 'results-fade-out'
        ? fadeOut
        : animation === 'results-fade-in'
        ? fadeIn
        : null}
    0.3s ease-out;
`;

const Wrapper = styled.main`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: calc(100vh - 13.4rem);
  justify-items: center;
  align-items: start;

  @media (${media.md}) {
    min-height: calc(100vh - 20.4rem);
  }
`;

const RulesButton = styled(Button)`
  display: block;
  margin-bottom: 5.6rem;

  @media (${media.md}) {
    margin: 0 3.2rem 3.2rem;
    justify-self: end;
  }
`;

type GameProps = {
  setPoints: React.Dispatch<React.SetStateAction<number>>;
};

const Game: React.FC<GameProps> = ({ setPoints }) => {
  const [showRules, setShowRules] = useState(false);
  const [game, setGame] = useState(false);
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [result, setResult] = useState('');
  const [animation, setAnimation] = useState('');

  const handleShowRules = () => setShowRules(prev => !prev);

  const startGame = id => {
    const randomNum = Math.floor(Math.random() * 5);

    setPlayer1(id);
    setPlayer2(randomNum);

    const win = data[id].beats.includes(randomNum);
    const draw = id === randomNum;

    setAnimation('options-fade-out');

    setTimeout(() => {
      setGame(true);

      setResult(win ? 'You Win' : draw ? 'Draw' : 'You Lose');
      setAnimation('results-fade-in');
    }, 300);

    setTimeout(() => {
      setPoints(prev => (win ? prev + 1 : draw ? prev : prev - 1));
    }, 2000);
  };

  const endGame = () => {
    setAnimation('results-fade-out');
    setTimeout(() => {
      setGame(false);
      setAnimation('options-fade-in');
    }, 300);
  };

  return (
    <>
      <Wrapper>
        {!game ? (
          <StyledOptions startGame={startGame} animation={animation} />
        ) : (
          <StyledResults
            player1={player1}
            player2={player2}
            result={result}
            endGame={endGame}
            animation={animation}
          />
        )}
        <RulesButton onClick={handleShowRules}>Rules</RulesButton>
      </Wrapper>
      <Rules onClick={handleShowRules} active={showRules} />
    </>
  );
};

export default Game;
