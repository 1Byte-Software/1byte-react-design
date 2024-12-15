import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { DropdownButtonStyles } from './styles';
import { RdDropdownButtonProps } from './types';

export const DropdownButton = ({ ...antdProps }: RdDropdownButtonProps) => {
    return (
        <ConfigProviderDesign>
            <DropdownButtonStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
