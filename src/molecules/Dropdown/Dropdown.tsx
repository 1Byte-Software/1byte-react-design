import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { Button } from './Button';
import { DropdownStyles } from './styles';
import { RdDropdownProps } from './types';

export const Dropdown = ({ ...antdProps }: RdDropdownProps) => {
    return (
        <ConfigProviderDesign>
            <DropdownStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

Dropdown.Button = Button;