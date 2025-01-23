import { forwardRef } from 'react';
import { CollapseStyles } from './styles';
import { RdCollapseCompoundedComponent, RdCollapseInternalComponent } from './types';
import { CollapsePanel } from './CollapsePanel';

export const CollapseInternal: RdCollapseInternalComponent = forwardRef((props, ref) => {
    return <CollapseStyles ref={ref} {...props} />;
});

export const Collapse = CollapseInternal as RdCollapseCompoundedComponent;

Collapse.Panel = CollapsePanel;
