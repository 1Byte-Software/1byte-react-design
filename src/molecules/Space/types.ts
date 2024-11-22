import { SpaceProps } from 'antd';

export type RdSpaceProps = SpaceProps & {
    /**
     * @description Option to fit Space width to its parent width, default is false
     */
    block?: boolean;
};
