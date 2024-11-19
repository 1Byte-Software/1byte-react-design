import { TooltipRef } from 'antd/es/tooltip';
import React from 'react';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TooltipStyles } from './styles';
import { RdTooltipProps } from './types';

export const Tooltip = React.forwardRef<TooltipRef, RdTooltipProps>(
    ({ children, ...antdProps }, ref) => {
        return (
            <ConfigProviderDesign>
                <TooltipStyles {...antdProps} ref={ref}>
                    <React.Fragment>{children}</React.Fragment>
                </TooltipStyles>
            </ConfigProviderDesign>
        );
    }
);
