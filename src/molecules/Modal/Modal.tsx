import { Modal as ModalAntd } from 'antd';
import { RdModalProps, RdModalType } from './types';
import { ModalStyles } from './styles';

export const ModalInternal = ({ ...antdProps }: RdModalProps) => {
    return <ModalStyles {...antdProps} />;
};

export const Modal = ModalInternal as RdModalType;

Modal.useModal = ModalAntd.useModal;
Modal.destroyAll = ModalAntd.destroyAll;
Modal.config = ModalAntd.config;
Modal._InternalPanelDoNotUseOrYouWillBeFired = ModalAntd._InternalPanelDoNotUseOrYouWillBeFired;

Modal.confirm = ModalAntd.confirm;
Modal.info = ModalAntd.info;
Modal.success = ModalAntd.success;
Modal.error = ModalAntd.error;
Modal.warning = ModalAntd.warning;
