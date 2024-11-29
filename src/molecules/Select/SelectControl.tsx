import { Select as AntdSelect, SelectProps } from 'antd';
import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { LabelField } from '../LabelField';
import { SelectWrapper } from './styles';
import { RdSelectControlProps } from './types';
import { RefAttributes } from 'react';
import { Select } from './Select';

export const SelectControl = ({
    name,
    control,
    defaultValue,

    label: labelFieldProps,

    ...antdProps
}: RdSelectControlProps & RefAttributes<RdSelectControlProps>) => {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
        defaultValue,
    });

    return (
        <ConfigProviderDesign>
            <SelectWrapper>
                <ConditionalWrapper
                    condition={Boolean(labelFieldProps)}
                    wrapper={LabelField}
                    wrapperProps={labelFieldProps}
                >
                    <Select
                        {...(antdProps as SelectProps)}
                        value={value === undefined ? '' : value}
                        onChange={onChange}
                        onBlur={onBlur}
                        ref={ref}
                    />
                </ConditionalWrapper>
                {invalid && <TextError>{error?.message}</TextError>}
            </SelectWrapper>
        </ConfigProviderDesign>
    );
};
