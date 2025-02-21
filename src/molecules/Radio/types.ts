import { Radio, GetProps } from 'antd';
import { RadioRef } from 'antd/es/radio';
import { ComponentToken as RadioComponentTokenAntd } from 'antd/es/radio/style';

//#region Define Ant Design types
type RadioProps = GetProps<typeof Radio>;
type RadioButtonProps = GetProps<typeof Radio.Button>;
type RadioGroupProps = GetProps<typeof Radio.Group>;

type RadioRefAntd = RadioRef;
//#endregion

//#region Define extended component tokens
type RadioComponentTokenExtend = {};
//#endregion

//#region Define extended types
type RadioPropsExtend = {};
type RadioButtonPropsExtend = {};
type RadioGroupPropsExtend = {};
//#endregion

//#region Export types
export type RdRadioProps = RadioProps & RadioPropsExtend;
export type RdRadioButtonProps = RadioButtonProps & RadioButtonPropsExtend;
export type RdRadioGroupProps = RadioGroupProps & RadioGroupPropsExtend;

export type RdRadioComponentToken = RadioComponentTokenAntd & RadioComponentTokenExtend;
//#endregion

//#region Define component types
export type RdRadioComponent = React.ForwardRefExoticComponent<
    RdRadioProps & React.RefAttributes<RadioRefAntd>
>;

export type RdRadioButtonComponent = React.ForwardRefExoticComponent<
    RdRadioButtonProps & React.RefAttributes<RadioRefAntd>
>;

export type RdRadioGroupComponent = React.NamedExoticComponent<
    RdRadioGroupProps & React.RefAttributes<HTMLDivElement>
>;

export type RdRadioCompoundedComponent = RdRadioComponent & {
    Button: RdRadioButtonComponent;
    Group: RdRadioGroupComponent;
};
//#endregion
