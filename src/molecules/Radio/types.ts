import { Radio, GetProps } from 'antd';
import { ComponentToken as RadioComponentTokenAntd } from 'antd/es/radio/style';

//#region Define Ant Design types
type RadioProps = GetProps<typeof Radio>;
type RadioButtonProps = GetProps<typeof Radio.Button>;
type RadioGroupProps = GetProps<typeof Radio.Group>;
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
