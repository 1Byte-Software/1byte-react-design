import styled from '@emotion/styled';
import { config } from '../..';

export const H1Wrapper = styled.h1`
    font-size: ${config.designToken.fontSizeHeading1};
`;
export const H2Wrapper = styled.h2`
    font-size: ${config.designToken.fontSizeHeading2};
`;
export const H3Wrapper = styled.h3`
    font-size: ${config.designToken.fontSizeHeading3};
`;
export const H4Wrapper = styled.h4`
    font-size: ${config.designToken.fontSizeHeading4};
`;
export const H5Wrapper = styled.h5`
    font-size: ${config.designToken.fontSizeHeading5};
`;
export const H6Wrapper = styled.h6`
    font-size: ${config.designToken.fontSizeLG};
`;
export const TitleWrapper = styled.span`
    font-size: ${config.designToken.fontSizeLG};
    font-weight: ${config.designToken.fontWeightStrong};
    text-transform: capitalize;
`;
export const TextWrapper = styled.span`
    font-size: ${config.designToken.fontSize};
`;
export const DescriptionWrapper = styled.span`
    font-size: ${config.designToken.fontSizeSM};
    color: ${config.designToken.colorTextDescription};
    font-style: italic;
`;
