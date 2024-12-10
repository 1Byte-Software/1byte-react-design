import { PaginationProps } from 'antd';
import { ComponentToken } from 'antd/es/pagination/style';

/**
 * @description Override PaginationComponentToken of antd.
 */
export type PaginationComponentToken = ComponentToken & {};

export interface RdPaginationProps extends PaginationProps {}
