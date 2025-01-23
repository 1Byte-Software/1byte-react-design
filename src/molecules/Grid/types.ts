import { Col, GetProps, Row } from 'antd';
import { ComponentToken as GridComponentTokenAntd } from 'antd/es/grid/style';

//#region Define Ant Design types
type ColPropsAntd = GetProps<typeof Col>;
type RowPropsAntd = GetProps<typeof Row>;
//#endregion

//#region Define extended component tokens
type GridComponentTokenExtend = {};
//#endregion

//#region Define extended types
type ColPropsExtend = {};
type RowPropsExtend = {};
//#endregion

//#region Export types
export type RdColProps = ColPropsAntd & ColPropsExtend;
export type RdRowProps = RowPropsAntd & RowPropsExtend;

export type RdGridComponentToken = GridComponentTokenAntd & GridComponentTokenExtend;

export type RdColComponent = React.ForwardRefExoticComponent<
    RdColProps & React.RefAttributes<HTMLDivElement>
>;
export type RdRowComponent = React.ForwardRefExoticComponent<
    RdRowProps & React.RefAttributes<HTMLDivElement>
>;
//#endregion
