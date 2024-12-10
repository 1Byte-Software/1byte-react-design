import { GetProps, Upload } from 'antd';
import { ComponentToken } from 'antd/es/upload/style';

/**
 * @description Override UploadComponentToken of antd.
 */
export type UploadComponentToken = ComponentToken & {};

type UploadProps = GetProps<typeof Upload>;
type UploadDraggerProps = GetProps<typeof Upload.Dragger>;

export type RdUploadProps = UploadProps & {};
export type RdUploadDraggerProps = UploadDraggerProps & {};
