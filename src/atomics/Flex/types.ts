import { Flex, GetProps } from 'antd';
import { ComponentToken as FlexComponentTokenAntd } from 'antd/es/flex/style';

//#region Define Ant Design types
type FlexProps = GetProps<typeof Flex>;
//#endregion

//#region Define extended component tokens
type FlexComponentTokenExtend = {};
//#endregion

//#region Define extended types
type FlexPropsExtend = {};
//#endregion

//#region Export types
export type RdFlexProps = FlexProps & FlexPropsExtend;

export type RdFlexComponentToken = FlexComponentTokenAntd & FlexComponentTokenExtend;
//#endregion
