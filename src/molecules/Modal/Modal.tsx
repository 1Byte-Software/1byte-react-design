import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { ModalStyles } from './styles';
import { RdModalProps } from './types';

export const Modal = ({ ...antdProps }: RdModalProps) => {
    return (
        <ConfigProviderDesign>
            <ModalStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
