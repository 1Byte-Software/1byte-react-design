import { ColorPickerStyles } from './styles';
import { RdColorPickerCompoundedComponent, RdColorPickerInternalComponent } from './types';

export const ColorPickerInternal: RdColorPickerInternalComponent = props => {
    return <ColorPickerStyles {...props} />;
};

export const ColorPicker = ColorPickerInternal as RdColorPickerCompoundedComponent;

