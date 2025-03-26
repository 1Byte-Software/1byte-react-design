import { forwardRef } from 'react';
import { UploadDraggerStyled } from './styles';
import { RdUploadDraggerProps } from './types';

export const UploadDragger = forwardRef(
    (props: RdUploadDraggerProps, ref: RdUploadDraggerProps['ref']) => {
        const { ...antdProps } = props;

        return <UploadDraggerStyled ref={ref} {...antdProps} />;
    }
);
