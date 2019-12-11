import React from 'react';
import { css } from 'emotion';
import { styleConstants } from "../../atoms/style-constants";
import { TriangleDownIcon } from './icons';

const container = css`
    border: 0;

    padding-top: ${styleConstants.paddings.small};
    padding-bottom: 2px;
    height: 100%;
    width: 5rem;
    border-bottom: 2px solid transparent;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${styleConstants.colors.lightGray};

    > label {
        font-size: ${styleConstants.fontSizes.t075};
        line-height: 1.33333;

        > svg {
            width: 1.5rem;
            height: 0.8rem;
            padding-left: ${styleConstants.paddings.xsmall};
            display: inline-block;
        }
    }
`;

const iconContainer = css`
    flex: 1;
    overflow: hidden;
    display: flex;
    justify-content: center;
`;

export default function ButtonItem ({ label, Icon }) {
    return (
        <button className={container}>
            <div className={iconContainer}>{<Icon/>}</div>
            <label>{label}<TriangleDownIcon/></label>
        </button>
    )
}