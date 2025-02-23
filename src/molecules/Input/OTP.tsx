import { forwardRef } from 'react';
import { OTPStyled } from './styles';
import { RdOTPComponent } from './types';

export const OTP: RdOTPComponent = forwardRef((props, ref) => {
    return <OTPStyled ref={ref} {...props} />;
});
