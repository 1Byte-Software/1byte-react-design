import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Form } from 'antd';
import { getExcludeForwardProps } from '../../utils/styles';
import { RdFormItemProps } from './types';

export const FormStyles = styled(Form as any)``;
export const FormListStyles = styled(Form.List)``;
export const FormProviderStyles = styled(Form.Provider)``;
export const FormErrorListStyles = styled(Form.ErrorList)``;
export const FormItemStyles = styled(Form.Item, {
    shouldForwardProp: prop =>
        getExcludeForwardProps<RdFormItemProps>(['block', 'disableMargin'], prop),
})<RdFormItemProps>`
    ${({ disableMargin }) =>
        disableMargin &&
        css`
            margin-bottom: 0px;
        `}

    ${({ block }) =>
        block &&
        css`
            width: 100%;
        `}
`;
