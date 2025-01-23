import { Button, GetProps } from 'antd';
import { ComponentToken as ButtonComponentTokenAntd } from 'antd/es/button/style';
import { ButtonInternal } from './Button';
import { ButtonGroupInternal } from './ButtonGroup';

//#region Define Ant Design types
type ButtonProps = GetProps<typeof Button>;
type ButtonGroupProps = GetProps<typeof Button.Group>;
//#endregion

//#region Define extended component tokens
type ButtonComponentTokenExtend = {};
//#endregion

/**
 * @description The color of the button extend.
 */
export type ColorButtonExtendProp = 'second' | 'tertiary' | 'quaternary';

export type AlignButtonProp = 'left' | 'center' | 'right';

//#region Define extended types
type ButtonPropsExtend = {
    /**
     * @description The color of the button.
     * @see ButtonProps#color
     */
    color?: ButtonProps['color'] | ColorButtonExtendProp;
};

type ButtonGroupPropsExtend = {};
//#endregion

//#region Export types
export type RdButtonProps = Omit<ButtonProps, 'color'> & ButtonPropsExtend;
export type RdButtonGroupProps = ButtonGroupProps & ButtonGroupPropsExtend;

export type RdButtonComponentToken = ButtonComponentTokenAntd & ButtonComponentTokenExtend;
//#endregion

export type RdButtonCompoundedComponent = typeof ButtonInternal & {
    Group: typeof ButtonGroupInternal;
};
