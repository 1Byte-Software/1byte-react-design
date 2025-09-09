import styled from '@emotion/styled';
import { Image } from 'antd';
import { getExcludeForwardProps } from '../../utils';
import { RdImageProps } from './types';

// Note: Using `Image as any` to bypass TypeScript error TS(4023):
// "Exported variable 'ImageStyled' has or is using name 'PreviewType' from external module ... but cannot be named."
// Reason: The `antd` library (v5.27.3) does not export the `PreviewType` from `rc-image`,
// causing TypeScript to fail resolving this type when generating declaration files (.d.ts).
// This is a temporary workaround to ensure successful builds, but it sacrifices type safety for `Image`.
// In the future, consider requesting `antd` to export `PreviewType` or re-export `PreviewType` in the project's module.
export const ImageStyled = styled(Image as any, {
    shouldForwardProp: prop =>
        getExcludeForwardProps<RdImageProps>([] as (keyof RdImageProps)[], prop),
})<RdImageProps>`
    ${({ hidden }) => {
        return (
            hidden &&
            `
                display: none
            `
        );
    }}
`;

export const PreviewGroupStyled = styled(Image.PreviewGroup)``;
