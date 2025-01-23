import { forwardRef } from 'react';
import { RowStyles } from './styles';
import { RdRowComponent } from './types';

export const Row: RdRowComponent = forwardRef((props, ref) => {
    return <RowStyles ref={ref} {...props} />;
});
