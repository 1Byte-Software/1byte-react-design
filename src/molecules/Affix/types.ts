import { Affix, GetProps } from 'antd';
import { ComponentToken as AffixComponentTokenAntd } from 'antd/es/affix/style';

//#region Define props
type AffixProps = GetProps<typeof Affix>;
//#endregion

//#region Custom component token
type AffixComponentTokenExtend = {};
//#endregion

//#region Custom props
type AffixPropsExtend = {};
//#endregion

//#region export type
export type RdAffixProps = AffixProps & AffixPropsExtend;

export type RdAffixComponentToken = AffixComponentTokenAntd & AffixComponentTokenExtend;
//#endregion
