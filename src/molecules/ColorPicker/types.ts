import { ColorPickerProps } from 'antd';
import { ComponentToken as ColorPickerComponentTokenAntd } from 'antd/es/color-picker/style';
import { ColorPickerInternal } from './ColorPicker';

//#region Define Ant Design types
type ColorPickerPropsAntd = ColorPickerProps;
//#endregion

//#region Define extended component tokens
type ColorPickerComponentTokenExtend = {};
//#endregion

//#region Define extended types
type ColorPickerPropsExtend = {
    /**
     * Determines whether the color picker should be in a read-only state.
     * When set to `true`, user interactions such as selecting or changing colors are disabled.
     *
     * @default false
     */
    readonly?: boolean;
};
//#endregion

//#region Export types
export type RdColorPickerProps = ColorPickerPropsAntd & ColorPickerPropsExtend;

export type RdColorPickerComponentToken = ColorPickerComponentTokenAntd &
    ColorPickerComponentTokenExtend;
//#endregion

//#region Define component types
export type RdColorPickerInternalComponent = React.FC<RdColorPickerProps>;

export type RdColorPickerCompoundedComponent = typeof ColorPickerInternal & {};
//#endregion
