import React from 'react';
import { css, cx } from 'emotion';
import { styleConstants, unit } from "../../atoms/style-constants";

export const itemContainer = isActive => css`
    position: relative;
    padding-top: ${styleConstants.paddings.small};
    padding-bottom: ${unit(0.125)};
    height: 100%;
    width: ${unit(5)};
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${isActive ? styleConstants.colors.white : styleConstants.colors.lightGray};
    border-bottom: 2px solid transparent;

    > label {
        font-size: ${styleConstants.fontSizes.t075};
        line-height: 1.33333;
    }
`;

const linkItemContainer = isActive => css`
    border-color: ${isActive ? styleConstants.colors.white : 'transparent'};
`;

const iconContainer = css`
    flex: 1;
    overflow: hidden;
    display: flex;
    justify-content: center;
`;

const badge = css`
    border-radius: 50%;
    line-height: 1.1;
    border: 1px solid ${styleConstants.colors.darkGreen};
    font-size: ${styleConstants.fontSizes.t075};
    width: ${unit(1)};
    height: ${unit(1)};
    display: inline-flex;
    align-items: baseline; 
    justify-content: center;
    color: ${styleConstants.colors.white};
    position: absolute;
    top: 8%;
    right: 29%;
    background-color: ${styleConstants.colors.fireEngineRed};
`;

function Badge({ children }) {
    return <span className={badge}>{children}</span>
}

export default function LinkItem ({ isActive, path, label, badgeText, Icon }) {
    return (
        <a className={cx(itemContainer(isActive), linkItemContainer(isActive))} href={path}>
            {badgeText ? <Badge>{badgeText}</Badge> : null}
            <div className={iconContainer}>{<Icon isActive={isActive} />}</div>
            <label>{label}</label>
        </a>
    )
}