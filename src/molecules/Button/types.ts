import { Button, GetProps } from 'antd';
import { ComponentToken } from 'antd/es/button/style';

type ButtonProps = GetProps<typeof Button>;

/**
 * @description Override ButtonComponentToken of antd.
 */
export type ButtonComponentToken = ComponentToken & {};

/**
 * @description The color of the button extend.
 */
export type colorButtonExtend = 'second' | 'tertiary' | 'quaternary';

/**
 * @description The props of the button.
 * @override antd.ButtonProps
 * @see ButtonProps
 */
export interface RdButtonProps extends Omit<ButtonProps, 'color'> {
    /**
     * @description The width of the button.
     */
    width?: string | number;

    /**
     * @description The color of the button.
     * @see ButtonProps#color
     */
    color?: ButtonProps['color'] | colorButtonExtend;

    /**
     * @description Link in react-router-dom.
     * @see Link
     */
    to?: string;

    /**
     * @description Align button.
     */
    align?: 'left' | 'center' | 'right';
}
