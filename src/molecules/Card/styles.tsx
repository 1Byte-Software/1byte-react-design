import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Card } from 'antd';
import { getExcludeForwardProps } from '../../utils/styles';
import { getAliasToken, getComponentToken } from '../../utils/token';
import { RdCardProps, RdGridCardProps, RdMetaCardProps } from './types';

export const CardStyles = styled(Card, {
    shouldForwardProp: prop =>
        getExcludeForwardProps<RdCardProps>(['variant'] as (keyof RdCardProps)[], prop),
})<RdCardProps>`
    ${() => css`
        // Variant compact class
        &.rd-card-variant-compact {
            &.ant-card {
                background-color: transparent;

                // border-radius: 0 []px []px []px;
                border-radius: 0 ${getAliasToken('Card', 'borderRadiusLG')}px
                    ${getAliasToken('Card', 'borderRadiusLG')}px
                    ${getAliasToken('Card', 'borderRadiusLG')}px;
            }

            &:not(:has(> .ant-card-head)) {
                > .ant-card-body {
                    border-top: 10px solid ${getComponentToken('Card', 'headerBg')};
                    border-radius: ${getAliasToken('Card', 'borderRadiusLG')}px;
                }
            }

            > .ant-card-head {
                display: inline-flex;
            }

            > .ant-card-body {
                background-color: ${getAliasToken('Card', 'colorBgContainer')};
            }

            &.ant-card-bordered {
                border: none;

                > .ant-card-body {
                    border-width: ${getAliasToken('Card', 'lineWidth')}px;
                    border-color: ${getAliasToken('Card', 'colorBorderSecondary')};
                }
            }

            &:not(.ant-card-bordered) {
                box-shadow: none;

                > .ant-card-body {
                    box-shadow: ${getAliasToken('Card', 'boxShadowTertiary')};
                }
            }
        }
    `}
`;

export const GridCardStyles = styled(Card.Grid)<RdGridCardProps>``;
export const MetaCardStyles = styled(Card.Meta)<RdMetaCardProps>``;
