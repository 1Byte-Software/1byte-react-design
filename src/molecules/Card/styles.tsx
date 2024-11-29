import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Card } from 'antd';
import { getComponentOrGlobalToken } from '../../utils/token';
import { RdCardProps } from './types';
import { config } from '../..';

export const CardStyles = styled(Card)<RdCardProps>`
    /* Handle variant prop */
    ${({ variant, title }) => {
        switch (variant) {
            case 'compact':
                return css`
                    ${!title &&
                    css`
                        .ant-card-body {
                            // #FIXED: 10px is a magic number
                            border-top: 10px solid ${config.componentToken?.Card?.headerBg};

                            border-radius: ${getComponentOrGlobalToken('Card', 'borderRadiusLG')}px;
                        }
                    `}

                    &.ant-card {
                        background-color: transparent;

                        // border-radius: 0 []px []px []px;
                        border-radius: 0 ${getComponentOrGlobalToken('Card', 'borderRadiusLG')}px
                            ${getComponentOrGlobalToken('Card', 'borderRadiusLG')}px
                            ${getComponentOrGlobalToken('Card', 'borderRadiusLG')}px;
                    }

                    .ant-card-head {
                        display: inline-flex;
                    }

                    .ant-card-body {
                        background-color: ${getComponentOrGlobalToken('Card', 'colorBgContainer')};
                    }

                    &.ant-card-bordered {
                        border: none;

                        .ant-card-body {
                            border-width: ${getComponentOrGlobalToken('Card', 'lineWidth')}px;
                            border-color: ${getComponentOrGlobalToken(
                                'Card',
                                'colorBorderSecondary'
                            )};
                        }
                    }

                    &:not(.ant-card-bordered) {
                        box-shadow: none;

                        .ant-card-body {
                            box-shadow: ${getComponentOrGlobalToken('Card', 'boxShadowTertiary')};
                        }
                    }
                `;
            case 'default':
                return null;
        }
    }}
`;
