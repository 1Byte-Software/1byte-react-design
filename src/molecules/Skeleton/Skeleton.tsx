import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { SkeletonStyles } from './styles';
import { ISkeletonProps } from './types';

export const Skeleton = ({ ...antdProps }: ISkeletonProps) => {
    return (
        <ConfigProviderDesign>
            <SkeletonStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
