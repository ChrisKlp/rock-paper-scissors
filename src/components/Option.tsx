import styled from 'styled-components';
import { data } from '../global/data';
import media from '../global/mediaQueries';

const Wrapper = styled.button<{ name: string }>`
  position: relative;
  width: 9.6rem;
  height: 9.6rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 1rem;
  background: ${({ theme, name }) => theme.colors[name].secondary};
  box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.196706);
  cursor: pointer;

  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: -4.15%;
    left: 0;
    border-radius: inherit;
    box-shadow: 0 0 2rem 0.5rem
      ${({ theme, name }) => theme.colors[name].secondary};
    content: '';
    opacity: 0;
    transition: opacity 0.2s;
  }

  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    top: -4.15%;
    left: 0;
    border-radius: inherit;
    background: ${({ theme, name }) => theme.colors[name].primary};
    content: '';
  }

  &:hover::after {
    opacity: 1;
  }

  @media (${media.md}) {
    width: 14.5rem;
    height: 14.5rem;
  }
`;

const InnerWrapper = styled.span<{ title: string }>`
  position: relative;
  width: 77%;
  height: 77%;
  top: -4.15%;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: hsl(228, 23%, 78%);
  z-index: 0;

  img {
    height: ${({ title }) => (title === 'rock' ? '40%' : '50%')};
  }

  &::before {
    position: absolute;
    width: 100%;
    height: 94.7%;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    background: linear-gradient(0deg, #f3f3f3 0%, #dadada 98.34%);
    content: '';
    z-index: -1;
  }
`;

type OptionProps = {
  className?: string;
  id: number;
  startGame?: (id: number) => void;
};

const Option: React.FC<OptionProps> = ({ className, startGame, id }) => {
  const handleClick = () => {
    startGame && startGame(id);
  };

  return (
    <Wrapper className={className} name={data[id].name} onClick={handleClick}>
      <InnerWrapper title={data[id].name}>
        <img src={data[id].icon} alt={`${data[id].name} icon`} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Option;
