import { GetProps, Steps } from 'antd';
import { ComponentToken as StepsComponentTokenAntd } from 'antd/es/collapse/style';

//#region Define Ant Design types
type StepsPropsAntd = GetProps<typeof Steps>;

//#endregion

//#region Define extended component tokens
type StepsComponentTokenExtend = {};
//#endregion

//#region Define extended types
type StepsPropsExtend = {};
//#endregion

//#region Export types
export type RdStepsProps = StepsPropsAntd & StepsPropsExtend;

export type RdStepsComponentToken = StepsComponentTokenAntd & StepsComponentTokenExtend;
//#endregion

//#region Define component types
export type RdStepsComponent = React.FC<RdStepsProps>;
//#endregion
