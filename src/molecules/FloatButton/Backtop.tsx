import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { BackTopStyles } from './styles';
import { RdBackTopProps } from './types';

export const BackTop = ({ ...antdProps }: RdBackTopProps) => {
    return (
        <ConfigProviderDesign>
            <BackTopStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

