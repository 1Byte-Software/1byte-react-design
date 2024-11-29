import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { SliderStyles } from './styles';
import { RdSliderProps } from './types';

export const Slider = ({ ...antdProps }: RdSliderProps) => {
    return (
        <ConfigProviderDesign>
            <SliderStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
