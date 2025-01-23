import { GetProps, Input } from 'antd';
import { ComponentToken as InputComponentTokenAntd } from 'antd/es/input/style';
import { InputInternal } from './Input';
import { Search } from './Search';
import { InputGroup } from './InputGroup';
import { OTP } from './OTP';
import { Password } from './Password';
import { TextArea } from './TextArea';

//#region Define Ant Design types
type InputProps = GetProps<typeof Input>;
type SearchProps = GetProps<typeof Input.Search>;
type InputGroupProps = GetProps<typeof Input.Group>;
type OTPProps = GetProps<typeof Input.OTP>;
type PasswordProps = GetProps<typeof Input.Password>;
type TextAreaProps = GetProps<typeof Input.TextArea>;
//#endregion

//#region Define extended component tokens
type InputComponentTokenExtend = {};
//#endregion

//#region Define extended types
type InputPropsExtend = {};
type SearchPropsExtend = {};
type InputGroupPropsExtend = {};
type OTPPropsExtend = {};
type PasswordPropsExtend = {};
type TextAreaPropsExtend = {};
//#endregion

//#region Export types
export type RdInputProps = InputProps & InputPropsExtend;
export type RdSearchProps = SearchProps & SearchPropsExtend;
export type RdInputGroupProps = InputGroupProps & InputGroupPropsExtend;
export type RdOTPProps = OTPProps & OTPPropsExtend;
export type RdPasswordProps = PasswordProps & PasswordPropsExtend;
export type RdTextAreaProps = TextAreaProps & TextAreaPropsExtend;

export type RdInputCompoundedComponent = typeof InputInternal & {
    Search: typeof Search;
    Group: typeof InputGroup;
    OTP: typeof OTP;
    Password: typeof Password;
    TextArea: typeof TextArea;
};

export type RdInputComponentToken = InputComponentTokenAntd & InputComponentTokenExtend;
//#endregion
