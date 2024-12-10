import { SpaceProps } from 'antd';
import { ComponentToken } from 'antd/es/space/style';

/**
 * @description Override SpaceComponentToken of antd.
 */
export type SpaceComponentToken = ComponentToken & {};

export type RdSpaceProps = SpaceProps & {
    /**
     * @description Option to fit Space width to its parent width, default is false
     */
    block?: boolean;
};
