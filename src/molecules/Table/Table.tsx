import { AnyObject } from 'antd/es/_util/type';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TableStyled } from './styles';
import { RdTableProps } from './types';

export const Table = <RecordType extends AnyObject = AnyObject>({
    ...antdProps
}: RdTableProps<RecordType>) => {
    const StyledTable = TableStyled<RecordType>();

    return (
        <ConfigProviderDesign>
            <StyledTable {...antdProps} />
        </ConfigProviderDesign>
    );
};