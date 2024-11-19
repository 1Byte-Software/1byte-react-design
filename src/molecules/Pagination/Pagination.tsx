import { Pagination as AntdPagination, PaginationProps } from 'antd';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { PaginationWrapper } from './styles';
import { RdPaginationProps } from './types';

export const Pagination = ({ ...antdProps }: RdPaginationProps) => {
    return (
        <ConfigProviderDesign>
            <PaginationWrapper>
                <AntdPagination {...(antdProps as PaginationProps)} />
            </PaginationWrapper>
        </ConfigProviderDesign>
    );
};
