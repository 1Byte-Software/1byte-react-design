import { Typography, GetProps } from 'antd';
import { ComponentToken as TypographyComponentTokenAntd } from 'antd/es/typography/style';

//#region Define Ant Design types
type TypographyProps = GetProps<typeof Typography>;
type TypographyLinkProps = GetProps<typeof Typography.Link>;
type TypographyParagraphProps = GetProps<typeof Typography.Paragraph>;
type TypographyTextProps = GetProps<typeof Typography.Text>;
type TypographyTitleProps = GetProps<typeof Typography.Title>;
//#endregion

//#region Define extended component tokens
type TypographyComponentTokenExtend = {};
//#endregion

//#region Define extended types
type TypographyPropsExtend = {};
type TypographyLinkPropsExtend = {};
type TypographyParagraphPropsExtend = {};
type TypographyTextPropsExtend = {
    /**
     * @description The size of the text.
     * @default "normal"
     */
    size?: 'small' | 'normal';

    /**
     * @description Callback function that is triggered when the text value changes.
     * @param value The new value of the text.
     */
    onChange?: (value: string) => void;
};

/**
 * Extended properties for customizing the Typography.Title component.
 */
type TypographyTitlePropsExtend = {
    /**
     * If set to `true`, disables the default margin applied to the Typography.Title component.
     * @default false
     */
    disableMargin?: boolean;
};
//#endregion

//#region Export types
export type RdTypographyProps = TypographyProps & TypographyPropsExtend;
export type RdTypographyLinkProps = TypographyLinkProps & TypographyLinkPropsExtend;
export type RdTypographyParagraphProps = TypographyParagraphProps & TypographyParagraphPropsExtend;
export type RdTypographyTextProps = TypographyTextProps & TypographyTextPropsExtend;
export type RdTypographyTitleProps = TypographyTitleProps & TypographyTitlePropsExtend;

export type RdTypographyComponentToken = TypographyComponentTokenAntd &
    TypographyComponentTokenExtend;
//#endregion
