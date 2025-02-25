import { Breadcrumb, GetProps } from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import { ComponentToken as BreadcrumbComponentTokenAntd } from 'antd/es/breadcrumb/style';
import React from 'react';

//#region Define Ant Design types
type BreadcrumbPropsAntd<T extends AnyObject = AnyObject> = GetProps<typeof Breadcrumb<T>>;
type BreadcrumbItemPropsAntd = GetProps<typeof Breadcrumb.Item>;
type BreadcrumbSeparatorPropsAntd = GetProps<typeof Breadcrumb.Separator>;
//#endregion

//#region Define extended component tokens
type BreadcrumbComponentTokenExtend = {};
//#endregion

//#region Define extended types
type BreadcrumbPropsExtend = {};
type BreadcrumbItemPropsExtend = {};
type BreadcrumbSeparatorPropsExtend = {};
//#endregion

//#region Export types
export type RdBreadcrumbProps<T extends AnyObject = AnyObject> = BreadcrumbPropsAntd<T> &
    BreadcrumbPropsExtend;
export type RdBreadcrumbItemProps = BreadcrumbItemPropsAntd & BreadcrumbItemPropsExtend;
export type RdBreadcrumbSeparatorProps = BreadcrumbSeparatorPropsAntd &
    BreadcrumbSeparatorPropsExtend;

export type RdBreadcrumbComponentToken = BreadcrumbComponentTokenAntd &
    BreadcrumbComponentTokenExtend;
//#endregion

//#region Define component types
export type RdBreadcrumbComponent = <T extends AnyObject = AnyObject>(
    props: RdBreadcrumbProps<T>
) => React.ReactElement<unknown, string | React.JSXElementConstructor<any>>;

export type RdBreadcrumbItemComponent = React.FC<RdBreadcrumbItemProps>;

export type RdBreadcrumbSeparatorComponent = React.FC<{
    children?: React.ReactNode;
}>;

export type RdBreadcrumbCompoundedComponent = RdBreadcrumbComponent & {
    Item: RdBreadcrumbItemComponent;
    Separator: RdBreadcrumbSeparatorComponent;
};
//#endregion
