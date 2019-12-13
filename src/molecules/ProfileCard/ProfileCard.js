import React from 'react';
import { styleConstants, unit } from "../../atoms/style-constants";
import { css, cx } from 'emotion';
import Card from '../Card/Card';
import ActorAvatar from '../../atoms/ActorAvatar/ActorAvatar';
import sealImage from '!file-loader!../../atoms/ActorAvatar/seal.jfif';
import headerImage from '!file-loader!./header-bg.svg';

const avatarBand = css`
    background-image: url('${headerImage}');
    background-size: contain;
    left: -${styleConstants.paddings.medium};
    right: -${styleConstants.paddings.medium};
    top: 0;
    bottom: 50%;
    position: absolute;
    z-index: -1;
`;

const avatarContainer = css`
    height: ${unit(6.5)};
    position: relative;
    display: flex;
    justify-content: center; 
    align-items: center;
`;

const nameContainer = css`
    text-align: center;
    font-weight: ${styleConstants.fontWeights.bold};
`;

const jobTitleContainer = css`
    font-size: ${unit(0.75)};
    margin-top: ${styleConstants.paddings.xsmall};
    text-align: center;
    color: ${styleConstants.fontSizes.t075};
`;

const profileCard = css`
    > section:first-child {
        padding-top: 0;
    }
    > section {
        padding: ${styleConstants.paddings.medium};
    }
    > section + section {
        border-top: 1px solid rgba(0,0,0,.15);
    }
`;

const viewStats = css`
    font-size: ${styleConstants.fontSizes.t075};
    line-height: 1.33333;
    font-weight: 600;
    display: flex;
    margin-top: ${styleConstants.paddings.small};

    > :first-child {
        color: ${styleConstants.colors.gray};
        flex: 1;
    }
`;


function ViewStat({ description, value }) {
    return <div className={viewStats}><span>{description}</span><a href="#">{value}</a></div>
}

export default function ({ fullName, jobTitle, viewStats }) {
    return <Card className={profileCard}>
        <section>
            <div className={avatarContainer}>
                <div className={avatarBand}></div>
                <ActorAvatar src={sealImage} />
            </div>
            <div className={nameContainer}>
                {fullName}
            </div>
            <div className={jobTitleContainer}>
                {jobTitle}
            </div>
        </section>
        <section className={viewStats}>
            {viewStats.map(x => <ViewStat {...x}/>)}
        </section>
    </Card>
}