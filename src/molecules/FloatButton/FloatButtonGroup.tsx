import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { FloatButtonGroupStyles } from './styles';
import { RdFloatButtonGroupProps } from './types';

export const FloatButtonGroup = ({ ...antdProps }: RdFloatButtonGroupProps) => {
    return (
        <ConfigProviderDesign>
            <FloatButtonGroupStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

