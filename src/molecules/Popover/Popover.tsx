import { forwardRef } from 'react';
import { PopoverStyles } from './styles';
import { RdPopoverComponent } from './types';

export const Popover: RdPopoverComponent = forwardRef((props, ref) => {
    return <PopoverStyles ref={ref} {...props} />;
});
