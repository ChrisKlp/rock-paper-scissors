import logo from '../assets/logo-bonus.svg';
import styled, { keyframes } from 'styled-components';
import media from '../global/mediaQueries';
import { AnimatePresence, motion } from 'framer-motion';

const Wrapper = styled.header`
  padding-top: 3.2rem;

  @media (${media.md}) {
    padding-top: 4.8rem;
  }
`;

const Container = styled(motion.div)`
  margin: 0 3.2rem;
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 70rem;
  border: 3px solid hsl(217, 16%, 45%);
  border-radius: 0.5rem;

  @media (${media.md}) {
    margin: 0 auto;
    padding: 1.8rem 2.4rem 1.8rem 3.2rem;
    border-radius: 1.5rem;
  }
`;

const Logo = styled(motion.div)`
  width: 4.9rem;
  img {
    display: block;
    width: 100%;
  }

  @media (${media.md}) {
    width: 11.1rem;
  }
`;

const Score = styled(motion.div)`
  display: grid;
  place-content: center;
  width: 8rem;
  height: 7.2rem;
  text-align: center;
  background: linear-gradient(0deg, #f3f3f3 0%, #ffffff 100%);
  box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.196706);
  border-radius: 0.4rem;

  & > span {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.2rem;
    letter-spacing: 0.15625rem;
    text-transform: uppercase;
    color: hsl(229, 64%, 46%);
  }

  @media (${media.md}) {
    width: 15rem;
    height: 11.4rem;
    border-radius: 0.8rem;

    & > span {
      font-size: 1.6rem;
      line-height: 1.9rem;
      letter-spacing: 0.25rem;
    }
  }
`;

const Points = styled(motion.h2)`
  font-weight: 700;
  font-size: 4rem;
  line-height: 4rem;
  color: hsl(247, 10%, 37%);

  @media (${media.md}) {
    font-size: 6.4rem;
    line-height: 6.4rem;
  }
`;

const container = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

type HeaderProps = {
  points: number;
};

const Header: React.FC<HeaderProps> = ({ points }) => {
  return (
    <Wrapper>
      <Container initial="hidden" animate="show" variants={container}>
        <Logo variants={item}>
          <img src={logo} alt="Logo" />
        </Logo>
        <Score variants={item}>
          <span>Score</span>
          <AnimatePresence exitBeforeEnter>
            <Points
              key={points}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 30, opacity: 0 }}
              transition={{ ease: 'anticipate' }}
            >
              <motion.div>{points}</motion.div>
            </Points>
          </AnimatePresence>
        </Score>
      </Container>
    </Wrapper>
  );
};

export default Header;
