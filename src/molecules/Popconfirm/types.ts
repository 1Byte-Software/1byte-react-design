import { GetProps, Popconfirm } from 'antd';
import { ComponentToken as PopconfirmComponentTokenAntd } from 'antd/es/popconfirm/style';
import { TooltipRef } from 'antd/es/tooltip';

//#region Define Ant Design types
type PopconfirmPropsAntd = GetProps<typeof Popconfirm>;

type TooltipRefAntd = TooltipRef;
//#endregion

//#region Define extended component tokens
type PopconfirmComponentTokenExtend = {};
//#endregion

//#region Define extended types
type PopconfirmPropsExtend = {};
//#endregion

//#region Export types
export type RdPopconfirmProps = PopconfirmPropsAntd & PopconfirmPropsExtend;
export type RdPopconfirmComponentToken = PopconfirmComponentTokenAntd &
    PopconfirmComponentTokenExtend;
//#endregion

//#region Define component types
export type RdPopconfirmComponent = React.ForwardRefExoticComponent<
    RdPopconfirmProps & React.RefAttributes<TooltipRefAntd>
>;
//#endregion
