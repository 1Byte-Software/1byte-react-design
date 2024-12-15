import { ColorPicker, GetProps } from 'antd';
import { ComponentToken as ColorPickerComponentTokenAntd } from 'antd/es/color-picker/style';

//#region Define props
type ColorPickerProps = GetProps<typeof ColorPicker>;
//#endregion

//#region Custom component token
type ColorPickerComponentTokenExtend = {};
//#endregion

//#region Custom props
type ColorPickerPropsExtend = {};
//#endregion

//#region export type
export type RdColorPickerProps = ColorPickerProps & ColorPickerPropsExtend;

export type RdColorPickerComponentToken = ColorPickerComponentTokenAntd &
    ColorPickerComponentTokenExtend;
//#endregion
