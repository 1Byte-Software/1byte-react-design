import { Avatar, GetProps } from 'antd';
import { ComponentToken as AvatarComponentTokenAntd } from 'antd/es/avatar/style';

//#region Define Ant Design types
type AvatarProps = GetProps<typeof Avatar>;
//#endregion

//#region Define extended component tokens
type AvatarComponentTokenExtend = {};
//#endregion

//#region Define extended types
type AvatarPropsExtend = {};
//#endregion

//#region Export types
export type RdAvatarProps = AvatarProps & AvatarPropsExtend;
export type RdAvatarComponentToken = AvatarComponentTokenAntd & AvatarComponentTokenExtend;
//#endregion
