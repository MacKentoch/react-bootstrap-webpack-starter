import styled, { keyframes, css, ThemeProps } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

type Props = {
  readonly theme: ThemeProps<any>;
  readonly viewEnter: boolean;
};

const AnimatedDiv = styled.div<Props>`
  ${({ viewEnter }) =>
    viewEnter &&
    css`
      opacity: 0;
      animation-name: ${fadeIn};
      animation-timing-function: ease-in;
      animation-duration: 0.7s;
      animation-delay: 0s;
      animation-fill-mode: both;
    `};
`;

export default AnimatedDiv;
