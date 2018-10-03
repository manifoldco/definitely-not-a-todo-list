import React from 'react';
import { Box } from 'grommet';

import * as Styled from './styles';

export const Loading = () => (
    <Box fill alignContent="center" align="center" style={{ justifyContent: 'center' }}>
        <Styled.Loading size='large' color='brand' />
    </Box>
);

export default Loading;