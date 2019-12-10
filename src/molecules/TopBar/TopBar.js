import React from 'react';
import { styleConstants } from "../../atoms/style-constants";
import { css, cx } from 'emotion';
import Logo from './Logo.js';
import SearchIcon from './SearchIcon.js';

const bar = css`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 3.25rem;
    background-color: ${styleConstants.colors.darkGreen};
`;

const barInner = css`
    height: 100%;
    max-width: 1128px;
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

// TODO: move background-color
const searchInputContainer = css`
    display: inline-flex;
    height: 2.125rem;
    align-items: middle;
    border-radius: ${styleConstants.borderRadiuses.default};
    
    &, > input {
        background-color: #e1e9ee; 
    }

    > button {
        border: 0;
        display: inline-block;
        padding: 0;
        background: transparent;
        margin: ${styleConstants.paddings.xsmall};
        > svg {
            transform: scale(0.7083);
        }
    }
    > input {
        height: 100%;
        border: 0; 
    }
`;

const searchInputSpacer = css`
    flex: 1;
    margin-right: ${styleConstants.paddings.medium};
`;

const logoLinkWrapper = css`
    display: inline-block;
    margin-right: ${styleConstants.paddings.medium};
    width: 2.125rem;
    height: 2.125rem;
    overflow: hidden;
    > svg {
        transform: scale(0.7083);
        transform-origin: top left;
    }
`;

export default function ({ children }) {
    return <header className={bar}>
        <div className={barInner}>
            <a href="#" className={logoLinkWrapper}><Logo /></a>
            <div className={searchInputSpacer}>
                <div className={searchInputContainer}>
                    <button><SearchIcon /></button><input placeholder="Search" />
                </div>
            </div>

            {children}
        </div>
    </header>
}