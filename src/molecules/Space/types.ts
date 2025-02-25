import { Space, GetProps } from 'antd';
import { ComponentToken as SpaceComponentTokenAntd } from 'antd/es/space/style';

//#region Define Ant Design types
type SpacePropsAntd = GetProps<typeof Space>;
type CompactPropsAntd = GetProps<typeof Space.Compact>;
//#endregion

//#region Define extended component tokens
type SpaceComponentTokenExtend = {};
//#endregion

//#region Define extended types
type SpacePropsExtend = {
    /**
     * @description Option to fit Space width to its parent width, default is false
     */
    block?: boolean;
};

type CompactPropsExtend = {};
//#endregion

//#region Export types
export type RdSpaceProps = SpacePropsAntd & SpacePropsExtend;
export type RdSpaceCompactProps = CompactPropsAntd & CompactPropsExtend;

export type RdSpaceComponentToken = SpaceComponentTokenAntd & SpaceComponentTokenExtend;
//#endregion

//#region Define component types
export type RdSpaceComponent = React.ForwardRefExoticComponent<
    RdSpaceProps & React.RefAttributes<HTMLDivElement>
>;

export type RdSpaceCompactComponent = React.FC<RdSpaceCompactProps>;

export type RdSpaceCompoundedComponent = RdSpaceComponent & {
    Compact: RdSpaceCompactComponent;
};
//#endregion
