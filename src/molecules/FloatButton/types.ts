import { FloatButton, GetProps } from 'antd';
import { ComponentToken as FloatButtonComponentTokenAntd } from 'antd/es/float-button/style';
import { ComponentToken as BackTopComponentTokenAntd } from 'antd/es/back-top/style';

//#region Define props
type FloatButtonProps = GetProps<typeof FloatButton>;
type BackTopProps = GetProps<typeof FloatButton.BackTop>;
type FloatButtonGroupProps = GetProps<typeof FloatButton.Group>;
//#endregion

//#region Custom component token
type FloatButtonComponentTokenExtend = {};
type BackTopComponentTokenExtend = {};
//#endregion

//#region Custom props
type FloatButtonPropsExtend = {};
type FloatButtonGroupPropsExtend = {};
type BackTopPropsExtend = {};
//#endregion

//#region export type
export type RdFloatButtonProps = FloatButtonProps & FloatButtonPropsExtend;
export type RdFloatButtonGroupProps = FloatButtonGroupProps & FloatButtonGroupPropsExtend;
export type RdBackTopProps = BackTopProps & BackTopPropsExtend;

export type RdFloatButtonComponentToken = FloatButtonComponentTokenAntd &
    FloatButtonComponentTokenExtend;
export type RdBackTopComponentToken = BackTopComponentTokenAntd & BackTopComponentTokenExtend;
//#endregion
