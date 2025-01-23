import { Anchor, GetProps } from 'antd';
import { ComponentToken as AnchorComponentTokenAntd } from 'antd/es/anchor/style';

//#region Define Ant Design types
type AnchorProps = GetProps<typeof Anchor>;
//#endregion

//#region Define extended component tokens
type AnchorComponentTokenExtend = {};
//#endregion

//#region Define extended types
type AnchorPropsExtend = {};
//#endregion

//#region Export types
export type RdAnchorProps = AnchorProps & AnchorPropsExtend;

export type RdAnchorComponentToken = AnchorComponentTokenAntd & AnchorComponentTokenExtend;
//#endregion
