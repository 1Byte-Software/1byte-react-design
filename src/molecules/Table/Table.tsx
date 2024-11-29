import { Table as AntdTable, TableProps } from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TableWrapper } from './styles';
import { RdTableProps } from './types';

export const Table = <RecordType extends AnyObject = AnyObject>({
    ...antdProps
}: RdTableProps<RecordType>) => {
    return (
        <ConfigProviderDesign>
            <TableWrapper>
                <AntdTable<RecordType> {...(antdProps as TableProps<RecordType>)} />
            </TableWrapper>
        </ConfigProviderDesign>
    );
};
