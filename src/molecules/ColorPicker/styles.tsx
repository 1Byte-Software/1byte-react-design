import styled from '@emotion/styled';
import { ColorPicker } from 'antd';
import { getExcludeForwardProps } from '../../utils';
import { RdColorPickerProps } from './types';

export const ColorPickerStyles = styled(ColorPicker, {
    shouldForwardProp: prop =>
        getExcludeForwardProps<RdColorPickerProps>(
            ['readonly'] as (keyof RdColorPickerProps)[],
            prop
        ),
})<RdColorPickerProps>`
    ${({ readonly }) => {
        return (
            readonly &&
            `
                pointer-events: none;
            `
        );
    }}
`;
