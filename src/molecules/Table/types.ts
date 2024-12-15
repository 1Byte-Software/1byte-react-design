import { Table, GetProps } from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import { ComponentToken as TableComponentTokenAntd } from 'antd/es/table/style';

//#region Define props
type TableProps<RecordType = AnyObject> = GetProps<typeof Table<RecordType>>;
//#endregion

//#region Custom component token
type TableComponentTokenExtend = {};
//#endregion

//#region Custom props
type TablePropsExtend = {};
//#endregion

//#region export type
export type RdTableProps<RecordType = AnyObject> = TableProps<RecordType> & TablePropsExtend;
export type RdTableComponentToken = TableComponentTokenAntd & TableComponentTokenExtend;
//#endregion
