import { DropdownButtonStyles } from './styles';
import { RdDropdownButtonProps } from './types';

export const DropdownButton = ({ ...antdProps }: RdDropdownButtonProps) => {
    return <DropdownButtonStyles {...antdProps} />;
};
