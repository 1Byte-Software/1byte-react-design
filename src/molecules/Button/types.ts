import { ButtonProps } from 'antd';

// export type colorButtonExtend = 'second' | 'tertiary' | 'quaternary';

// export type colorButton = ButtonProps['color'] | colorButtonExtend;

export interface IButtonProps extends ButtonProps {
    /**
     * The width of the button.
     */
    width?: string | number;

    // /**
    //  * The color of the button.
    //  *
    //  * @see ButtonProps#color
    //  */
    // color?: ButtonProps['color'] & colorButtonExtend;
}
