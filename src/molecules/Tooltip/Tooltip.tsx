import { TooltipRef } from 'antd/es/tooltip';
import { forwardRef } from 'react';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TooltipStyles } from './styles';
import { RdTooltipProps } from './types';

export const Tooltip = forwardRef<TooltipRef, RdTooltipProps>(({ children, ...antdProps }, ref) => {
    return (
        <ConfigProviderDesign>
            <TooltipStyles ref={ref} {...antdProps}>
                {children}
            </TooltipStyles>
        </ConfigProviderDesign>
    );
});
