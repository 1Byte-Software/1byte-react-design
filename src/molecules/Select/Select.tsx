import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import clsx from 'clsx';
import React, { forwardRef, useMemo } from 'react';
import { SelectStyledFunc } from './styles';
import { RdSelectComponent, RdSelectProps } from './types';

function SelectInner<
    ValueType = any,
    OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType
>(props: React.PropsWithChildren<RdSelectProps<ValueType, OptionType>>, ref: React.Ref<any>) {
    const { rootClassName } = props;

    const SelectStyled = useMemo(
        () =>
            SelectStyledFunc<ValueType, OptionType>() as React.FC<
                RdSelectProps<ValueType, OptionType>
            >,
        []
    );

    return <SelectStyled ref={ref} rootClassName={clsx('rd-select', rootClassName)} {...props} />;
}

export const Select = forwardRef(SelectInner) as RdSelectComponent;
