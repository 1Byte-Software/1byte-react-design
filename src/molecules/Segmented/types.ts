import { GetProps, Segmented } from 'antd';
import { ComponentToken as SegmentedComponentTokenAntd } from 'antd/es/affix/style';
import { InternalSegmented } from './Segmented';

//#region Define Ant Design types
type SegmentedPropsAntd<ValueType> = GetProps<typeof Segmented<ValueType>>;
//#endregion

//#region Define extended component tokens
type SegmentedComponentTokenExtend = {};
//#endregion

//#region Define extended types
type SegmentedPropsExtend = {};

type SegmentedRefExtend = {};
//#endregion

//#region Export types
export type RdSegmentedProps<ValueType> = SegmentedPropsAntd<ValueType> & SegmentedPropsExtend;

export type RdSegmentedComponentToken = SegmentedComponentTokenAntd & SegmentedComponentTokenExtend;
//#endregion

//#region Define component types
export type RdSegmentedComponent = (<ValueType>(
    props: RdSegmentedProps<ValueType> & React.RefAttributes<HTMLDivElement>
) => ReturnType<typeof InternalSegmented>) &
    Pick<React.FC, 'displayName'>;
//#endregion
