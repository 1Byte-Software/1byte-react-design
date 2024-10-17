import { Pagination as AntdPagination, PaginationProps } from 'antd';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { PaginationWrapper } from './styles';
import { IPaginationProps } from './types';

export const Pagination = ({ ...antdProps }: IPaginationProps) => {
    return (
        <ConfigProviderDesign>
            <PaginationWrapper>
                <AntdPagination {...(antdProps as PaginationProps)} />
            </PaginationWrapper>
        </ConfigProviderDesign>
    );
};
