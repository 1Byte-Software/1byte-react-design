import { SkeletonProps } from 'antd';
import { ComponentToken } from 'antd/es/skeleton/style';

/**
 * @description Override SkeletonComponentToken of antd.
 */
export type SkeletonComponentToken = ComponentToken & {};

export interface RdSkeletonProps extends SkeletonProps {
    
}
