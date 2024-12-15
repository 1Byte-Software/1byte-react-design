import { Avatar, GetProps } from 'antd';
import { ComponentToken as AvatarComponentTokenAntd } from 'antd/es/avatar/style';

//#region Define props
type AvatarProps = GetProps<typeof Avatar>;
//#endregion

//#region Custom component token
type AvatarComponentTokenExtend = {};
//#endregion

//#region Custom props
type AvatarPropsExtend = {};
//#endregion

//#region export type
export type RdAvatarProps = AvatarProps & AvatarPropsExtend;
export type RdAvatarComponentToken = AvatarComponentTokenAntd & AvatarComponentTokenExtend;
//#endregion
