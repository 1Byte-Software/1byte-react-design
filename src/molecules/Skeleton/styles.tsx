import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Skeleton } from 'antd';
import { getExcludeForwardProps } from '../../utils';
import {
    RdSkeletonAvatarComponent,
    RdSkeletonAvatarProps,
    RdSkeletonButtonComponent,
    RdSkeletonButtonProps,
    RdSkeletonComponent,
    RdSkeletonImageComponent,
    RdSkeletonImageProps,
    RdSkeletonInputComponent,
    RdSkeletonInputProps,
    RdSkeletonNodeComponent,
    RdSkeletonNodeProps,
} from './types';

export const SkeletonStyled = styled(Skeleton as RdSkeletonComponent, {
    shouldForwardProp: prop =>
        getExcludeForwardProps<RdSkeletonImageProps>(
            ['fullWidth'] as (keyof RdSkeletonImageProps)[],
            prop
        ),
})`
    ${({ fullWidth }) => fullWidth && fullWidthCSS}
`;
export const SkeletonButtonStyled = styled(Skeleton.Button as RdSkeletonButtonComponent, {
    shouldForwardProp: prop =>
        getExcludeForwardProps<RdSkeletonButtonProps>(
            ['fullWidth'] as (keyof RdSkeletonButtonProps)[],
            prop
        ),
})`
    ${({ fullWidth }) => fullWidth && fullWidthCSS}
`;
export const SkeletonAvatarStyled = styled(Skeleton.Avatar as RdSkeletonAvatarComponent, {
    shouldForwardProp: prop =>
        getExcludeForwardProps<RdSkeletonAvatarProps>(
            ['fullWidth'] as (keyof RdSkeletonAvatarProps)[],
            prop
        ),
})`
    ${({ fullWidth }) => fullWidth && fullWidthCSS}
`;
export const SkeletonImageStyled = styled(Skeleton.Image as RdSkeletonImageComponent, {
    shouldForwardProp: prop =>
        getExcludeForwardProps<RdSkeletonImageProps>(
            ['fullWidth'] as (keyof RdSkeletonImageProps)[],
            prop
        ),
})`
    ${({ fullWidth }) => fullWidth && fullWidthCSS}
`;
export const SkeletonInputStyled = styled(Skeleton.Input as RdSkeletonInputComponent, {
    shouldForwardProp: prop =>
        getExcludeForwardProps<RdSkeletonInputProps>(
            ['fullWidth'] as (keyof RdSkeletonInputProps)[],
            prop
        ),
})`
    ${({ fullWidth }) => fullWidth && fullWidthCSS}
`;
export const SkeletonNodeStyled = styled(Skeleton.Node as RdSkeletonNodeComponent, {
    shouldForwardProp: prop =>
        getExcludeForwardProps<RdSkeletonNodeProps>(
            ['fullWidth'] as (keyof RdSkeletonNodeProps)[],
            prop
        ),
})`
    ${({ fullWidth }) => fullWidth && fullWidthCSS}
`;

const fullWidthCSS = css`
    width: 100% !important;

    &.rd-skeleton {
        width: 100% !important;
    }
`;
