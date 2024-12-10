import { AvatarProps } from 'antd';
import { ComponentToken } from 'antd/es/avatar/style';

/**
 * @description Override AvatarComponentToken of antd.
 */
export type AvatarComponentToken = ComponentToken & {};

type AvatarPropsExtend = {};

export type RdAvatarProps = AvatarProps & AvatarPropsExtend;
