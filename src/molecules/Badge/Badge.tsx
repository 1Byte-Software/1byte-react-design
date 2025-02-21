import { forwardRef } from 'react';
import { BadgeRibbon } from './BadgeRibbon';
import { BadgeStyles } from './styles';
import { RdBadgeComponent, RdBadgeCompoundedComponent } from './types';

export const BadgeInternal: RdBadgeComponent = forwardRef((props, ref) => {
    return <BadgeStyles ref={ref} {...props} />;
});

export const Badge = BadgeInternal as RdBadgeCompoundedComponent;
Badge.Ribbon = BadgeRibbon;
