import { ForwardedRef, forwardRef } from 'react';
import { config, RdComponentsConfig } from '../..';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { ButtonStyles } from './styles';
import { colorButtonExtend, RdButtonProps } from './types';
import { useExtendColor } from './useExtendColor';

const isColorButtonExtend = (
    color: NonNullable<RdButtonProps['color']>
): color is colorButtonExtend => {
    return ['second', 'tertiary', 'quaternary'].includes(color);
};

export const Button = forwardRef(
    (
        { width, color, to, ...antdProps }: RdButtonProps,
        ref: ForwardedRef<HTMLButtonElement>
    ) => {
        let newButtonDesignToken: RdComponentsConfig['Button'] = {
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
                <ButtonStyles ref={ref} width={width} color={color} {...antdProps} />
            </ConfigProviderDesign>
        );
    }
);
