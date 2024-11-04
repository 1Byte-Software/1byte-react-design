import { ButtonProps } from 'antd';

export type colorButtonExtend = 'second' | 'tertiary' | 'quaternary';

export interface IButtonProps extends Omit<ButtonProps, 'color'> {
    /**
     * The width of the button.
     */
    width?: string | number;

    /**
     * The color of the button.
     *
     * @see ButtonProps#color
     */
    color?: ButtonProps['color'] | colorButtonExtend;
}