import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { AffixStyles } from './styles';
import { RdAffixProps } from './types';

export const Affix = ({ ...antdProps }: RdAffixProps) => {
    return (
        <ConfigProviderDesign>
            <AffixStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
