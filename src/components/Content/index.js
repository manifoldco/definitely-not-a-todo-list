import React from 'react';
import { Grid, Box } from 'grommet';

export const Content = ({ children }) => (
    <Grid
        areas={[
            { name: 'left', start: [0, 0], end: [0, 0] },
            { name: 'main', start: [1, 0], end: [1, 0] },
            { name: 'right', start: [2, 0], end: [2, 0] },
        ]}
        columns={['medium', 'flex', 'medium']}
        rows={['full']}
        gap='small'
        fill
    >
        <Box />
        <Box elevation="small" pad="small">
            {children}
        </Box>
        <Box />
    </Grid>
);

export default Content;