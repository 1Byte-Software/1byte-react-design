import { Radio, GetProps } from 'antd';
import { ComponentToken as RadioComponentTokenAntd } from 'antd/es/radio/style';

//#region Define props
type RadioProps = GetProps<typeof Radio>;
type RadioButtonProps = GetProps<typeof Radio.Button>;
type RadioGroupProps = GetProps<typeof Radio.Group>;
//#endregion

//#region Custom component token
type RadioComponentTokenExtend = {};
//#endregion

//#region Custom props
type RadioPropsExtend = {};
type RadioButtonPropsExtend = {};
type RadioGroupPropsExtend = {};
//#endregion

//#region export type
export type RdRadioProps = RadioProps & RadioPropsExtend;
export type RdRadioButtonProps = RadioButtonProps & RadioButtonPropsExtend;
export type RdRadioGroupProps = RadioGroupProps & RadioGroupPropsExtend;

export type RdRadioComponentToken = RadioComponentTokenAntd & RadioComponentTokenExtend;
//#endregion
