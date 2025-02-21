import { Affix, AffixRef, GetProps } from 'antd';
import { ComponentToken as AffixComponentTokenAntd } from 'antd/es/affix/style';

//#region Define Ant Design types
type AffixPropsAntd = GetProps<typeof Affix>;

type AffixRefAntd = AffixRef;
//#endregion

//#region Define extended component tokens
type AffixComponentTokenExtend = {};
//#endregion

//#region Define extended types
type AffixPropsExtend = {};

type AffixRefExtend = {};
//#endregion

//#region Export types
export type RdAffixProps = AffixPropsAntd & AffixPropsExtend;

export type RdAffixRef = AffixRefAntd & AffixRefExtend;

export type RdAffixComponentToken = AffixComponentTokenAntd & AffixComponentTokenExtend;
//#endregion

//#region Define component types
export type RdAffixComponent = React.ForwardRefExoticComponent<
    RdAffixProps & React.RefAttributes<RdAffixRef>
>;
//#endregion
