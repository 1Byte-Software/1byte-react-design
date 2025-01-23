import { Table, GetProps } from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import { ComponentToken as TableComponentTokenAntd } from 'antd/es/table/style';

//#region Define Ant Design types
type TableProps<RecordType = AnyObject> = GetProps<typeof Table<RecordType>>;
//#endregion

//#region Define extended component tokens
type TableComponentTokenExtend = {};
//#endregion

//#region Define extended types
type TablePropsExtend = {};
//#endregion

//#region Export types
export type RdTableProps<RecordType = AnyObject> = TableProps<RecordType> & TablePropsExtend;
export type RdTableComponentToken = TableComponentTokenAntd & TableComponentTokenExtend;
//#endregion
