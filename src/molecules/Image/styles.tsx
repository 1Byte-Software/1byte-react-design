import styled from '@emotion/styled';
import { Image } from 'antd';
import { getExcludeForwardProps } from '../../utils';
import { RdImageProps } from './types';

export const ImageStyles = styled(Image, {
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
