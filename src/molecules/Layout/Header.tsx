import { forwardRef } from 'react';
import { HeaderStyles } from './styles';
import { RdLayoutHeaderComponent } from './types';

export const LayoutHeader: RdLayoutHeaderComponent = forwardRef(props => {
    return <HeaderStyles {...props} />;
});
