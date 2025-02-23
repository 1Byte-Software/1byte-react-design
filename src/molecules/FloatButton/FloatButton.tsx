import { BackTop } from './BackTop';
import { FloatButtonGroup } from './FloatButtonGroup';
import { FloatButtonStyles } from './styles';
import { RdFloatButtonCompoundedComponent, RdFloatButtonProps } from './types';

export const FloatButtonInternal = (props: RdFloatButtonProps) => {
    return <FloatButtonStyles {...props} />;
};

export const FloatButton = FloatButtonInternal as RdFloatButtonCompoundedComponent;

FloatButton.BackTop = BackTop;
FloatButton.Group = FloatButtonGroup;
