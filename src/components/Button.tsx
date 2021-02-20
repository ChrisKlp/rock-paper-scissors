import styled, { css } from 'styled-components';

const Button = styled.button<{ secondary?: boolean }>`
  padding: 1.1rem 3.6rem;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  border: 1px solid hsl(0, 0%, 100%);
  color: hsl(0, 0%, 100%);
  border-radius: 0.8rem;
  background: transparent;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: hsla(0, 0%, 100%, 0.1);
  }

  ${({ secondary }) =>
    secondary &&
    css`
      padding: 1.5rem 6rem;
      background: hsl(0, 0%, 95%);
      border: none;
      box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
      color: ${({ theme }) => theme.colors.dark};

      &:hover {
        background: hsl(0, 0%, 80%);
      }
    `};
`;

export default Button;
