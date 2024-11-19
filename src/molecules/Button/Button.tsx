import { config, IRdComponentsConfig } from '../..';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { ButtonStyles } from './styles';
import { colorButtonExtend, RdButtonProps } from './types';
import { useExtendColor } from './useExtendColor';

const isColorButtonExtend = (
    color: NonNullable<RdButtonProps['color']>
): color is colorButtonExtend => {
    return ['second', 'tertiary', 'quaternary'].includes(color);
};

export const Button = ({ width, color, to, ...antdProps }: RdButtonProps) => {
    let newButtonDesignToken: IRdComponentsConfig['Button'] = {
        ...config.componentToken?.Button,
        algorithm: true,
    };

    //#region Handle extend color props
    if (color && isColorButtonExtend(color)) {
        // Get design token config for color.
        const designTokenConfig = useExtendColor(color);

        // Merge design token config with button design token.
        newButtonDesignToken = {
            ...newButtonDesignToken,
            ...designTokenConfig,
        };

        // Set color is primary if color include 'second', 'tertiary', 'quaternary' because these color is  color primary in component token.
        color = 'primary';
    }
    //#endregion

    return (
        <ConfigProviderDesign
            componentToken={{
                Button: newButtonDesignToken,
            }}
        >
            <ButtonStyles width={width} color={color} {...antdProps} />
        </ConfigProviderDesign>
    );
};
