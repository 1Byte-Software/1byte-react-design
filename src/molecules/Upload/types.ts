import { Upload, GetProps, UploadFile } from 'antd';
import { ComponentToken as UploadComponentTokenAntd } from 'antd/es/upload/style';

//#region Define props
type UploadProps = GetProps<typeof Upload>;
type UploadDraggerProps = GetProps<typeof Upload.Dragger>;
//#endregion

//#region Custom component token
type UploadComponentTokenExtend = {};
//#endregion

//#region Custom props
type UploadPropsExtend = {};
type UploadDraggerPropsExtend = {};
//#endregion

//#region export type
export type RdUploadProps = UploadProps & UploadPropsExtend;
export type RdUploadDraggerProps = UploadDraggerProps & UploadDraggerPropsExtend;

export type RdUploadComponentToken = UploadComponentTokenAntd & UploadComponentTokenExtend;

export type RdUploadFile<T = any> = UploadFile<T>;
//#endregion