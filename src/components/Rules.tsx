import styled from 'styled-components';
import rulesImg from '../assets/image-rules-bonus.svg';
import iconClose from '../assets/icon-close.svg';
import media from '../global/mediaQueries';

const Wrapper = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsla(0, 0%, 0%, 0.5);
  z-index: 9999;
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: visibility 0.2s, opacity 0.2s;

  @media (${media.sm}) {
    display: grid;
    place-content: center;
  }
`;

const Modal = styled.div`
  height: 100vh;
  display: grid;
  grid-template:
    'heading' auto
    'image' auto
    'close' auto / 1fr;
  align-content: center;
  justify-items: center;
  background: hsl(0, 0%, 100%);
  border-radius: 0.8rem;

  @media (${media.sm}) {
    padding: 3.2rem;
    height: auto;
    grid-template:
      'heading close' auto
      'image image' auto / 1fr;
    align-items: center;
  }
`;

const Heading = styled.h2`
  grid-area: heading;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 3.2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.dark};

  @media (${media.sm}) {
    justify-self: start;
  }
`;

const Image = styled.img`
  margin: 9.6rem auto 13.4rem;
  grid-area: image;

  @media (${media.sm}) {
    margin: 2rem 0 1.5rem;
  }
`;

const CloseButton = styled.button`
  grid-area: close;
  width: 5rem;
  height: 5rem;
  background-image: url(${iconClose});
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: hsl(0, 0%, 95%);
  }

  @media (${media.sm}) {
    margin-right: -2rem;
  }
`;

type RulesProps = {
  onClick: () => void;
  active: boolean;
};

const Rules: React.FC<RulesProps> = ({ onClick, active }) => {
  return (
    <Wrapper active={active}>
      <Modal>
        <Heading>Rules</Heading>
        <Image src={rulesImg} alt="Rules illstration" />
        <CloseButton aria-label="close button" onClick={onClick} />
      </Modal>
    </Wrapper>
  );
};

export default Rules;
