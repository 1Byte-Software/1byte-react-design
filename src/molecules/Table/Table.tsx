import { AnyObject } from 'antd/es/_util/type';
import { TableStyledFunc } from './styles';
import { RdTableProps } from './types';

export const Table = <RecordType extends AnyObject = AnyObject>({
    ...antdProps
}: RdTableProps<RecordType>) => {
    const TableStyled = TableStyledFunc<RecordType>();

    return <TableStyled {...antdProps} />;
};
