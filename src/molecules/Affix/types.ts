import { Affix, GetProps } from 'antd';
import { ComponentToken as AffixComponentTokenAntd } from 'antd/es/affix/style';

//#region Define Ant Design types
type AffixProps = GetProps<typeof Affix>;
//#endregion

//#region Define extended component tokens
type AffixComponentTokenExtend = {};
//#endregion

//#region Define extended types
type AffixPropsExtend = {};
//#endregion

//#region Export types
export type RdAffixProps = AffixProps & AffixPropsExtend;

export type RdAffixComponentToken = AffixComponentTokenAntd & AffixComponentTokenExtend;
//#endregion
