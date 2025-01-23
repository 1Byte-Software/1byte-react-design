import { Space, GetProps } from 'antd';
import { ComponentToken as SpaceComponentTokenAntd } from 'antd/es/space/style';

//#region Define Ant Design types
type SpaceProps = GetProps<typeof Space>;
type CompactProps = GetProps<typeof Space.Compact>;
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
export type RdSpaceProps = SpaceProps & SpacePropsExtend;
export type RdCompactProps = CompactProps & CompactPropsExtend;

export type RdSpaceComponentToken = SpaceComponentTokenAntd & SpaceComponentTokenExtend;
//#endregion
