import React from 'react';
import ActorAvatar from './ActorAvatar';
import sealImage from '!file-loader!./seal.jfif';
export default { title: 'ActorAvatar' };

export const withImage = () => <ActorAvatar src={sealImage} />;