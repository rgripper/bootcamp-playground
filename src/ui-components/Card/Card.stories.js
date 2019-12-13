import React from 'react';
import Card from './Card';
import { unit } from "../../style-constants";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default { title: 'Card', decorators: [withKnobs] };

export const withText = () => <div style={{display: 'inline-block', width: unit(13.5)}}>
    <Card>{text("Content", "This is my card!")}</Card>
</div>;