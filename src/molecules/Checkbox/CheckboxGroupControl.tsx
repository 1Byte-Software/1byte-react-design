import { Checkbox as CheckboxAntd } from 'antd';
import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { LabelField } from '../LabelField';
import { ICheckboxGroupControlProps } from './types';
import { CheckboxGroupStyles } from './styles';

export const CheckboxGroupControl = ({
    name,
    control,

    label: labelFieldProps,

    axis = 'horizontal',

    ...antdProps
}: ICheckboxGroupControlProps) => {
    const {
        field: { value, onChange, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

    return (
        <ConfigProviderDesign>
            <ConditionalWrapper
                condition={Boolean(labelFieldProps)}
                wrapper={LabelField}
                wrapperProps={labelFieldProps}
            >
                <CheckboxGroupStyles
                    axis={axis}
                    {...antdProps}
                    value={value}
                    onChange={onChange}
                    ref={ref}
                />
            </ConditionalWrapper>
            {invalid && <TextError>{error?.message}</TextError>}
        </ConfigProviderDesign>
    );
};
