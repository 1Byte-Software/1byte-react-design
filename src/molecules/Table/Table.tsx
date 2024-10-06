import { ConfigProviderDesign } from '@/ConfigProviderDesign';
import { Table as AntdTable, TableProps } from 'antd';
import { TableWrapper } from './styles';
import { AnyObject } from 'antd/es/_util/type';

export type TTableProps<RecordType = AnyObject> = TableProps<RecordType> & {};

export const Table = <RecordType extends AnyObject = AnyObject>({
    ...antdProps
}: TTableProps<RecordType>) => {
    return (
        <ConfigProviderDesign>
            <TableWrapper>
                <AntdTable<RecordType> {...antdProps} />
            </TableWrapper>
        </ConfigProviderDesign>
    );
};
