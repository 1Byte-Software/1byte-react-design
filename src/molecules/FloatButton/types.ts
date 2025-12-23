import { FloatButton, FloatButtonRef, GetProps } from 'antd';
import { ComponentToken as BackTopComponentTokenAntd } from 'antd/es/back-top/style';
import { FloatButtonElement } from 'antd/es/float-button/FloatButton';
import { ComponentToken as FloatButtonComponentTokenAntd } from 'antd/es/float-button/style';
import { FloatButtonInternal } from './FloatButton';

//#region Define Ant Design types
type FloatButtonPropsAntd = GetProps<typeof FloatButton>;
type BackTopPropsAntd = GetProps<typeof FloatButton.BackTop>;
type FloatButtonGroupPropsAntd = GetProps<typeof FloatButton.Group>;

type FloatButtonRefAntd = FloatButtonRef;
type FloatButtonElementAtd = FloatButtonElement;
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
export type RdFloatButtonComponent = React.ForwardRefExoticComponent<
    RdFloatButtonProps & React.RefAttributes<FloatButtonElementAtd>
>;

export type RdFloatButtonGroupComponent = React.FC<Readonly<RdFloatButtonGroupProps>>;

export type RdBackTopComponent = React.ForwardRefExoticComponent<
    RdBackTopProps & React.RefAttributes<FloatButtonRefAntd>
>;

export type RdFloatButtonCompoundedComponent = typeof FloatButtonInternal & {
    Group: RdFloatButtonGroupComponent;
    BackTop: RdBackTopComponent;
};
//#endregion
