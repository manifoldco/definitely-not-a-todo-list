import React from 'react';
import { Box } from 'grommet';

import * as Styled from './styles';

export const Header = () => (
    <Box
        background={{ color: 'brand', dark: false }}
        pad='small'
        elevation="small"
        fill="horizontal"
        justify='between'
        responsive
        direction="row"
        tag="header"
    >
        <Box
            tag="nav"
            direction="row"
            responsive
            justify='between'
            margin={{ right: 'medium', left: 'medium' }}
        >
            <Styled.StyledLink to="/">Home</Styled.StyledLink>
        </Box>
        <Box
            tag="div"
            direction="row"
            responsive
            margin={{ right: 'medium', left: 'medium' }}
        >
            <Styled.LogoImage fit="cover" src="http://couchdb.apache.org/image/couch@2x.png"/>
        </Box>
        <Box
            tag="div"
            direction="row"
            responsive
            justify='between'
            margin={{ right: 'medium', left: 'medium' }}
        >
            <Styled.StyledLink to="/">Login</Styled.StyledLink>
        </Box>
    </Box>
);

export default Header;