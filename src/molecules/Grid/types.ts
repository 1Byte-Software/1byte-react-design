import { Col, GetProps, Row } from 'antd';
import { ComponentToken as GridComponentTokenAntd } from 'antd/es/grid/style';

//#region Define props
type ColProps = GetProps<typeof Col>;
type RowProps = GetProps<typeof Row>;
//#endregion

//#region Custom component token
type GridComponentTokenExtend = {};
//#endregion

//#region Custom props
type ColPropsExtend = {};
type RowPropsExtend = {};
//#endregion

//#region export type
export type RdColProps = ColProps & ColPropsExtend;
export type RdRowProps = RowProps & RowPropsExtend;

export type RdGridComponentToken = GridComponentTokenAntd & GridComponentTokenExtend;
//#endregion
