import styled, { keyframes } from 'styled-components';
import { Grommet } from 'grommet-icons';

const flash = keyframes`
    0% { opacity: 1; }
    50% { opacity: .1; }
    100% { opacity: 1; }
`;

export const Loading = styled(Grommet)`
  animation: ${flash} 2s linear infinite;
`;