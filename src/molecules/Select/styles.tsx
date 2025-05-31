import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Select } from 'antd';
import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { getComponentOrGlobalToken, getComponentToken, getExcludeForwardProps } from '../../utils';
import { RdSelectComponent, RdSelectProps } from './types';

export const SelectStyledFunc = <
    ValueType = any,
    OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType
>() =>
    styled(Select<ValueType, OptionType> as RdSelectComponent, {
        shouldForwardProp: prop => {
            return getExcludeForwardProps<RdSelectProps>(
                ['isHideValueOnLoading', 'fullWidth'] as (keyof RdSelectProps)[],
                prop
            );
        },
        label: 'rd-select',
    })<RdSelectProps>`
        ${({ isHideValueOnLoading, loading }) =>
            isHideValueOnLoading && loading && isHideValueOnLoadingCSS}

        ${({ fullWidth }) => fullWidth && fullWidthCSS}

        ${({ variant }) => {
            switch (variant) {
                // Outlined transparent variant is react-design builtin variant
                case 'outlined-transparent': {
                    return variantOutlinedTransparent;
                }

                // Use default variant in antd
                default:
                    return null;
            }
        }}
    `;

const isHideValueOnLoadingCSS = css`
    &.rd-select {
        .ant-select-selection-wrap {
            display: none;
        }
    }
`;

const fullWidthCSS = css`
    &.rd-select {
        width: 100%;
    }
`;

const variantOutlinedTransparent = css`
    &.rd-select {
        .ant-select-selector {
            border: 1px solid #d9d9d9;
            background: transparent;
        }

        &:hover {
            .ant-select-selector {
                border-color: ${getComponentToken('Select', 'hoverBorderColor') ||
                getComponentOrGlobalToken('Select', 'colorPrimaryHover')};
            }
        }

        &.ant-select-focused {
            .ant-select-selector {
                box-shadow: 0 0 0 2px
                    ${getComponentToken('Select', 'activeOutlineColor') ||
                    getComponentOrGlobalToken('Select', 'colorPrimaryBorder')};
                border-color: ${getComponentToken('Select', 'activeBorderColor') ||
                getComponentOrGlobalToken('Select', 'colorPrimaryActive')};
                outline: 0;
            }
        }
    }
`;
