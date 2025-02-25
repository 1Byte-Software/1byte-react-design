import { forwardRef } from 'react';
import { AvatarGroup } from './AvatarGroup';
import { AvatarStyles } from './styles';
import { RdAvatarComponent, RdAvatarCompoundedComponent } from './types';

export const AvatarInternal: RdAvatarComponent = forwardRef((props, ref) => {
    return <AvatarStyles ref={ref} {...props} />;
});

export const Avatar = AvatarInternal as RdAvatarCompoundedComponent;

Avatar.Group = AvatarGroup;
