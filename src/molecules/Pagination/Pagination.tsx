import { PaginationStyled } from './styles';
import { RdPaginationComponent } from './types';

export const Pagination: RdPaginationComponent = props => {
    return <PaginationStyled {...props} />;
};
