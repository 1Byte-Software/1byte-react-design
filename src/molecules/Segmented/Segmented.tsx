import { useMemo } from 'react';
import { SegmentedStyledFunc } from './styles';
import { RdSegmentedComponent, RdSegmentedProps } from './types';

export const InternalSegmented = <ValueType extends string | number>(
    props: RdSegmentedProps<ValueType>
) => {
    const SegmentedStyled = useMemo(() => {
        return SegmentedStyledFunc<ValueType>();
    }, [SegmentedStyledFunc]);

    return <SegmentedStyled {...props} />;
};

export const Segmented = InternalSegmented as RdSegmentedComponent;
