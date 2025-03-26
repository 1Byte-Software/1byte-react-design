import { CloudUploadOutlined, LoadingOutlined } from '@ant-design/icons';
import { forwardRef } from 'react';
import { Tooltip } from '../Tooltip';
import { Upload } from '../Upload';
import { InputUploadStyled } from './styles';
import { RdInputUploadComponent } from './types';

export const InputUpload: RdInputUploadComponent = forwardRef((props, ref) => {
    const { loading, upload } = props;
    return (
        <InputUploadStyled
            ref={ref}
            prefix={loading && <LoadingOutlined />}
            // addonAfter={
            //     <Tooltip title={''}>
            //         <Upload showUploadList={false} {...upload}>
            //             <CloudUploadOutlined onClick={() => {}} />
            //         </Upload>
            //     </Tooltip>
            // }
            {...props}
        />
    );
});

<InputUpload loading />;
