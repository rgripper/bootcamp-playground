import React from 'react';
import { css, cx } from 'emotion';
import { styleConstants } from "../../atoms/style-constants";
import { TriangleDownIcon } from './icons';
import { itemContainer } from './LinkItem';

const container = css`
    border: 0;
`;

const labeIcon = css`
    width: 1.5rem;
    height: 0.8rem;
    padding-left: ${styleConstants.paddings.xsmall};
    display: inline-block;
`;

const iconContainer = css`
    flex: 1;
    overflow: hidden;
    display: flex;
    justify-content: center;
`;

export default function ButtonItem ({ label, Icon }) {
    return (
        <button className={cx(itemContainer(false), container)}>
            <div className={iconContainer}>{<Icon/>}</div>
            <label>{label}<TriangleDownIcon className={labeIcon}/></label>
        </button>
    )
}