import { forwardRef } from 'react';
import { InputGroup } from './InputGroup';
import { OTP } from './OTP';
import { Password } from './Password';
import { Search } from './Search';
import { TextArea } from './TextArea';
import { InputStyled } from './styles';
import { RdInputCompoundedComponent, RdInputInternalComponent } from './types';

export const InputInternal: RdInputInternalComponent = forwardRef((props, ref) => {
    return <InputStyled ref={ref} {...props} />;
});

export const Input = InputInternal as RdInputCompoundedComponent;

Input.Password = Password;
Input.TextArea = TextArea;
Input.Search = Search;
Input.Group = InputGroup;
Input.OTP = OTP;
