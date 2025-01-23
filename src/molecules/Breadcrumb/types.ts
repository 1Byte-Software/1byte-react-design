import { Breadcrumb, GetProps } from 'antd';
import { ComponentToken as BreadcrumbComponentTokenAntd } from 'antd/es/breadcrumb/style';

//#region Define Ant Design types
type BreadcrumbProps = GetProps<typeof Breadcrumb>;
//#endregion

//#region Define extended component tokens
type BreadcrumbComponentTokenExtend = {};
//#endregion

//#region Define extended types
type BreadcrumbPropsExtend = {};
//#endregion

//#region Export types
export type RdBreadcrumbProps = BreadcrumbProps & BreadcrumbPropsExtend;
export type RdBreadcrumbComponentToken = BreadcrumbComponentTokenAntd & BreadcrumbComponentTokenExtend;
//#endregion
