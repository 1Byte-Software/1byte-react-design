import { Anchor, GetProps } from 'antd';
import { ComponentToken as AnchorComponentTokenAntd } from 'antd/es/anchor/style';

//#region Define props
type AnchorProps = GetProps<typeof Anchor>;
//#endregion

//#region Custom component token
type AnchorComponentTokenExtend = {};
//#endregion

//#region Custom props
type AnchorPropsExtend = {};
//#endregion

//#region export type
export type RdAnchorProps = AnchorProps & AnchorPropsExtend;

export type RdAnchorComponentToken = AnchorComponentTokenAntd & AnchorComponentTokenExtend;
//#endregion
