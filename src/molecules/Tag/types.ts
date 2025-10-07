import { GetProps, Tag } from 'antd';
import { ComponentToken as TagComponentTokenAntd } from 'antd/es/tag/style';
import { PropsWithChildren, ReactNode } from 'react';

//#region Define Ant Design types
type TagPropsAntd = GetProps<typeof Tag>;
type TagCheckablePropsAntd = GetProps<typeof Tag.CheckableTag>;
//#endregion

//#region Define extended component tokens
type TagComponentTokenExtend = {};
//#endregion

//#region Define extended types
type TagPropsExtend = {
    loading?: boolean;

    type?: 'default' | 'text';
};
type TagCheckablePropsExtend = {};
//#endregion

//#region Export types
export type RdTagProps = TagPropsAntd & TagPropsExtend;
export type RdTagCheckableProps = TagCheckablePropsAntd & TagCheckablePropsExtend;
export interface RdTagGroupProps extends PropsWithChildren {
    children: ReactNode;
    maxRows?: number; // Số hàng tối đa, default 1
    maxCount?: number; // Giới hạn số tag visible (bất kể wrap), optional
    overflowMode?: 'tooltip' | 'expand' | 'hidden'; // Mode xử lý overflow
}

export type RdTagComponentToken = TagComponentTokenAntd & TagComponentTokenExtend;
//#endregion

//#region Define component types
export type RdTagComponent = React.ForwardRefExoticComponent<
    RdTagProps & React.RefAttributes<HTMLSpanElement>
>;

export type RdTagGroupComponent = React.FC<RdTagGroupProps>;

export type RdTagCheckableComponent = React.ForwardRefExoticComponent<
    RdTagCheckableProps & React.RefAttributes<HTMLSpanElement>
>;

export type RdTagCompoundedComponent = RdTagComponent & {
    CheckableTag: RdTagCheckableComponent;
    Group: RdTagGroupComponent;
};
//#endregion
