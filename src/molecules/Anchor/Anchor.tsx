import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { AnchorStyles } from './styles';
import { RdAnchorProps } from './types';

export const Anchor = ({ ...antdProps }: RdAnchorProps) => {
    return (
        <ConfigProviderDesign>
            <AnchorStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
