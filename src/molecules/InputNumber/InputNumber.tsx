import { ValueType } from 'rc-input-number';
import { useMemo } from 'react';
import { InputNumberStyledFunc } from './styles';
import { RdInputNumberProps } from './types';

export const InputNumber = <T extends ValueType = ValueType>(
    props: RdInputNumberProps<T>
) => {
    const InputNumberStyled = useMemo(() => {
        return InputNumberStyledFunc<T>();
    }, [InputNumberStyledFunc]);

    return <InputNumberStyled {...props} />;
};
