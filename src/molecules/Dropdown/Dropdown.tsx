import { DropdownButton } from './DropdownButton';
import { DropdownStyles } from './styles';
import { RdDropdownButtonComponent, RdDropdownCompoundedComponent } from './types';

export const DropdownInternal: RdDropdownButtonComponent = props => {
    return <DropdownStyles {...props} />;
};

export const Dropdown = DropdownInternal as RdDropdownCompoundedComponent;
Dropdown.Button = DropdownButton;
