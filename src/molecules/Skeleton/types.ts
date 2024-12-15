import { Skeleton, GetProps } from 'antd';
import { ComponentToken as SkeletonComponentTokenAntd } from 'antd/es/skeleton/style';

//#region Define props
type SkeletonProps = GetProps<typeof Skeleton>;
//#endregion

//#region Custom component token
type SkeletonComponentTokenExtend = {};
//#endregion

//#region Custom props
type SkeletonPropsExtend = {};
//#endregion

//#region export type
export type RdSkeletonProps = SkeletonProps & SkeletonPropsExtend;
export type RdSkeletonComponentToken = SkeletonComponentTokenAntd & SkeletonComponentTokenExtend;
//#endregion
