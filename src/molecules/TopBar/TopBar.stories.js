import React from 'react';
import TopBar from './TopBar';

export default { title: 'Top Bar' };

export const withItemList = () => <div styles={{display: 'inline-block', width: '216px'}}>
    <TopBar>blah</TopBar>
</div>;