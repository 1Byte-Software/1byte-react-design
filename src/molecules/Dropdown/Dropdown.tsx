import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { DropdownButton } from './DropdownButton';
import { DropdownStyles } from './styles';
import { RdDropdownProps } from './types';

export const Dropdown = ({ ...antdProps }: RdDropdownProps) => {
    return (
        <ConfigProviderDesign>
            <DropdownStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

Dropdown.Button = DropdownButton;