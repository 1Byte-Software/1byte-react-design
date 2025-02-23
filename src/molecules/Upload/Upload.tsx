import { forwardRef } from 'react';
import { UploadStyled } from './styles';
import { RdUploadComponent } from './types';

export const Upload: RdUploadComponent = forwardRef((props, ref) => {
    return <UploadStyled ref={ref} {...props} />;
});