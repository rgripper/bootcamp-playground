import React from 'react';
import { styleConstants } from "../../atoms/style-constants";
import { css, cx } from 'emotion';
import LeftRailCard from '../LeftRailCard/LeftRailCard';
import ActorAvatar from '../../atoms/ActorAvatar/ActorAvatar';
import sealImage from '!file-loader!../../atoms/ActorAvatar/seal.jfif';
import headerImage from '!file-loader!./header-bg.svg';

const avatarBand = css`
    background-image: url('${headerImage}');
    background-size: contain;
    width: 100%;
    box-sizing: border-box;
    height: 3.25rem;
    position: absolute;
    z-index: -1;
`;

const avatarContainer = css`
    height: 6.5rem;
    display: flex;
    justify-content: center; 
    align-items: center;
`;

const nameContainer = css`
    text-align: center;
    font-weight: bold;
`

export default function () {
    return <LeftRailCard>
        <div className={avatarBand}>
        </div>
        <div className={avatarContainer}>
            <ActorAvatar src={sealImage}/>
        </div>
        <div className={nameContainer}>
            Seal Bobbins
        </div>
        <div>
            Senior Baby Seal
        </div>
    </LeftRailCard>
}