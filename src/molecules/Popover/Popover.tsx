import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { PopoverStyles } from './styles';
import { RdPopoverProps } from './types';

export const Popover = ({ ...antdProps }: RdPopoverProps) => {
    return (
        <ConfigProviderDesign>
            <PopoverStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
