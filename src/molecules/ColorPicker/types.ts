import { ColorPicker, GetProps } from 'antd';
import { ComponentToken as ColorPickerComponentTokenAntd } from 'antd/es/color-picker/style';

//#region Define Ant Design types
type ColorPickerPropsAntd = GetProps<typeof ColorPicker>;
//#endregion

//#region Define extended component tokens
type ColorPickerComponentTokenExtend = {};
//#endregion

//#region Define extended types
type ColorPickerPropsExtend = {};
//#endregion

//#region Export types
export type RdColorPickerProps = ColorPickerPropsAntd & ColorPickerPropsExtend;

export type RdColorPickerComponentToken = ColorPickerComponentTokenAntd &
    ColorPickerComponentTokenExtend;
//#endregion

//#region Define component types

//#endregion
