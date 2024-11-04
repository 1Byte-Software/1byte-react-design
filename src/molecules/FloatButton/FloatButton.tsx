import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { BackTop } from './Backtop';
import { FloatButtonStyles } from './styles';
import { IFloatButtonProps } from './types';

export const FloatButton = ({ ...antdProps }: IFloatButtonProps) => {
    return (
        <ConfigProviderDesign>
            <FloatButtonStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

FloatButton.BackTop = BackTop;
