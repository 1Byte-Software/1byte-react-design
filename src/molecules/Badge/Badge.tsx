import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { BadgeStyles } from './styles';
import { RdBadgeProps } from './types';

export const Badge = ({ ...antdProps }: RdBadgeProps) => {
    return (
        <ConfigProviderDesign>
            <BadgeStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
