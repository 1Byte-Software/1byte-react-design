import { Skeleton, GetProps } from 'antd';
import { ComponentToken as SkeletonComponentTokenAntd } from 'antd/es/skeleton/style';

//#region Define Ant Design types
type SkeletonProps = GetProps<typeof Skeleton>;
//#endregion

//#region Define extended component tokens
type SkeletonComponentTokenExtend = {};
//#endregion

//#region Define extended types
type SkeletonPropsExtend = {};
//#endregion

//#region Export types
export type RdSkeletonProps = SkeletonProps & SkeletonPropsExtend;
export type RdSkeletonComponentToken = SkeletonComponentTokenAntd & SkeletonComponentTokenExtend;
//#endregion
