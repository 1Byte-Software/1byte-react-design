import { forwardRef } from 'react';
import { ContentStyles } from './styles';
import { RdLayoutContentComponent } from './types';

export const LayoutContent: RdLayoutContentComponent = forwardRef((props, ref) => {
    return <ContentStyles ref={ref} {...props} />;
});
