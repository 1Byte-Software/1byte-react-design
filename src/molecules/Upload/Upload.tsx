import clsx from 'clsx';
import { forwardRef } from 'react';
import { UPLOAD_ROOT_CLASS_NAME } from './constants';
import { UploadStyled } from './styles';
import { RdUploadComponent, RdUploadCompoundedComponent } from './types';
import { UploadDragger } from './UploadDragger';

export const UploadInternal: RdUploadComponent = forwardRef((props, ref) => {
    const { rootClassName, ...antProps } = props;

    return (
        <UploadStyled
            ref={ref}
            rootClassName={clsx(UPLOAD_ROOT_CLASS_NAME, rootClassName)}
            {...antProps}
        />
    );
});

export const Upload = UploadInternal as RdUploadCompoundedComponent;

Upload.Dragger = UploadDragger;
