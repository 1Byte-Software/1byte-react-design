import { GetProps, Input, InputRef } from 'antd';
import { ComponentToken as InputComponentTokenAntd } from 'antd/es/input/style';
import { InputInternal } from './Input';
import { Search } from './Search';
import { InputGroup } from './InputGroup';
import { OTP } from './OTP';
import { Password } from './Password';
import { TextArea } from './TextArea';
import { TextAreaRef } from 'antd/es/input/TextArea';
import { OTPRef } from 'antd/es/input/OTP';
import React from 'react';
import { InputUpload } from './InputUpload';
import { RdUploadProps } from '../Upload';

//#region Define Ant Design types
type InputPropsAntd = GetProps<typeof Input>;
type SearchPropsAntd = GetProps<typeof Input.Search>;
type InputGroupPropsAntd = GetProps<typeof Input.Group>;
type OTPPropsAntd = GetProps<typeof Input.OTP>;
type PasswordPropsAntd = GetProps<typeof Input.Password>;
type TextAreaPropsAntd = GetProps<typeof Input.TextArea>;

type InputRefAntd = InputRef;
type TextareaRefAntd = TextAreaRef;
type OTPRefAntd = OTPRef;
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
type InputUploadPropsExtend = {
    loading?: boolean;

    upload?: Omit<RdUploadProps, 'showUploadList'>
};

type InputRefExtend = {};
type TextareaRefExtend = {};
type OTPRefExtend = {};
//#endregion

//#region Export types
export type RdInputProps = InputPropsAntd & InputPropsExtend;
export type RdSearchProps = SearchPropsAntd & SearchPropsExtend;
export type RdInputGroupProps = InputGroupPropsAntd & InputGroupPropsExtend;
export type RdOTPProps = OTPPropsAntd & OTPPropsExtend;
export type RdPasswordProps = PasswordPropsAntd & PasswordPropsExtend;
export type RdTextAreaProps = TextAreaPropsAntd & TextAreaPropsExtend;
export type RdInputUploadProps = InputPropsAntd & InputUploadPropsExtend;

export type RdInputRef = InputRefAntd & InputRefExtend;
export type RdTextareaRef = TextareaRefAntd & TextareaRefExtend;
export type RdOTPRefExtend = OTPRefAntd & OTPRefExtend;
//#endregion

//#region Define component types
export type RdInputInternalComponent = React.ForwardRefExoticComponent<
    RdInputProps & React.RefAttributes<RdInputRef>
>;

export type RdPasswordComponent = React.ForwardRefExoticComponent<
    RdPasswordProps & React.RefAttributes<RdInputRef>
>;

export type RdOTPComponent = React.ForwardRefExoticComponent<
    RdOTPProps & React.RefAttributes<RdOTPRefExtend>
>;

export type RdTextareaComponent = React.ForwardRefExoticComponent<
    RdTextAreaProps & React.RefAttributes<RdTextareaRef>
>;

export type RdSearchComponent = React.ForwardRefExoticComponent<
    RdSearchProps & React.RefAttributes<RdInputRef>
>;

export type RdInputUploadComponent = React.ForwardRefExoticComponent<
    RdInputUploadProps & React.RefAttributes<RdInputRef>
>;

export type RdInputGroupComponent = React.FC<RdInputGroupProps>;

export type RdInputCompoundedComponent = typeof InputInternal & {
    Search: typeof Search;
    Group: typeof InputGroup;
    OTP: typeof OTP;
    Password: typeof Password;
    TextArea: typeof TextArea;
    Upload: typeof InputUpload;
};

export type RdInputComponentToken = InputComponentTokenAntd & InputComponentTokenExtend;
//#endregion
