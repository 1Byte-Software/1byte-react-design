import { forwardRef } from 'react';
import { InputPasswordStyled } from './styles';
import { RdPasswordComponent } from './types';

export const Password: RdPasswordComponent = forwardRef((props, ref) => {
    return <InputPasswordStyled ref={ref} {...props} />;
});
