import { forwardRef } from 'react';
import { PopoverStyles } from './styles';
import { RdPopoverComponent } from './types';

export const Popover: RdPopoverComponent = forwardRef(props => {
    return <PopoverStyles {...props} />;
});
