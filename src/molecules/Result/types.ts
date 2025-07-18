import { Result, GetProps } from 'antd';
import { ComponentToken as ResultComponentTokenAntd } from 'antd/es/drawer/style';

//#region Define Ant Design types
type ResultPropsAntd = GetProps<typeof Result>;
//#endregion

//#region Define extended component tokens
type ResultComponentTokenExtend = {};
//#endregion

//#region Define extended types
type ResultPropsExtend = {};
//#endregion

//#region Export types
export type RdResultProps = ResultPropsAntd & ResultPropsExtend;
export type RdResultComponentToken = ResultComponentTokenAntd & ResultComponentTokenExtend;
//#endregion

//#region Define component types
export type RdResultComponent = React.FC<RdResultProps>;
//#endregion
