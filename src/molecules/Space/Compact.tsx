import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { CompactStyles } from './styles';
import { RdCompactProps } from './types';

export const Compact = ({ block = false, ...antdProps }: RdCompactProps) => {
    return (
        <ConfigProviderDesign>
            <CompactStyles block={block} {...antdProps} />
        </ConfigProviderDesign>
    );
};
