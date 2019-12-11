import React from 'react';
import { styleConstants } from "../../atoms/style-constants";
import { css } from 'emotion';

const separator = css`
    height: 100%;
    border-left: 1px solid ${styleConstants.colors.blueBayoux};
`;

export default function ItemSeparator () {
    return <span className={separator}></span>
}