import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { SkeletonStyles } from './styles';
import { RdSkeletonProps } from './types';

export const Skeleton = ({ ...antdProps }: RdSkeletonProps) => {
    return (
        <ConfigProviderDesign>
            <SkeletonStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
