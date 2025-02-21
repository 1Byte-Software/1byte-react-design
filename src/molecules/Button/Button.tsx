import { forwardRef } from 'react';
import { ButtonGroup } from './ButtonGroup';
import { ButtonStyles } from './styles';
import { RdButtonComponent, RdButtonCompoundedComponent } from './types';
import clsx from 'clsx';

export const ButtonInternal: RdButtonComponent = forwardRef((props, ref) => {
    const { rootClassName } = props;

    return <ButtonStyles rootClassName={clsx('rd-button', rootClassName)} ref={ref} {...props} />;
});

export const Button = ButtonInternal as RdButtonCompoundedComponent;
Button.Group = ButtonGroup;