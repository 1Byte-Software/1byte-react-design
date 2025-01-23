import { BadgeStyles } from './styles';
import { RdBadgeProps } from './types';

export const Badge = ({ ...antdProps }: RdBadgeProps) => {
    return <BadgeStyles {...antdProps} />;
};
