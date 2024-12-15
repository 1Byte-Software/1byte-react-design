import { Typography, GetProps } from 'antd';
import { ComponentToken as TypographyComponentTokenAntd } from 'antd/es/typography/style';

//#region Define props
type TypographyProps = GetProps<typeof Typography>;
type TypographyLinkProps = GetProps<typeof Typography.Link>;
type TypographyParagraphProps = GetProps<typeof Typography.Paragraph>;
type TypographyTextProps = GetProps<typeof Typography.Text>;
type TypographyTitleProps = GetProps<typeof Typography.Title>;
//#endregion

//#region Custom component token
type TypographyComponentTokenExtend = {};
//#endregion

//#region Custom props
type TypographyPropsExtend = {};
type TypographyLinkPropsExtend = {};
type TypographyParagraphPropsExtend = {};
type TypographyTextPropsExtend = {
    onChange?: (value: string) => void;
};
type TypographyTitlePropsExtend = {};
//#endregion

//#region export type
export type RdTypographyProps = TypographyProps & TypographyPropsExtend;
export type RdTypographyLinkProps = TypographyLinkProps & TypographyLinkPropsExtend;
export type RdTypographyParagraphProps = TypographyParagraphProps & TypographyParagraphPropsExtend;
export type RdTypographyTextProps = TypographyTextProps & TypographyTextPropsExtend;
export type RdTypographyTitleProps = TypographyTitleProps & TypographyTitlePropsExtend;

export type RdTypographyComponentToken = TypographyComponentTokenAntd &
    TypographyComponentTokenExtend;
//#endregion
