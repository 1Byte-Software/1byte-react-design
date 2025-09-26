import { forwardRef } from 'react';
import { ProgressStyles } from './styles';
import { RdProgressComponent } from './types';

export const Progress: RdProgressComponent = forwardRef((props, ref) => {
    return <ProgressStyles ref={ref} {...props} />;
});
