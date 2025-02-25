import { Tag, GetProps } from 'antd';
import { ComponentToken as TagComponentTokenAntd } from 'antd/es/tag/style';

//#region Define Ant Design types
type TagPropsAntd = GetProps<typeof Tag>;
type TagCheckablePropsAntd = GetProps<typeof Tag.CheckableTag>;
//#endregion

//#region Define extended component tokens
type TagComponentTokenExtend = {};
//#endregion

//#region Define extended types
type TagPropsExtend = {};
type TagCheckablePropsExtend = {};
//#endregion

//#region Export types
export type RdTagProps = TagPropsAntd & TagPropsExtend;
export type RdTagCheckableProps = TagCheckablePropsAntd & TagCheckablePropsExtend;

export type RdTagComponentToken = TagComponentTokenAntd & TagComponentTokenExtend;
//#endregion

//#region Define component types
export type RdTagComponent = React.ForwardRefExoticComponent<
    RdTagProps & React.RefAttributes<HTMLSpanElement>
>;
export type RdTagCheckableComponent = React.ForwardRefExoticComponent<
    RdTagCheckableProps & React.RefAttributes<HTMLSpanElement>
>;

export type RdTagCompoundedComponent = RdTagComponent & {
    CheckableTag: RdTagCheckableComponent;
};
//#endregion
