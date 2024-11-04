import { ButtonProps } from 'antd';

/**
 * @description The color of the button extend.
 */
export type colorButtonExtend = 'second' | 'tertiary' | 'quaternary';

/**
 * @description The props of the button.
 * @override antd.ButtonProps
 * @see ButtonProps
 */
export interface IButtonProps extends Omit<ButtonProps, 'color' | 'variant'> {
    /**
     * @description The width of the button.
     */
    width?: string | number;

    /**
     * @description The color of the button.
     * @see ButtonProps#color
     */
    color?: ButtonProps['color'] | colorButtonExtend;
}
