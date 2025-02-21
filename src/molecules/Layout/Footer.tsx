import { forwardRef } from 'react';
import { FooterStyles } from './styles';
import { RdLayoutFooterComponent } from './types';

export const LayoutFooter: RdLayoutFooterComponent = forwardRef((props, ref) => {
    return <FooterStyles ref={ref} {...props} />;
});
