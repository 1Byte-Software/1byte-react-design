import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { SelectStyledFunc } from './styles';
import { RdSelectComponent, RdSelectProps } from './types';

export const Select: RdSelectComponent = <
    ValueType = any,
    OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType
>(
    props: React.PropsWithChildren<RdSelectProps<ValueType, OptionType>>
) => {
    const { rootClassName } = props;

    const SelectStyled = useMemo(
        () =>
            SelectStyledFunc<ValueType, OptionType>() as React.FC<
                RdSelectProps<ValueType, OptionType>
            >,
        []
    );

    return <SelectStyled rootClassName={clsx('rd-select', rootClassName)} {...props} />;
};
