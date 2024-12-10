import { TableProps } from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import { ComponentToken } from 'antd/es/table/style';

/**
 * @description Override TableComponentToken of antd.
 */
export type TableComponentToken = ComponentToken & {};

export type RdTableProps<RecordType = AnyObject> = TableProps<RecordType> & {};
