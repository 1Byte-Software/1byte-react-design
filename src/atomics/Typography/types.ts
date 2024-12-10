import { Typography, GetProps } from 'antd';
import { ComponentToken } from 'antd/es/typography/style';

/**
 * @description Override TypographyComponentToken of antd.
 */
export type TypographyComponentToken = ComponentToken & {};

type TypographyLinkProps = GetProps<typeof Typography.Link>;
type TypographyTextProps = GetProps<typeof Typography.Text>;
type TypographyTitleProps = GetProps<typeof Typography.Title>;
type TypographyParagraphProps = GetProps<typeof Typography.Paragraph>;

export interface RdTypographyLinkProps extends TypographyLinkProps {}
export interface RdTypographyTextProps extends Omit<TypographyTextProps, 'onChange'> {
    onChange?: (value: string) => void;
}
export interface RdTypographyTitleProps extends TypographyTitleProps {}
export interface RdTypographyParagraphProps extends TypographyParagraphProps {}

export interface TypographyCompoundedComponent {
    Link: RdTypographyLinkProps;
    Text: RdTypographyTextProps;
    Title: RdTypographyTitleProps;
    Paragraph: RdTypographyParagraphProps;
}
