import { Table as AntdTable, TableProps } from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TableWrapper } from './styles';

export type TTableProps<RecordType = AnyObject> = TableProps<RecordType> & {};

export const Table = <RecordType extends AnyObject = AnyObject>({
    ...antdProps
}: TTableProps<RecordType>) => {
    return (
        <ConfigProviderDesign>
            <TableWrapper>
                <AntdTable<RecordType> {...(antdProps as TableProps<RecordType>)} />
            </TableWrapper>
        </ConfigProviderDesign>
    );
};
