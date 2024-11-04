import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { SliderStyles } from './styles';
import { SliderProps } from './types';

export const Slider = ({ ...antdProps }: SliderProps) => {
    return (
        <ConfigProviderDesign>
            <SliderStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
