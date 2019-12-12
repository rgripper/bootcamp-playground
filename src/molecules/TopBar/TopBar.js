import React from 'react';
import { styleConstants, unit } from "../../atoms/style-constants";
import { css } from 'emotion';
import { Logo, SearchIcon } from './icons';

const bar = css`
    position: fixed;
    top: 0;
    width: 100vw;
    height: ${unit(3.25)};
    background-color: ${styleConstants.colors.darkGreen};
`;

const barInner = css`
    height: 100%;
    max-width: ${unit(70.5)};
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

// TODO: move background-color
const searchInputContainer = css`
    display: inline-flex;
    height: ${unit(2.125)};
    align-items: middle;
    border-radius: ${styleConstants.borderRadiuses.default};
    background-color: #e1e9ee; 

    > * {
        background-color: transparent; 
    }

    > button {
        border: 0;
        display: inline-block;
        padding: 0;
        
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

const mainSpacer = css`
    flex: 1;
    margin-right: ${styleConstants.paddings.medium};
`;

const logoLinkWrapper = css`
    display: inline-block;
    margin-right: ${styleConstants.paddings.medium};
    width: ${unit(2.125)};
    height: ${unit(2.125)};
    overflow: hidden;
    > svg {
        transform: scale(0.7083);
        transform-origin: top left;
    }
`;

function SearchInput() {
    return (
        <div className={searchInputContainer}>
            <button><SearchIcon /></button><input placeholder="Search" />
        </div>
    )
}

export default function TopBar ({ children }) {
    return (
        <header className={bar}>
            <div className={barInner}>
                <a href="#" className={logoLinkWrapper}><Logo /></a>
                <div className={mainSpacer}><SearchInput /></div>
                {children}
            </div>
        </header>
    )
}