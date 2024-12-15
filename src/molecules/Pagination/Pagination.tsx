import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { PaginationStyled } from './styles';
import { RdPaginationProps } from './types';

export const Pagination = ({ ...antdProps }: RdPaginationProps) => {
    return (
        <ConfigProviderDesign>
            <PaginationStyled {...antdProps} />
        </ConfigProviderDesign>
    );
};
