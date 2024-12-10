import { Flex, GetProps } from 'antd';
import { ComponentToken } from 'antd/es/flex/style';

/**
 * @description Override FlexComponentToken of antd.
 */
export type FlexComponentToken = ComponentToken & {};

type FlexProps = GetProps<typeof Flex>;

export interface IFlexProps extends FlexProps {}
