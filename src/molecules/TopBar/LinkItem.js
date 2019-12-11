import React from 'react';
import { css } from 'emotion';
import { styleConstants } from "../../atoms/style-constants";

const container = isActive => css`
    position: relative;
    padding-top: ${styleConstants.paddings.small};
    padding-bottom: 2px;
    height: 100%;
    width: 5rem;
    border-bottom: 2px solid ${isActive ? styleConstants.colors.white : 'transparent'};
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${isActive ? styleConstants.colors.white : styleConstants.colors.lightGray};

    > label {
        font-size: ${styleConstants.fontSizes.t075};
        line-height: 1.33333;
    }
`;

const iconContainer = css`
    flex: 1;
    overflow: hidden;
    display: flex;
    justify-content: center;
`;

const badge = css`
    border-radius: 50%;
    border: 1px solid ${styleConstants.colors.darkGreen};
    font-size: 0.75rem;
    width: 1rem;
    height: 1rem;
    display: inline-flex;
    align-items: center; 
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
        <a className={container(isActive)} href={path}>
            {badgeText ? <Badge>{badgeText}</Badge> : null}
            <div className={iconContainer}>{<Icon isActive={isActive} />}</div>
            <label>{label}</label>
        </a>
    )
}