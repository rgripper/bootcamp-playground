import React from 'react';
import ProfileCard from './ProfileCard';
import { text, object } from '@storybook/addon-knobs';
import { styleConstants, unit } from "../../atoms/style-constants";

export default { title: 'Profile Left Rail Card' };

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

export const withProfile = () => <div style={{ display: 'inline-block', width: unit(13.5) }}>
    <ProfileCard fullName={text('Full Name', sampleProfile.fullName)}
        fullName={text('Job Title', sampleProfile.jobTitle)}
        viewStats={object('View Stats', sampleProfile.viewStats)}></ProfileCard>
</div>;