import styled from '@emotion/styled';
import { config } from '../..';

export const H1Wrapper = styled.h1`
    font-size: ${config.designToken.fontSizeHeading1}px;
`;
export const H2Wrapper = styled.h2`
    font-size: ${config.designToken.fontSizeHeading2}px;
`;
export const H3Wrapper = styled.h3`
    font-size: ${config.designToken.fontSizeHeading3}px;
`;
export const H4Wrapper = styled.h4`
    font-size: ${config.designToken.fontSizeHeading4}px;
`;
export const H5Wrapper = styled.h5`
    font-size: ${config.designToken.fontSizeHeading5}px;
`;
export const H6Wrapper = styled.h6`
    font-size: ${config.designToken.fontSizeLG}px;
`;
export const TitleWrapper = styled.span`
    font-size: ${config.designToken.fontSizeLG}px;
    font-weight: ${config.designToken.fontWeightStrong};
`;
export const TextWrapper = styled.span`
    font-size: ${config.designToken.fontSize};
`;
export const DescriptionWrapper = styled.span`
    font-size: ${config.designToken.fontSizeSM}px;
    color: ${config.designToken.colorTextDescription};
    font-style: italic;
`;
