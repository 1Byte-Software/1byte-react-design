import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Card } from 'antd';
import { getExcludeForwardProps } from '../../utils/styles';
import { getComponentOrGlobalToken, getComponentToken } from '../../utils/token';
import { RdCardProps } from './types';

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
                border-radius: 0 ${getComponentOrGlobalToken('Card', 'borderRadiusLG')}px
                    ${getComponentOrGlobalToken('Card', 'borderRadiusLG')}px
                    ${getComponentOrGlobalToken('Card', 'borderRadiusLG')}px;
            }

            &:not(:has(> .ant-card-head)) {
                > .ant-card-body {
                    border-top: 10px solid ${getComponentToken('Card', 'headerBg')};
                    border-radius: ${getComponentOrGlobalToken('Card', 'borderRadiusLG')}px;
                }
            }

            > .ant-card-head {
                display: inline-flex;
            }

            > .ant-card-body {
                background-color: ${getComponentOrGlobalToken('Card', 'colorBgContainer')};
            }

            &.ant-card-bordered {
                border: none;

                > .ant-card-body {
                    border-width: ${getComponentOrGlobalToken('Card', 'lineWidth')}px;
                    border-color: ${getComponentOrGlobalToken('Card', 'colorBorderSecondary')};
                }
            }

            &:not(.ant-card-bordered) {
                box-shadow: none;

                > .ant-card-body {
                    box-shadow: ${getComponentOrGlobalToken('Card', 'boxShadowTertiary')};
                }
            }
        }
    `}
`;
