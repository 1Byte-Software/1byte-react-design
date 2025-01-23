import { Upload, GetProps, UploadFile } from 'antd';
import { ComponentToken as UploadComponentTokenAntd } from 'antd/es/upload/style';

//#region Define Ant Design types
type UploadProps = GetProps<typeof Upload>;
type UploadDraggerProps = GetProps<typeof Upload.Dragger>;
//#endregion

//#region Define extended component tokens
type UploadComponentTokenExtend = {};
//#endregion

//#region Define extended types
type UploadPropsExtend = {};
type UploadDraggerPropsExtend = {};
//#endregion

//#region Export types
export type RdUploadProps = UploadProps & UploadPropsExtend;
export type RdUploadDraggerProps = UploadDraggerProps & UploadDraggerPropsExtend;

export type RdUploadComponentToken = UploadComponentTokenAntd & UploadComponentTokenExtend;

export type RdUploadFile<T = any> = UploadFile<T>;
//#endregion