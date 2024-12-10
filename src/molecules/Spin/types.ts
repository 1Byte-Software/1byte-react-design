import { SpinProps } from 'antd';
import { ComponentToken } from 'antd/es/spin/style';

/**
 * @description Override SpinComponentToken of antd.
 */
export type SpinComponentToken = ComponentToken & {};

export interface RdSpinProps extends SpinProps {
    
}
