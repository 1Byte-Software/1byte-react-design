import { useContext } from 'react';
import { ConfigProvider } from '../../organisms';
import { PaginationStyled } from './styles';
import { RdPaginationComponent } from './types';

export const Pagination: RdPaginationComponent = props => {
    const { pagination: defaultPaginationProps } = useContext(ConfigProvider.ConfigContext);
    const { pageSizeOptions } = defaultPaginationProps || {};

    return <PaginationStyled pageSizeOptions={pageSizeOptions} {...props} />;
};
