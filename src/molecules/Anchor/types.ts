import { Anchor, GetProps } from 'antd';
import { ComponentToken as AnchorComponentTokenAntd } from 'antd/es/anchor/style';
import { AnchorInternal } from './Anchor';
import { AnchorLink } from './AnchorLink';

//#region Define Ant Design types
type AnchorPropsAntd = GetProps<typeof Anchor>;
type AnchorLinkPropsAntd = GetProps<typeof Anchor.Link>;
//#endregion

//#region Define extended component tokens
type AnchorComponentTokenExtend = {};
//#endregion

//#region Define extended types
type AnchorPropsExtend = {};
type AnchorLinkPropsExtend = {};
//#endregion

//#region Export types
export type RdAnchorProps = AnchorPropsAntd & AnchorPropsExtend;
export type RdAnchorLinkProps = AnchorLinkPropsAntd & AnchorLinkPropsExtend;

export type RdAnchorComponentToken = AnchorComponentTokenAntd & AnchorComponentTokenExtend;
//#endregion

//#region Define component types
export type RdAnchorComponent = React.FC<RdAnchorProps>;
export type RdAnchorLinkComponent = React.FC<RdAnchorLinkProps>;

export type RdAnchorCompoundedComponent = RdAnchorComponent & {
    Link: RdAnchorLinkComponent;
};
//#endregion
