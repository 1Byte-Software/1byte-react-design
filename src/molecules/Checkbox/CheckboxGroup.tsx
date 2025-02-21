import { Checkbox as CheckboxAntd } from 'antd';
import { RdCheckboxGroupProps } from './types';

export const CheckboxGroup = <T,>(props: RdCheckboxGroupProps<T>) => {
    return <CheckboxAntd.Group<T> {...props} />;
};
