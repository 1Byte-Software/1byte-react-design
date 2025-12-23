import styled from '@emotion/styled';
import { InputNumber } from 'antd';
import type { ValueType } from 'rc-input-number';

export const InputNumberStyledFunc = <T extends ValueType = ValueType>() =>
    styled(InputNumber<T> as any)``;
