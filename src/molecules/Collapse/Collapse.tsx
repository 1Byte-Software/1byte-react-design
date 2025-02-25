import { forwardRef } from 'react';
import { CollapseStyles } from './styles';
import { RdCollapseCompoundedComponent, RdCollapseComponent } from './types';
import { CollapsePanel } from './CollapsePanel';

export const CollapseInternal: RdCollapseComponent = forwardRef((props, ref) => {
    return <CollapseStyles ref={ref} {...props} />;
});

export const Collapse = CollapseInternal as RdCollapseCompoundedComponent;
Collapse.Panel = CollapsePanel;
