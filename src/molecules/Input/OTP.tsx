import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { OTPStyled } from './styles';
import { RdOTPProps } from './types';

export const OTP = ({ ...antdProps }: RdOTPProps) => {
    return (
        <ConfigProviderDesign>
            <OTPStyled {...antdProps} />
        </ConfigProviderDesign>
    );
};
