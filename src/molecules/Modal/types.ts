import { ModalProps } from 'antd';
import { ComponentToken } from 'antd/es/modal/style';

/**
 * @description Override ModalComponentToken of antd.
 */
export type ModalComponentToken = ComponentToken & {};

export interface RdModalProps extends ModalProps {}
