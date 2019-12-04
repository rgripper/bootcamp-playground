import React from 'react';
import LeftRailCard from './LeftRailCard';

export default { title: 'Left Rail Card' };

export const withText = () => <div styles={{display: 'inline-block', width: '216px'}}>
    <LeftRailCard>Hello Button</LeftRailCard>
</div>;