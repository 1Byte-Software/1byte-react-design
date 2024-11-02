import styled from '@emotion/styled';
import { Radio } from 'antd';
import { TAxis } from '../../models';
import { getAxisStyles } from '../../utils/styles';

export const RadioStyles = styled(Radio)``;

export const RadioGroupStyles = styled(Radio.Group)<{ axis?: TAxis }>`
    ${props => getAxisStyles(props.axis)}
`;

export const RadioButtonStyles = styled(Radio.Button)``;
