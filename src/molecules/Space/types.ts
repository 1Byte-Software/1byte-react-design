import { Space, GetProps } from 'antd';
import { ComponentToken as SpaceComponentTokenAntd } from 'antd/es/space/style';

//#region Define props
type SpaceProps = GetProps<typeof Space>;
type CompactProps = GetProps<typeof Space.Compact>;
//#endregion

//#region Custom component token
type SpaceComponentTokenExtend = {};
//#endregion

//#region Custom props
type SpacePropsExtend = {
    /**
     * @description Option to fit Space width to its parent width, default is false
     */
    block?: boolean;
};

type CompactPropsExtend = {};
//#endregion

//#region export type
export type RdSpaceProps = SpaceProps & SpacePropsExtend;
export type RdCompactProps = CompactProps & CompactPropsExtend;

export type RdSpaceComponentToken = SpaceComponentTokenAntd & SpaceComponentTokenExtend;
//#endregion
