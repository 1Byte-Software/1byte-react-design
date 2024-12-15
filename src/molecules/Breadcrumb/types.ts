import { Breadcrumb, GetProps } from 'antd';
import { ComponentToken as BreadcrumbComponentTokenAntd } from 'antd/es/breadcrumb/style';

//#region Define props
type BreadcrumbProps = GetProps<typeof Breadcrumb>;
//#endregion

//#region Custom component token
type BreadcrumbComponentTokenExtend = {};
//#endregion

//#region Custom props
type BreadcrumbPropsExtend = {};
//#endregion

//#region export type
export type RdBreadcrumbProps = BreadcrumbProps & BreadcrumbPropsExtend;
export type RdBreadcrumbComponentToken = BreadcrumbComponentTokenAntd & BreadcrumbComponentTokenExtend;
//#endregion
