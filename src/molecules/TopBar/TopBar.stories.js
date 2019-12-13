import React from 'react';
import LinkItem from './LinkItem';
import ButtonItem from './ButtonItem';
import { HomeIcon, MyNetworkIcon, JobsIcon, MessagingIcon, NotificationsIcon, PostJobIcon, WorkIcon } from '../../atoms/icons';
import ItemSeparator from './ItemSeparator';
import TopBar from './TopBar';
import { unit } from '../../atoms/style-constants';

export default { title: 'Top Bar' };

export const withItemList = () => <div styles={{display: 'inline-block', width: unit(13.5)}}>
    <TopBar>
        <LinkItem label="Home" isActive={true} Icon={HomeIcon} />
        <LinkItem label="My Network" isActive={false} Icon={MyNetworkIcon} />
        <LinkItem label="Jobs" isActive={false} Icon={JobsIcon} />
        <LinkItem label="Messaging" isActive={false} Icon={MessagingIcon} badgeText={2} />
        <LinkItem label="Notifications" isActive={false} Icon={NotificationsIcon} />
        <ItemSeparator/>
        <ButtonItem label="Work" Icon={WorkIcon} />
        <LinkItem label="Post a job" isActive={false} Icon={PostJobIcon} />
    </TopBar>
</div>;