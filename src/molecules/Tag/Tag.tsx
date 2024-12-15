import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TagStyles } from './styles';
import { RdTagProps } from './types';

export const Tag = ({ ...antdProps }: RdTagProps) => {
    return (
        <ConfigProviderDesign>
            <TagStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
