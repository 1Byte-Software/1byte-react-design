import styled from '@emotion/styled';
import { Segmented } from 'antd';

export const SegmentedStyles = styled(Segmented)``;

export const SegmentedStyledFunc = <ValueType extends string | number>() =>
    styled(Segmented<ValueType>)``;
