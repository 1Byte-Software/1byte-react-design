import { Pagination, GetProps } from 'antd';
import { ComponentToken as PaginationComponentTokenAntd } from 'antd/es/pagination/style';

//#region Define Ant Design types
type PaginationProps = GetProps<typeof Pagination>;
//#endregion

//#region Define extended component tokens
type PaginationComponentTokenExtend = {};
//#endregion

//#region Define extended types
type PaginationPropsExtend = {};
//#endregion

//#region Export types
export type RdPaginationProps = PaginationProps & PaginationPropsExtend;
export type RdPaginationComponentToken = PaginationComponentTokenAntd &
    PaginationComponentTokenExtend;
//#endregion
