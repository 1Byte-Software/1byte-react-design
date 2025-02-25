import { forwardRef } from 'react';
import { BackTopStyles } from './styles';
import { RdBackTopComponent } from './types';

export const BackTop: RdBackTopComponent = forwardRef((props, ref) => {
    return <BackTopStyles ref={ref} {...props} />;
});
