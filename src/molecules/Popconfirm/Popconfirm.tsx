import { forwardRef } from 'react';
import { PopconfirmStyles } from './styles';
import { RdPopconfirmComponent } from './types';

export const Popconfirm: RdPopconfirmComponent = forwardRef((props, ref) => {
    return <PopconfirmStyles ref={ref} {...props} />;
});
