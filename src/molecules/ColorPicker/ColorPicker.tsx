import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { ColorPickerStyles } from './styles';
import { RdColorPickerProps } from './types';

export const ColorPicker = ({ ...antdProps }: RdColorPickerProps) => {
    return (
        <ConfigProviderDesign>
            <ColorPickerStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
