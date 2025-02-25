import { GetProps, Table } from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import { ComponentToken as TableComponentTokenAntd } from 'antd/es/table/style';
import type { Reference } from 'rc-table';

//#region Define Ant Design types
type TablePropsAntd<RecordType = AnyObject> = GetProps<typeof Table<RecordType>>;
//#endregion

//#region Define extended component tokens
type TableComponentTokenExtend = {};
//#endregion

//#region Define extended types
type TablePropsExtend<RecordType = AnyObject> = {
    allowSort?: boolean;
    onChangeSort?: (dataSource: RecordType[]) => void;
};
//#endregion

//#region Export types
export type RdTableProps<RecordType = AnyObject> = TablePropsAntd<RecordType> &
    TablePropsExtend<RecordType>;
export type RdTableComponentToken = TableComponentTokenAntd & TableComponentTokenExtend;
//#endregion

//#region Define component types
export type RdTableComponent = <RecordType = AnyObject>(
    props: React.PropsWithChildren<RdTableProps<RecordType>> & React.RefAttributes<Reference>
) => React.ReactElement;
//#endregion
