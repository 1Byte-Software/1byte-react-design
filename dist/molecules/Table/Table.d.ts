import { TableProps } from 'antd';
import { AnyObject } from 'antd/es/_util/type';
export type TTableProps<RecordType = AnyObject> = TableProps<RecordType> & {};
export declare const Table: <RecordType extends AnyObject = AnyObject>({ ...antdProps }: TTableProps<RecordType>) => import("react/jsx-runtime").JSX.Element;
