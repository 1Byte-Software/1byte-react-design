import { Pagination, GetProps } from 'antd';
import { ComponentToken as PaginationComponentTokenAntd } from 'antd/es/pagination/style';

//#region Define props
type PaginationProps = GetProps<typeof Pagination>;
//#endregion

//#region Custom component token
type PaginationComponentTokenExtend = {};
//#endregion

//#region Custom props
type PaginationPropsExtend = {};
//#endregion

//#region export type
export type RdPaginationProps = PaginationProps & PaginationPropsExtend;
export type RdPaginationComponentToken = PaginationComponentTokenAntd &
    PaginationComponentTokenExtend;
//#endregion
