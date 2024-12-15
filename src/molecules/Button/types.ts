import { Button, GetProps } from 'antd';
import { ComponentToken as ButtonComponentTokenAntd } from 'antd/es/button/style';

//#region Define props
type ButtonProps = GetProps<typeof Button>;
//#endregion

//#region Custom component token
type ButtonComponentTokenExtend = {};
//#endregion

/**
 * @description The color of the button extend.
 */
export type colorButtonExtend = 'second' | 'tertiary' | 'quaternary';

//#region Custom props
type ButtonPropsExtend = {
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
};
//#endregion

//#region export type
export type RdButtonProps = Omit<ButtonProps, 'color'> & ButtonPropsExtend;

export type RdButtonComponentToken = ButtonComponentTokenAntd & ButtonComponentTokenExtend;
//#endregion
