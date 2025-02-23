import { Avatar, GetProps } from 'antd';
import { ComponentToken as AvatarComponentTokenAntd } from 'antd/es/avatar/style';
import { AvatarGroup } from './AvatarGroup';

//#region Define Ant Design types
type AvatarPropsAntd = GetProps<typeof Avatar>;
type AvatarGroupPropsAntd = GetProps<typeof Avatar.Group>;
//#endregion

//#region Define extended component tokens
type AvatarComponentTokenExtend = {};
//#endregion

//#region Define extended types
type AvatarPropsExtend = {};
type AvatarGroupPropsExtend = {};
//#endregion

//#region Export types
export type RdAvatarProps = AvatarPropsAntd & AvatarPropsExtend;
export type RdAvatarGroupProps = AvatarGroupPropsAntd & AvatarGroupPropsExtend;

export type RdAvatarComponentToken = AvatarComponentTokenAntd & AvatarComponentTokenExtend;
//#endregion

//#region Define component types
export type RdAvatarComponent = React.ForwardRefExoticComponent<
    RdAvatarProps & React.RefAttributes<HTMLSpanElement>
>;
export type RdAvatarGroupComponent = React.FC<RdAvatarGroupProps>;

export type RdAvatarCompoundedComponent = RdAvatarComponent & {
    Group: RdAvatarGroupComponent;
};
//#endregion
