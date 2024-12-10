import { BreadcrumbProps } from 'antd';
import { ComponentToken } from 'antd/es/breadcrumb/style';

/**
 * @description Override BreadcrumbComponentToken of antd.
 */
export type BreadcrumbComponentToken = ComponentToken & {};

type RdBreadcrumbPropsExtend = {};

export type RdBreadcrumbProps = BreadcrumbProps & RdBreadcrumbPropsExtend;
