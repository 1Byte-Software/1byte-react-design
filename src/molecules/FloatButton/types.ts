import { FloatButton, FloatButtonRef, GetProps } from 'antd';
import { ComponentToken as BackTopComponentTokenAntd } from 'antd/es/back-top/style';
import { ComponentToken as FloatButtonComponentTokenAntd } from 'antd/es/float-button/style';
import { FloatButtonInternal } from './FloatButton';
import { FloatButtonGroup } from './FloatButtonGroup';
import { BackTop } from './BackTop';

//#region Define Ant Design types
type FloatButtonPropsAntd = GetProps<typeof FloatButton>;
type BackTopPropsAntd = GetProps<typeof FloatButton.BackTop>;
type FloatButtonGroupPropsAntd = GetProps<typeof FloatButton.Group>;

type FloatButtonRefAntd = FloatButtonRef;
//#endregion

//#region Define extended component tokens
type FloatButtonComponentTokenExtend = {};
type BackTopComponentTokenExtend = {};
//#endregion

//#region Define extended types
type FloatButtonPropsExtend = {};
type FloatButtonGroupPropsExtend = {};
type BackTopPropsExtend = {};
//#endregion

//#region Export types
export type RdFloatButtonProps = FloatButtonPropsAntd & FloatButtonPropsExtend;
export type RdFloatButtonGroupProps = FloatButtonGroupPropsAntd & FloatButtonGroupPropsExtend;
export type RdBackTopProps = BackTopPropsAntd & BackTopPropsExtend;

export type RdFloatButtonComponentToken = FloatButtonComponentTokenAntd &
    FloatButtonComponentTokenExtend;
export type RdBackTopComponentToken = BackTopComponentTokenAntd & BackTopComponentTokenExtend;

//#region Define component types
export type RdBackTopComponent = React.ForwardRefExoticComponent<
    RdBackTopProps & React.RefAttributes<FloatButtonRefAntd>
>;

export type RdFloatButtonCompoundedComponent = typeof FloatButtonInternal & {
    Group: typeof FloatButtonGroup;
    BackTop: typeof BackTop;
};
//#endregion
