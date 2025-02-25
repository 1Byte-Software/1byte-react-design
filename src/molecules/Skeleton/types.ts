import { Skeleton, GetProps } from 'antd';
import { ComponentToken as SkeletonComponentTokenAntd } from 'antd/es/skeleton/style';

//#region Define Ant Design types
type SkeletonPropsAntd = GetProps<typeof Skeleton>;
type SkeletonButtonPropsAntd = GetProps<typeof Skeleton.Button>;
type SkeletonAvatarPropsAntd = GetProps<typeof Skeleton.Avatar>;
type SkeletonInputPropsAntd = GetProps<typeof Skeleton.Input>;
type SkeletonImagePropsAntd = GetProps<typeof Skeleton.Image>;
type SkeletonNodePropsAntd = GetProps<typeof Skeleton.Node>;
//#endregion

//#region Define extended component tokens
type SkeletonComponentTokenExtend = {};
//#endregion

//#region Define extended types
type SkeletonPropsExtend = {};
type SkeletonButtonPropsExtend = {};
type SkeletonAvatarPropsExtend = {};
type SkeletonInputPropsExtend = {};
type SkeletonImagePropsExtend = {};
type SkeletonNodePropsExtend = {};
//#endregion

//#region Export types
export type RdSkeletonProps = SkeletonPropsAntd & SkeletonPropsExtend;
export type RdSkeletonButtonProps = SkeletonButtonPropsAntd & SkeletonButtonPropsExtend;
export type RdSkeletonAvatarProps = SkeletonAvatarPropsAntd & SkeletonAvatarPropsExtend;
export type RdSkeletonInputProps = SkeletonInputPropsAntd & SkeletonInputPropsExtend;
export type RdSkeletonImageProps = SkeletonImagePropsAntd & SkeletonImagePropsExtend;
export type RdSkeletonNodeProps = SkeletonNodePropsAntd & SkeletonNodePropsExtend;

export type RdSkeletonComponentToken = SkeletonComponentTokenAntd & SkeletonComponentTokenExtend;
//#endregion

//#region Define component types
export type RdSkeletonComponent = React.FC<RdSkeletonProps>;
export type RdSkeletonButtonComponent = React.FC<RdSkeletonButtonProps>;
export type RdSkeletonAvatarComponent = React.FC<RdSkeletonAvatarProps>;
export type RdSkeletonInputComponent = React.FC<RdSkeletonInputProps>;
export type RdSkeletonImageComponent = React.FC<RdSkeletonImageProps>;
export type RdSkeletonNodeComponent = React.FC<RdSkeletonNodeProps>;

export type RdSkeletonCompoundedComponent = RdSkeletonComponent & {
    Button: RdSkeletonButtonComponent;
    Avatar: RdSkeletonAvatarComponent;
    Input: RdSkeletonInputComponent;
    Image: RdSkeletonImageComponent;
    Node: RdSkeletonNodeComponent;
};
//#endregion
