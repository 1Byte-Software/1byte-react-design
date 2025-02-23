import { forwardRef } from 'react';
import { ColStyles } from './styles';
import { RdColComponent } from './types';

export const Col: RdColComponent = forwardRef((props, ref) => {
    return <ColStyles ref={ref} {...props} />;
});
