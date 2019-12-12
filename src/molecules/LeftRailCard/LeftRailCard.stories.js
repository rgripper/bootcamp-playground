import React from 'react';
import LeftRailCard from './LeftRailCard';
import { unit } from "../../atoms/style-constants";

export default { title: 'Left Rail Card' };

export const withText = () => <div styles={{display: 'inline-block', width: unit(13.5)}}>
    <LeftRailCard>Hello card</LeftRailCard>
</div>;