import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { ModalStyles } from './styles';
import { IModalProps } from './types';

export const Modal = ({ ...antdProps }: IModalProps) => {
    return (
        <ConfigProviderDesign>
            <ModalStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
