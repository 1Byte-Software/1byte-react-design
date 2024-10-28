import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { PopoverStyles } from './styles';
import { IPopoverProps } from './types';

export const Popover = ({ ...antdProps }: IPopoverProps) => {
    return (
        <ConfigProviderDesign>
            <PopoverStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
