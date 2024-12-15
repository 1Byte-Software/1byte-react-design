import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { EmptyStyles } from './styles';
import { RdEmptyProps } from './types';

export const Empty = ({ ...antdProps }: RdEmptyProps) => {
    return (
        <ConfigProviderDesign>
            <EmptyStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
