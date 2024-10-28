import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { DropdownStyles } from './styles';
import { IDropdownProps } from './types';

export const Dropdown = ({ ...antdProps }: IDropdownProps) => {
    return (
        <ConfigProviderDesign>
            <DropdownStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
