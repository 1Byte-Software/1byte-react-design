import { Progress, GetProps } from 'antd';
import { ComponentToken as ProgressComponentTokenAntd } from 'antd/es/progress/style';

//#region Define Ant Design types
type ProgressPropsAntd = GetProps<typeof Progress>;
//#endregion

//#region Define extended component tokens
type ProgressComponentTokenExtend = {};
//#endregion

//#region Define extended types
type ProgressPropsExtend = {};
//#endregion

//#region Export types
export type RdProgressProps = ProgressPropsAntd & ProgressPropsExtend;
export type RdProgressComponentToken = ProgressComponentTokenAntd & ProgressComponentTokenExtend;
//#endregion

//#region Define component types
export type RdProgressComponent = React.ForwardRefExoticComponent<RdProgressProps & React.RefAttributes<HTMLDivElement>>;
//#endregion
