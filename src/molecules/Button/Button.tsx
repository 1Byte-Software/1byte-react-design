import { ButtonProps } from 'antd';
import { forwardRef } from 'react';
import { ButtonGroupInternal } from './ButtonGroup';
import { ButtonStyles } from './styles';
import { RdButtonCompoundedComponent, RdButtonProps } from './types';

export const ButtonInternal: React.ForwardRefExoticComponent<
    RdButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>
> = forwardRef((props, ref) => {
    return <ButtonStyles ref={ref} {...(props as ButtonProps)} />;
});

export const Button = ButtonInternal as RdButtonCompoundedComponent;

Button.Group = ButtonGroupInternal;
