import { UploadProps } from 'antd';
import { forwardRef } from 'react';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { UploadStyled } from './styles';
import { RdUploadProps } from './types';

export const Upload = forwardRef((props: RdUploadProps, ref: RdUploadProps['ref']) => {
    const { ...antdProps } = props;
    return (
        <ConfigProviderDesign>
            <UploadStyled ref={ref} {...(antdProps as UploadProps)} />
        </ConfigProviderDesign>
    );
});
