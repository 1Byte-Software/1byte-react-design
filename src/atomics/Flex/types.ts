import { Flex, GetProps } from 'antd';
import { ComponentToken as FlexComponentTokenAntd } from 'antd/es/flex/style';

//#region Define props
type FlexProps = GetProps<typeof Flex>;
//#endregion

//#region Custom component token
type FlexComponentTokenExtend = {};
//#endregion

//#region Custom props
type FlexPropsExtend = {};
//#endregion

//#region export type
export type RdFlexProps = FlexProps & FlexPropsExtend;

export type RdFlexComponentToken = FlexComponentTokenAntd & FlexComponentTokenExtend;
//#endregion
