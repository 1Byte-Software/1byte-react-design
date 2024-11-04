import styled from '@emotion/styled';
import { Checkbox } from 'antd';
import { TAxis } from '../../models';
import { getAxisStyles } from '../../utils/styles';

export const CheckboxStyles = styled(Checkbox)``;

export const CheckboxGroupStyles = styled(Checkbox.Group)<{ axis?: TAxis }>`
    ${props => getAxisStyles(props.axis)}
`;
