import { TooltipRef } from 'antd/es/tooltip';
import { forwardRef } from 'react';
import { TooltipStyled } from './styles';
import { RdTooltipProps } from './types';

export const Tooltip = forwardRef<TooltipRef, RdTooltipProps>((props, ref) => {
    return <TooltipStyled ref={ref} {...props} />;
});
