import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { Pagination as AntdPagination, PaginationProps } from 'antd';
import { PaginationWrapper } from './styles';

export interface IPaginationProps extends PaginationProps {}

export const Pagination = ({ ...antdProps }: IPaginationProps) => {
    return (
        <ConfigProviderDesign>
            <PaginationWrapper>
                <AntdPagination {...(antdProps as PaginationProps)} />
            </PaginationWrapper>
        </ConfigProviderDesign>
    );
};
