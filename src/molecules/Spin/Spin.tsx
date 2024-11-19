import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { SpinStyles } from './styles';
import { RdSpinProps } from './types';

export const Spin = ({ ...antdProps }: RdSpinProps) => {
    return (
        <ConfigProviderDesign>
            <SpinStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
