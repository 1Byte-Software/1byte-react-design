import { GetProps, Upload, UploadFile } from 'antd';
import { ComponentToken as UploadComponentTokenAntd } from 'antd/es/upload/style';
import { UploadDragger } from './UploadDragger';

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

//#region Define component types
export type RdUploadComponent = React.ForwardRefExoticComponent<RdUploadProps>;
export type RdUploadDraggerComponent = React.ForwardRefExoticComponent<RdUploadDraggerProps>;

export type RdUploadCompoundedComponent = typeof Upload & {
    Dragger: typeof UploadDragger;
};

//#endregion
