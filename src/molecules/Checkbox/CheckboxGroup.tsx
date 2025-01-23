import { Checkbox as CheckboxAntd } from 'antd';
import { RdCheckboxGroupProps } from './types';

export const CheckboxGroup = <T,>(props: RdCheckboxGroupProps<T>) => {
    const { ref, ...antdProps } = props;

    return <CheckboxAntd.Group<T> ref={ref} {...antdProps} />;
};
