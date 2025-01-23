import { GetProps, Modal as ModalAntd } from 'antd';
import { ModalStaticFunctions } from 'antd/es/modal/confirm';
import { ComponentToken as ModalComponentTokenAntd } from 'antd/es/modal/style';
import { ModalInternal } from './Modal';

//#region Define Ant Design types
type ModalProps = GetProps<typeof ModalAntd>;
type useModal = (typeof ModalAntd)['useModal'];
type destroyAll = (typeof ModalAntd)['destroyAll'];
type config = (typeof ModalAntd)['config'];
type _InternalPanelDoNotUseOrYouWillBeFired =
    (typeof ModalAntd)['_InternalPanelDoNotUseOrYouWillBeFired'];
//#endregion

//#region Define extended component tokens
type ModalComponentTokenExtend = {};
//#endregion

//#region Define extended types
type ModalPropsExtend = {};
//#endregion

//#region Export types
export type RdModalProps = ModalProps & ModalPropsExtend;

export type RdModalComponentToken = ModalComponentTokenAntd & ModalComponentTokenExtend;
//#endregion

export type RdModalType = typeof ModalInternal &
    ModalStaticFunctions & {
        useModal: useModal;
        destroyAll: destroyAll;
        config: config;
        /** @private Internal Component. Do not use in your production. */
        _InternalPanelDoNotUseOrYouWillBeFired: _InternalPanelDoNotUseOrYouWillBeFired;
    };
