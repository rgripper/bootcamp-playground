import React from 'react';
import { css } from 'emotion';
import TopBar from '../molecules/TopBar/TopBar';
import LinkItem from '../molecules/TopBar/LinkItem';
import ItemSeparator from '../molecules/TopBar/ItemSeparator';
import ButtonItem from '../molecules/TopBar/ButtonItem';
import { HomeIcon, MyNetworkIcon, JobsIcon, MessagingIcon, NotificationsIcon, PostJobIcon, WorkIcon } from '../atoms/icons';
import ProfileCard from '../molecules/ProfileCard/ProfileCard';
import { unit, styleConstants } from '../atoms/style-constants';
import Card from '../molecules/Card/Card';

const grid = css`
    display: grid;
    grid-column-gap: ${styleConstants.paddings.large};
    grid-template-columns: 3fr 10fr 5fr;
    grid-template-rows: ${unit(2.125)} auto;
`;

const sampleProfile = {
    fullName: "Seal Bobbins",
    jobTitle: "Senior Baby Seal",
    viewStats: [{
        description: `Who's viewed your profile`,
        value: '223'
    },
    {
        description: 'Views of your post',
        value: '509'
    }]
};

const leftRail = css`
    > * {
        margin-bottom: ${styleConstants.paddings.small};
    }
`;

export default function () {
    return <div>
        <TopBar>
            <LinkItem label="Home" isActive={true} Icon={HomeIcon} />
            <LinkItem label="My Network" isActive={false} Icon={MyNetworkIcon} />
            <LinkItem label="Jobs" isActive={false} Icon={JobsIcon} />
            <LinkItem label="Messaging" isActive={false} Icon={MessagingIcon} badgeText={2} />
            <LinkItem label="Notifications" isActive={false} Icon={NotificationsIcon} />
            <ItemSeparator />
            <ButtonItem label="Work" Icon={WorkIcon} />
            <LinkItem label="Post a job" isActive={false} Icon={PostJobIcon} />
        </TopBar>
        <div className={grid}>
            <div className={leftRail}>
                <ProfileCard {...sampleProfile}></ProfileCard>
                <Card>Something else</Card>
            </div>
            <div><Card>Something else</Card></div>
            <div><Card>Something else</Card></div>
        </div>
    </div>
}