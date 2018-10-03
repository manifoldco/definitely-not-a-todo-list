import React from 'react';

import Content from '../Content';
import ToReadList from '../ToReadList';
import AddToRead from '../AddToRead';

export const Home = ({ db }) => (
    <Content>
        <ToReadList db={db} />
        <AddToRead db={db} />
    </Content>
);

export default Home;