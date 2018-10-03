import React from 'react';
import { Text } from 'grommet';

import * as Styled from './styles';

export const OfflineMessage = ({ online }) => !online && (
    <Styled.OfflineBox
        background={{ color: 'status-warning', dark: false }}
        animation="slideUp"
        pad='small'
        elevation="medium"
        alignSelf="center"
        align="baseline"
        direction="row"
    >
        <Styled.Emoji size="xlarge" tag="span">
            😧
        </Styled.Emoji>
        <Text size="medium" tag="span">
            Seems like you are offline, you can still work, changes will be saved when back online.
        </Text>
    </Styled.OfflineBox>
);

export default OfflineMessage;