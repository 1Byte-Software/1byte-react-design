import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { SpaceStyles } from './styles';
import { RdSpaceProps } from './types';

export const Space = ({ block = false, ...antdProps }: RdSpaceProps) => {
    return (
        <ConfigProviderDesign>
            <SpaceStyles block={block} {...antdProps} />
        </ConfigProviderDesign>
    );
};
