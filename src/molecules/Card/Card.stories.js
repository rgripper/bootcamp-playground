import React from 'react';
import Card from './Card';
import { unit } from "../../atoms/style-constants";

export default { title: 'Card' };

export const withText = () => <div styles={{display: 'inline-block', width: unit(13.5)}}>
    <Card>Hello card</Card>
</div>;