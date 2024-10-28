import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { ButtonStyles } from './styles';
import { IButtonProps } from './types';

// const isColorButtonExtend = (color: colorButton): color is colorButtonExtend => {
//     return ['second', 'tertiary', 'quaternary'].includes(color);
// };

export const Button = ({ width, ...antdProps }: IButtonProps) => {
    // const { color } = antdProps;

    // if (isColorButtonExtend(color)) {
    //     useExtendColor(color);
    // }

    // const components: ThemeConfig['components'] = {
    //     Button: {},
    // };

    return (
        <ConfigProviderDesign>
            <ButtonStyles width={width} {...antdProps} />
        </ConfigProviderDesign>
    );
};
