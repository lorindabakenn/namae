import {keyframes} from 'styled-components';

export const mobile = '@media screen and (max-width: 800px)';

export const slideUp = keyframes`
from {
  transform: translateY(150%) skewY(10deg);
}
to {
  transform: translateY(0) skewY(0);
}
`;
