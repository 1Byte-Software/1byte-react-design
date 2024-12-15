import { forwardRef } from 'react';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { UploadDraggerStyled } from './styles';
import { RdUploadDraggerProps } from './types';

export const UploadDragger = forwardRef(
    (props: RdUploadDraggerProps, ref: RdUploadDraggerProps['ref']) => {
        const { ...antdProps } = props;

        return (
            <ConfigProviderDesign>
                <UploadDraggerStyled ref={ref} {...antdProps} />
            </ConfigProviderDesign>
        );
    }
);
