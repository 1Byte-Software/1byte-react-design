import { TableProps } from 'antd';
import { AnyObject } from 'antd/es/_util/type';

export type RdTableProps<RecordType = AnyObject> = TableProps<RecordType> & {};
