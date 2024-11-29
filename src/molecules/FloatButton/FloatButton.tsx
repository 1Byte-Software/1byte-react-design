import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { BackTop } from './Backtop';
import { FloatButtonGroup } from './FloatButtonGroup';
import { FloatButtonStyles } from './styles';
import { RdFloatButtonProps } from './types';

export const FloatButton = ({ ...antdProps }: RdFloatButtonProps) => {
    return (
        <ConfigProviderDesign>
            <FloatButtonStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

FloatButton.BackTop = BackTop;
FloatButton.Group = FloatButtonGroup;
