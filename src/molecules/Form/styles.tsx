import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Form } from 'antd';
import { getExcludeForwardProps } from '../../utils/styles';
import { RdFormItemProps } from './types';

export const FormStyles = styled(Form)``;
export const FormItemStyles = styled(Form.Item, {
    shouldForwardProp: prop => getExcludeForwardProps<RdFormItemProps>(['block'], prop),
})<RdFormItemProps>`
    ${({ block }) =>
        block &&
        css`
            width: 100%;
        `}
`;
