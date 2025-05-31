import clsx from 'clsx';
import { forwardRef } from 'react';
import { UPLOAD_ROOT_CLASS_NAME } from './constants';
import { UploadStyled } from './styles';
import { RdUploadComponent } from './types';

export const Upload: RdUploadComponent = forwardRef((props, ref) => {
    const { rootClassName, ...antProps } = props;

    return (
        <UploadStyled
            ref={ref}
            rootClassName={clsx(UPLOAD_ROOT_CLASS_NAME, rootClassName)}
            {...antProps}
        />
    );
});
