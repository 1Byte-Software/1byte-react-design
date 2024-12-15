import { Modal, GetProps } from 'antd';
import { ComponentToken as ModalComponentTokenAntd } from 'antd/es/modal/style';

//#region Define props
type ModalProps = GetProps<typeof Modal>;
//#endregion

//#region Custom component token
type ModalComponentTokenExtend = {};
//#endregion

//#region Custom props
type ModalPropsExtend = {};
//#endregion

//#region export type
export type RdModalProps = ModalProps & ModalPropsExtend;

export type RdModalComponentToken = ModalComponentTokenAntd & ModalComponentTokenExtend;
//#endregion
