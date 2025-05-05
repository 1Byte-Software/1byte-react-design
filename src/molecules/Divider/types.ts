import { Divider, GetProps } from 'antd';
import { ComponentToken as DividerComponentTokenAntd } from 'antd/es/divider/style';

//#region Define Ant Design types
type DividerPropsAntd = GetProps<typeof Divider>;
//#endregion

//#region Define extended component tokens
type DividerComponentTokenExtend = {};
//#endregion

//#region Define extended types
type DividerPropsExtend = {
    /**
     * If `true`, removes the default margin of the Divider.
     * @default false.
     */
    disableMargin?: boolean;
};
//#endregion

//#region Export types
export type RdDividerProps = DividerPropsAntd & DividerPropsExtend;

export type RdDividerComponentToken = DividerComponentTokenAntd & DividerComponentTokenExtend;
//#endregion

//#region Define component types
export type RdDividerComponent = React.FC<RdDividerProps>;
//#endregion
