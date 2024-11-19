import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { DropdownStyles } from './styles';
import { RdDropdownProps } from './types';

export const Dropdown = ({ ...antdProps }: RdDropdownProps) => {
    return (
        <ConfigProviderDesign>
            <DropdownStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
