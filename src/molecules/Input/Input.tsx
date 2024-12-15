import { InputProps } from 'antd';
import { forwardRef } from 'react';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { InputGroup } from './InputGroup';
import { OTP } from './OTP';
import { Password } from './Password';
import { Search } from './Search';
import { TextArea } from './TextArea';
import { InputStyled } from './styles';
import { RdInputCompoundedComponent, RdInputProps } from './types';

export const InputInternal = forwardRef((props: RdInputProps, ref: RdInputProps['ref']) => {
    const { ...antdProps } = props;

    return (
        <ConfigProviderDesign>
            <InputStyled ref={ref} {...(antdProps as InputProps)} />
        </ConfigProviderDesign>
    );
});

export const Input = InputInternal as RdInputCompoundedComponent;

Input.Password = Password;
Input.TextArea = TextArea;
Input.Search = Search;
Input.Group = InputGroup;
Input.OTP = OTP;