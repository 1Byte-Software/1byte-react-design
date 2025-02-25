import { forwardRef } from 'react';
import { CollapsePanelStyles } from './styles';
import { RdCollapsePanelComponent } from './types';

export const CollapsePanel: RdCollapsePanelComponent = forwardRef((props, ref) => {
    return <CollapsePanelStyles ref={ref} {...props} />;
});
